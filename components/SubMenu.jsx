'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SubMenu = () => {
  const selectedClasses =
    'bg-muted font-medium text-primary';
  const unSelectedClasses =
    ' text-muted-foreground hover:text-primary';
  const classes =
    'flex h-7 items-center text-sm justify-center rounded-full px-4 text-center transition-colors';

  return (
    <div className='min-w-full table'>
      <div className='mb-4 flex items-center'>
        <Link
          className={`${
            usePathname() ===
            '/examples/mail'
              ? selectedClasses
              : unSelectedClasses
          }  ${classes}`}
          href='/examples/mail'
          scroll={false}
        >
          Mail
        </Link>
        <Link
          className={`${
            usePathname() ===
            '/examples/dashboard'
              ? selectedClasses
              : unSelectedClasses
          }  ${classes}`}
          href='/examples/dashboard'
          scroll={false}
        >
          Dashboard
        </Link>
        <Link
          className={`${
            usePathname() ===
            '/examples/cards'
              ? selectedClasses
              : unSelectedClasses
          }  ${classes}`}
          href='/examples/cards'
          scroll={false}
        >
          Cards
        </Link>
        <Link
          className={`${
            usePathname() ===
            '/examples/tasks'
              ? selectedClasses
              : unSelectedClasses
          }  ${classes}`}
          href='/examples/tasks'
          scroll={false}
        >
          Tasks
        </Link>
        <Link
          className={`${
            usePathname() ===
            '/examples/playground'
              ? selectedClasses
              : unSelectedClasses
          }  ${classes}`}
          href='/examples/playground'
          scroll={false}
        >
          Playground
        </Link>
        <Link
          className={`${
            usePathname() ===
            '/examples/forms'
              ? selectedClasses
              : unSelectedClasses
          }  ${classes}`}
          href='/examples/forms'
          scroll={false}
        >
          Forms
        </Link>
        <Link
          className={`${
            usePathname() ===
            '/examples/music'
              ? selectedClasses
              : unSelectedClasses
          }  ${classes}`}
          href='/examples/music'
          scroll={false}
        >
          Music
        </Link>
        <Link
          className={`${
            usePathname() ===
            '/examples/authentication'
              ? selectedClasses
              : unSelectedClasses
          }  ${classes}`}
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
