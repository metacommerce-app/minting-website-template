import Modal from '@/components/modals/Modal';
import React, { useState } from 'react';
import NumberOfItemsSelector from './NumberOfItemsSelector/NumberOfItemsSelector';
import OrderDetails from './OrderDetails/OrderDetails';
import MintButton from './MintButton/MintButton';
import WalletDetails from './WalletDetails/WalletDetails';

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({open, onClose}) => {
  const [numberOfItems, setNumberOfItems] = useState(0)

  const handleChange = (value: number) => {
    setNumberOfItems(value)
  }

  return (
    <Modal open={open} onClose={onClose}>
      <NumberOfItemsSelector numberOfItems={numberOfItems} onChange={handleChange} />
      <OrderDetails numberOfItems={numberOfItems} className='mb-4 ' />
      <WalletDetails className='mt-4' />
      <MintButton numberOfItems={numberOfItems} className='mt-5' />
    </Modal>
  );
};

export default CheckoutModal;
