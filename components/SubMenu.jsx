import React from 'react';
import Link from 'next/link';

const SubMenu = () => {
  const menuItems = [
    { path: 'mail', name: 'Mail' },
    {
      path: 'dashboard',
      name: 'Dashboard',
    },
    { path: 'cards', name: 'Cards' },
    { path: 'tasks', name: 'Tasks' },
    {
      path: 'playground',
      name: 'Playground',
    },
    { path: 'forms', name: 'Forms' },
    { path: 'music', name: 'Music' },
    {
      path: 'authentication',
      name: 'Authentication',
    },
  ];
  // const selectedClassNames = "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary bg-muted font-medium text-primary";
  const classNames =
    'flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary';
  // const classes = isSelected?
  // 'bg-muted font-medium text-primary':"text-muted-foreground';
  return (
    <div className='min-w-full table'>
      <ul className='mb-4 flex items-center'>
        {menuItems.map(
          (menuItem, index) => (
            <Link
              key={index}
              className={classNames}
              href={`/examples/${menuItem.path}`}
            >
              {menuItem.name}
            </Link>
          )
        )}
      </ul>
    </div>
  );
};

export default SubMenu;
