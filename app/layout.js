import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

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
      <body
        className={`min-h-screen bg-background font-sans antialiased __className_343187 __framer-cursor`}
      >
        <div className='relative flex min-h-screen flex-col bg-background'>
          <Header />
          <main className='flex-1'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
