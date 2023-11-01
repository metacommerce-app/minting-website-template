import Button from '@/components/buttons/Button/Button';
import DisplayIf from '@/components/conditionals/DisplayIf';
import { useAuth } from '@/client/home/useAuth';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ConnectButton from './ConnectButton';

interface MintButtonProps {
  numberOfItems: number;
  className?: string;
}

const MintButton: React.FC<MintButtonProps> = ({numberOfItems, className}) => {
  const { address } = useAuth()

  const { t } = useTranslation()

  const handleOnClick = () => {

  }

  return (
    <DisplayIf condition={!!address} falsy={<ConnectButton />}>
      <Button onClick={handleOnClick} className={`w-full border border-gray-500 p-2 bg-gray-900 text-white !rounded-md ${className}`}>
        {t("Mint")}
      </Button>
    </DisplayIf>
  );
};

export default MintButton;