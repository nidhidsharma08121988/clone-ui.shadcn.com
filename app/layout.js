import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header'

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Clone:Shadcn',
  description:
    'NextJs and Tailwind CSS',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='newIcon.svg'
        />
      </head>
      <body className={inter.className}>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  );
}
