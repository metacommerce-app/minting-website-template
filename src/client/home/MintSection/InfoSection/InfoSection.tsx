import React from 'react';
import Widget from './Widget';
import { useTranslation } from 'react-i18next';

const InfoSection: React.FC = () => {
  const { t } = useTranslation()
  
  /**
   * TODO: get that data from either the config or wagmi
   */
  return (
    <div className='grid grid-cols-3 w-full gap-auto my-4'>
      <Widget title={t("Mint Price")} value={t("Free")} />
      <Widget title={t('Total Minted')} value='12,453' />
      <Widget title={t('Type')} value={t("Allowlist")} />
    </div>
  );
};

export default InfoSection;