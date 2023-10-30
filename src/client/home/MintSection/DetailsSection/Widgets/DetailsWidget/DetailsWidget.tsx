import React from 'react';
import { useTranslation } from 'react-i18next';
import DetailItem from './DetailItem';

interface DetailsWidgetProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

const DetailsWidget: React.FC<DetailsWidgetProps> = ({ children, className }) => {
  const { t } = useTranslation()

  return (
    <div className={`my-4 border border-gray-300 p-4 rounded-md ${className}`}>
      <div className='font-bold uppercase text-sm'>
        { t("View Details") }
      </div>
      <div className='grid grid-cols-2 gap-4 mt-4'>
        <div className='flex flex-col gap-4'>
          <DetailItem title={t("Opensea URL")} value={t('N/A')} />
          <DetailItem title={t('Token Standard')} value={t('ERC721')} />
          <DetailItem title={t('Start Date')} value={t('2023-11-04')} />
        </div>
        <div className='flex flex-col gap-4'>
          <DetailItem title={t("Contract Address")} value='0xz..........................' />
          <DetailItem title={t("Blockchain")} value={t("Ethereum")} />
          <DetailItem title={t('End Date')} value={t('2023-11-04')} />
        </div>
      </div>
    </div>
  );
};

export default DetailsWidget;