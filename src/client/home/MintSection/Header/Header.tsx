import React from 'react';
import Title from './Title';
import CollectionSection from './CollectionSection/CollectionSection';
import Description from './Description';
import SubscribeModalButton from './SubscribeModalButton/SubscribeModalButton';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div>
      <Title />
      <div className='flex flex-row gap-4 my-4'>
        <CollectionSection />
        <div className='flex flex-grow'></div>
        <SubscribeModalButton />
      </div>
      <Description />
    </div>
  );
};

export default Header;