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

interface UserVerificationEmailProps {
    userName: string;
    verificationUrl: string;
}

const UserVerificationEmail = ({ userName, verificationUrl }: UserVerificationEmailProps) => {
    return (
        <Html lang="en" dir="ltr">
            <Tailwind>
                <Head />
                <Body className="bg-gray-100 font-sans py-[40px]">
                    <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
                        {/* Header */}
                        <Section className="text-center mb-[32px]">
                            <Text className="text-[24px] font-bold text-gray-900 m-0 mb-[8px]">
                                Verify Your Email Address
                            </Text>
                            <Text className="text-[16px] text-gray-600 m-0">
                                Welcome to our platform! Please verify your email to get started.
                            </Text>
                        </Section>

                        {/* Main Content */}
                        <Section className="mb-[32px]">
                            <Text className="text-[16px] text-gray-800 mb-[16px] m-0">
                                Hi {userName},
                            </Text>
                            <Text className="text-[16px] text-gray-800 mb-[24px] m-0 leading-[24px]">
                                Thank you for signing up! To complete your registration and secure your account,
                                please verify your email address by clicking the button below.
                            </Text>

                            {/* Verification Button */}
                            <Section className="text-center mb-[24px]">
                                <Button
                                    href={verificationUrl}
                                    className="bg-blue-600 text-white px-[32px] py-[12px] rounded-[6px] text-[16px] font-semibold no-underline box-border inline-block"
                                >
                                    Verify Email Address
                                </Button>
                            </Section>

                            <Text className="text-[14px] text-gray-600 mb-[16px] m-0 leading-[20px]">
                                If the button doesn't work, you can also copy and paste this link into your browser:
                            </Text>
                            <Text className="text-[14px] text-blue-600 mb-[24px] m-0 break-all">
                                {verificationUrl}
                            </Text>

                            <Text className="text-[14px] text-gray-600 mb-[16px] m-0 leading-[20px]">
                                This verification link will expire in 24 hours for security reasons.
                                If you didn't create an account with us, you can safely ignore this email.
                            </Text>
                        </Section>

                        <Hr className="border-gray-200 my-[24px]" />

                        {/* Security Notice */}
                        <Section className="mb-[24px]">
                            <Text className="text-[14px] text-gray-600 mb-[8px] m-0 font-semibold">
                                Security Notice:
                            </Text>
                            <Text className="text-[14px] text-gray-600 m-0 leading-[20px]">
                                We take your security seriously. Never share your verification link with others,
                                and always ensure you're on our official website when entering your credentials.
                            </Text>
                        </Section>

                        <Hr className="border-gray-200 my-[24px]" />

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
                                The Team
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


export default UserVerificationEmail;