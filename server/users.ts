"use server";

import { auth } from "@/lib/auth"; // path to your Better Auth server instance

export const signInUser = async (email: string, password: string) => {
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password
            },
            // returns a response object instead of data
        });

        return { success: true, message: "Signed in successfully" }

    } catch (error) {
        const e = error as Error;
        return { success: false, message: e.message || "Failed to sign in" }
    }

}


export const SignUpUser = async (email: string, password: string, name: string) => {
    try {
        await auth.api.signUpEmail({
            body: {
                email,
                password,
                name
            },
            // returns a response object instead of data
        });

        return { success: true, message: "Signed up successfully" }

    } catch (error) {
        const e = error as Error;
        return { success: false, message: e.message || "Failed to sign up" }
    }

}