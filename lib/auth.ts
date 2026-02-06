import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { prisma } from "./prisma";
import { nextCookies } from "better-auth/next-js"
import { Resend } from "resend";
import UserVerificationEmail from "@/components/emails/verification-email";
import PasswordResetEmail from "@/components/emails/reset-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    baseURL: process.env.BETTER_AUTH_URL,
    emailAndPassword: {
        enabled: true,
        sendResetPassword: async ({ user, url, token }, request) => {
            const { data, error } = await resend.emails.send({
                from: 'Velin <onboarding@velin.ai>',
                to: [user.email],
                subject: 'Reset your password',
                react: PasswordResetEmail({ username: user.name, resetUrl: url, requestTime: new Date().toISOString() }),
            });
        },
        onPasswordReset: async ({ user }, request) => {
            // your logic here
            console.log(`Password for user ${user.email} has been reset.`);
        },
    },
    emailVerification: {
        sendVerificationEmail: async ({ user, url, token }, request) => {
            const { data, error } = await resend.emails.send({
                from: 'Velin <onboarding@velin.ai>',
                to: [user.email],
                subject: 'Verify your email address',
                react: UserVerificationEmail({ userName: user.name, verificationUrl: url }),
            });
        },
        sendOnSignUp: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    plugins: [nextCookies()]
});