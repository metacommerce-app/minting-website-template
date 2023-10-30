import React from 'react';
import Plus from './Plus';
import Minus from './Minus';

interface NumberOfItemsSelectorProps {
  numberOfItems: number;
  onChange: (value: number) => void;
}

const NumberOfItemsSelector: React.FC<NumberOfItemsSelectorProps> = ({ numberOfItems, onChange }) => {
  const handleAddItem = (n: number) => {
    onChange(numberOfItems + n)
  }

  const handleRemoveItem = (n: number) => {
    onChange(Math.max(numberOfItems - n, 0))
  }

  return (
    <div className='flex flex-row gap-6 items-center w-full justify-center '>
      <Minus onClick={() => handleRemoveItem(1)} />
      <div className='text-3xl font-bold text-gray-800'>
        {numberOfItems}
      </div>
      <Plus onClick={() => handleAddItem(1)} />
    </div>
  );
};

export default NumberOfItemsSelector;
