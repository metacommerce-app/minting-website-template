import React from 'react';
import { useTranslation } from 'react-i18next';

interface TotalSectionProps {
  total: number;
  totalUsd: number;
}

const TotalSection: React.FC<TotalSectionProps> = ({total, totalUsd}) => {
  const { t } = useTranslation()

  return (
    <div>
      <div className='flex flex-row text-gray-900 leading-none uppercase text-md font-bold'>
        <div>
          {t("Total")}
        </div>
        <div className='flex flex-grow'></div>
        <div>
          0.00 ETH
        </div>
      </div>
      <div className='flex flex-row text-gray-500 text-xs'>
        <div className='flex flex-grow'></div>
        <div className=''>
          ~ $0.00
        </div>
      </div>
    </div>
  );
};

export default TotalSection;