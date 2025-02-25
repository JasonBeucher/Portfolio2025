import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ThemeSwitch } from "@/components/ThemeSwitch";

const inter = Inter({ 
  subsets: ['latin'],
  variable: "--font-sans" 
})
const calistoga = Calistoga({ 
  subsets: ['latin'], 
  variable: '--font-serif', 
  weight: '400' 
})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={twMerge(
        inter.variable, 
        calistoga.variable, 
        "bg-blue-700 dark:bg-gray-900 text-white antialiased font-sans"
      )}>
        <ThemeSwitch />
        {children}
      </body>
    </html>
  );
}
