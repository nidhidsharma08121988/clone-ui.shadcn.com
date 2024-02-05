'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SubMenu = () => {
  const selectedClassNames =
    'bg-muted font-medium text-primary';
  const unSelectedClassNames =
    ' text-muted-foreground hover:text-primary';
  const commonClassNames =
    'flex h-7 items-center text-sm justify-center rounded-full px-4 text-center transition-colors';

  return (
    <div className='min-w-full table'>
      <div className='mb-4 flex items-center'>
        <Link
          className={`${
            usePathname() ===
            '/examples/mail'
              ? selectedClassNames
              : unSelectedClassNames
          }  ${commonClassNames}`}
          href='/examples/mail'
          scroll={false}
        >
          Mail
        </Link>
        <Link
          className={`${
            usePathname() ===
            '/examples/dashboard'
              ? selectedClassNames
              : unSelectedClassNames
          }  ${commonClassNames}`}
          href='/examples/dashboard'
          scroll={false}
        >
          Dashboard
        </Link>
        <Link
          className={`${
            usePathname() ===
            '/examples/cards'
              ? selectedClassNames
              : unSelectedClassNames
          }  ${commonClassNames}`}
          href='/examples/cards'
          scroll={false}
        >
          Cards
        </Link>
        <Link
          className={`${
            usePathname() ===
            '/examples/tasks'
              ? selectedClassNames
              : unSelectedClassNames
          }  ${commonClassNames}`}
          href='/examples/tasks'
          scroll={false}
        >
          Tasks
        </Link>
        <Link
          className={`${
            usePathname() ===
            '/examples/playground'
              ? selectedClassNames
              : unSelectedClassNames
          }  ${commonClassNames}`}
          href='/examples/playground'
          scroll={false}
        >
          Playground
        </Link>
        <Link
          className={`${
            usePathname() ===
            '/examples/forms'
              ? selectedClassNames
              : unSelectedClassNames
          }  ${commonClassNames}`}
          href='/examples/forms'
          scroll={false}
        >
          Forms
        </Link>
        <Link
          className={`${
            usePathname() ===
            '/examples/music'
              ? selectedClassNames
              : unSelectedClassNames
          }  ${commonClassNames}`}
          href='/examples/music'
          scroll={false}
        >
          Music
        </Link>
        <Link
          className={`${
            usePathname() ===
            '/examples/authentication'
              ? selectedClassNames
              : unSelectedClassNames
          }  ${commonClassNames}`}
          href='/examples/authentication'
          scroll={false}
        >
          Authentication
        </Link>
      </div>
    </div>
  );
};

export default SubMenu;
