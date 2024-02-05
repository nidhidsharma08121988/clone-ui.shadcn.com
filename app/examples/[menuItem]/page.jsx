import SubMenu from '@/components/SubMenu';
import React from 'react';
import ExampleContent from '@/components/ExampleContent';
const ExamplesMenuContents = ({
  params: { menuItem },
}) => {
  return (
    <>
      <ExampleContent />
      <SubMenu />
      {menuItem}
    </>
  );
};

export default ExamplesMenuContents;
