import Divider from '@/components/dividers/Divider/Divider';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface DetailItemProps {
  title: string;
  value: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ title, value }) => {
  return (
    <div className="w-full">
      <div className='text-xs text-gray-700 uppercase'>
        { title }
      </div>
      <div className='text-gray-900 text-sm font-bold uppercase'>
        { value }
      </div>
      <Divider className='opacity-50 mb-0' />
    </div>
  );
};

export default DetailItem;