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
  title: "Jason Beucher",
  description: "Portfolio de Jason Beucher, développeur web full-stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                // Set dark theme as default if no preference is stored
                if (!('theme' in localStorage)) {
                  localStorage.theme = 'dark';
                  document.documentElement.classList.add('dark');
                } else if (localStorage.theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={twMerge(
        inter.variable, 
        calistoga.variable, 
        "bg-sky-600 dark:bg-gray-900 text-white antialiased font-sans"
      )}>
        <ThemeSwitch />
        {children}
      </body>
    </html>
  );
}