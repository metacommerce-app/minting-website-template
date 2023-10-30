import Button from '@/components/buttons/Button/Button';
import SubscribeModal from '@/components/modals/DefaultModal/SubscribeModal/SubscribeModal';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegBell } from 'react-icons/fa'

interface SubscribeModalButtonProps {
  className?: string;
}

const SubscribeModalButton: React.FC<SubscribeModalButtonProps> = ({ className }) => {
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)
   
  const handleOnClick = () => {
    setOpen(true)
  }

  return (
    <>
      <Button onClick={handleOnClick} className={`border border-gray-500 p-2 hover:text-white hover:bg-gray-900 hover:border-gray-900 !rounded-md !w-fit ${className}`}>
        <div className='flex flex-row gap-1'>
          <div className='flex justify-center items-center'>
            <FaRegBell />
          </div>
          <div className='flex flex-grow'></div>
          <div className='flex justify-center'>
            {t("Subscribe")}
          </div>
        </div>
      </Button>
      <SubscribeModal open={open} setOpen={setOpen} />
    </>
  );
};

export default SubscribeModalButton;

