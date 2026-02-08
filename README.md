# Velin

> A sleek, minimal note-taking application built for developers and writers.

Velin is designed to be simple, beautiful, and distraction-free. It provides a seamless writing experience with first-class support for Markdown and code blocks, wrapped in a modern interface.

## ✨ Features

- **Minimal & Sleek Design**: A clean, distraction-free interface that lets you focus on your content.
- **Rich Text & Markdown**: Full support for Markdown syntax, including lists, headers, and formatting.
- **Code Syntax Highlighting**: Built-in support for code blocks with syntax highlighting for various languages.
- **Google Authentication**: Secure and fast sign-in using your Google account.
- **Dark Mode Support**: Automatically adapts to your system theme for a comfortable reading experience.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Radix UI](https://www.radix-ui.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) (via [Neon](https://neon.tech/)) & [Prisma](https://www.prisma.io/)
- **Authentication**: [Better Auth](https://better-auth.com/)
- **Editor**: [Tiptap](https://tiptap.dev/)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pranavsurya77/Velin.git
   cd velin
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
   
   # Authentication
   BETTER_AUTH_SECRET="your_generated_secret"
   BETTER_AUTH_URL="http://localhost:3000"
   NEXT_PUBLIC_BASE_URL="http://localhost:3000"
   
   # Google OAuth
   GOOGLE_CLIENT_ID="your_google_client_id"
   GOOGLE_CLIENT_SECRET="your_google_client_secret"
   
   # Email Service (Optional if using Resend)
   RESEND_API_KEY="your_resend_api_key"
   ```

4. **Initialize the database:**

   Push the Prisma schema to your database:

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Run the development server:**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
