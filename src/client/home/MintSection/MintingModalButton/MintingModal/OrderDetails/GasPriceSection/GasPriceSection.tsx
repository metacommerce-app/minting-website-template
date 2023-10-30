import React from 'react';
import { useTranslation } from 'react-i18next';

interface GasPriceSectionProps {
  numberOfItems: number;
}

const GasPriceSection: React.FC<GasPriceSectionProps> = ({numberOfItems}) => {
  const { t } = useTranslation()

  return (
    <div>
      <div className='flex flex-row text-gray-500 leading-none'>
        <div>
          {t("Estimated Gas Price")}
        </div>
        <div className='flex flex-grow'></div>
        <div>
          0.043 ETH
        </div>
      </div>
      <div className='flex flex-row text-gray-500 text-xs'>
        <div className='flex flex-grow'></div>
        <div className=''>
          ~ $22.41
        </div>
      </div>
    </div>
  );
};

export default GasPriceSection;