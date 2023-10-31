import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Countdown from './Countdown/Countdown';
import CountdownTitle from './CountdownTitle/CountdownTitle';
import { config } from '@/client/types/config';
import DisplayIf from '@/components/conditionals/DisplayIf';


const CountdownSection: React.FC = () => {
  const now = new Date();
  const isStarted = now.getTime() > new Date(config.startDate).getTime()
  const isFinished = now.getTime() > new Date(config.endDate).getTime()

  return (
    <div className='py-4 flex flex-row w-full '>
      <div className='flex items-center uppercase text-sm'>
        <CountdownTitle />
      </div>
      <div className='flex flex-grow'></div>
      <div className='flex flex-row gap-4 px-2'>
        <DisplayIf condition={!isFinished}>
          <Countdown target={isStarted ? new Date(config.endDate) : new Date(config.startDate)} />
        </DisplayIf>
      </div>
    </div>
  );
};

export default CountdownSection;