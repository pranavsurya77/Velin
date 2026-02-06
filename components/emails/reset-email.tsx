import * as React from 'react';
import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Button,
    Hr,
    Tailwind,
} from '@react-email/components';


interface PasswordResetEmailProps {
    username: string,
    resetUrl: string,
    requestTime: string,
}

const PasswordResetEmail = ({ username, resetUrl, requestTime }: PasswordResetEmailProps) => {
    return (
        <Html lang="en" dir="ltr">
            <Tailwind>
                <Head />
                <Body className="bg-gray-100 font-sans py-[40px]">
                    <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
                        {/* Header */}
                        <Section className="text-center mb-[32px]">
                            <Text className="text-[24px] font-bold text-gray-900 m-0 mb-[8px]">
                                Reset Your Password
                            </Text>
                            <Text className="text-[16px] text-gray-600 m-0">
                                We received a request to reset your password
                            </Text>
                        </Section>

                        {/* Main Content */}
                        <Section className="mb-[32px]">
                            <Text className="text-[16px] text-gray-800 mb-[16px] m-0">
                                Hi {username},
                            </Text>
                            <Text className="text-[16px] text-gray-800 mb-[24px] m-0 leading-[24px]">
                                Someone requested a password reset for your account. If this was you,
                                click the button below to create a new password. If you didn't make this request,
                                you can safely ignore this email.
                            </Text>

                            {/* Reset Button */}
                            <Section className="text-center mb-[24px]">
                                <Button
                                    href={resetUrl}
                                    className="bg-red-600 text-white px-[32px] py-[12px] rounded-[6px] text-[16px] font-semibold no-underline box-border inline-block"
                                >
                                    Reset Password
                                </Button>
                            </Section>

                            <Text className="text-[14px] text-gray-600 mb-[16px] m-0 leading-[20px]">
                                If the button above doesn't work, copy and paste this link into your browser:
                            </Text>
                            <Text className="text-[14px] text-blue-600 mb-[24px] m-0 break-all">
                                {resetUrl}
                            </Text>

                            <Text className="text-[14px] text-gray-600 mb-[16px] m-0 leading-[20px]">
                                This password reset link will expire in <strong>1 hour</strong> for security reasons.
                                After that, you'll need to request a new password reset.
                            </Text>
                        </Section>

                        <Hr className="border-gray-200 my-[24px]" />

                        {/* Security Information */}
                        <Section className="mb-[24px] bg-yellow-50 p-[20px] rounded-[6px] border border-yellow-200">
                            <Text className="text-[14px] text-yellow-800 mb-[8px] m-0 font-semibold">
                                🔒 Security Tips:
                            </Text>
                            <Text className="text-[14px] text-yellow-800 m-0 leading-[20px]">
                                • Choose a strong password with at least 8 characters<br />
                                • Include uppercase, lowercase, numbers, and special characters<br />
                                • Don't reuse passwords from other accounts<br />
                                • Never share your password with anyone
                            </Text>
                        </Section>

                        {/* Didn't Request Section */}
                        <Section className="mb-[24px] bg-gray-50 p-[20px] rounded-[6px] border border-gray-200">
                            <Text className="text-[14px] text-gray-700 mb-[8px] m-0 font-semibold">
                                Didn't request this reset?
                            </Text>
                            <Text className="text-[14px] text-gray-700 m-0 leading-[20px]">
                                If you didn't request a password reset, your account is still secure.
                                You can ignore this email, or contact our support team if you have concerns
                                about unauthorized access attempts.
                            </Text>
                        </Section>

                        {/* Footer */}
                        <Section className="text-center">
                            <Text className="text-[14px] text-gray-600 mb-[8px] m-0">
                                Need help? Contact our support team at{' '}
                                <a href="mailto:support@company.com" className="text-blue-600 no-underline">
                                    support@company.com
                                </a>
                            </Text>
                            <Text className="text-[12px] text-gray-500 mb-[16px] m-0">
                                Best regards,<br />
                                The Security Team
                            </Text>

                            <Hr className="border-gray-200 my-[16px]" />

                            <Text className="text-[12px] text-gray-400 m-0 mb-[4px]">
                                Company Name, 123 Business Street, City, State 12345
                            </Text>
                            <Text className="text-[12px] text-gray-400 m-0">
                                <a href="#" className="text-gray-400 no-underline">Unsubscribe</a> |
                                © 2026 Company Name. All rights reserved.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default PasswordResetEmail;