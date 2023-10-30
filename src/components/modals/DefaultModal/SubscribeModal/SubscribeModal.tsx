import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../Modal';


interface SubscribeModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({ open, setOpen }) => {
  const { t } = useTranslation();

  const closeModal = () => setOpen(false);

  return (
    <Modal open={open} onClose={closeModal}>
      <div className='flex flex-col justify-center items-center'>
        <div className='text-xl font-bold'>
          {t('Never Miss a Mint')}
        </div>
        <div className='flex text-center'>
          {t('Follow us on social medias for perks and exclusive mints.')}
        </div>
        <div className='gap-2'>
          <div className=''>
            Twitter
          </div>
          <div>
            Discord
          </div>
          <div>
            Instagram
          </div>
          <div>
            Email
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SubscribeModal;