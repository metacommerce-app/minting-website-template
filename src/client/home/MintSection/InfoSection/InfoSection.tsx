import React from 'react';
import Widget from './Widget';

const InfoSection: React.FC = () => {
  return (
    <div className='grid grid-cols-3 w-full gap-auto my-4'>
      <Widget title='Mint Price' value='Free' />
      <Widget title='Total Minted' value='12,453' />
      <Widget title='Type' value='Allowlist' />
    </div>
  );
};

export default InfoSection;