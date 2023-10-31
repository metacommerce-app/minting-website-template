import React from 'react';
import { useTranslation } from 'react-i18next';
import { config } from '@/client/types/config';

const CountdownTitle: React.FC = () => {
  const { t } = useTranslation()

  const now = new Date()
  const isStarted = now.getTime() > new Date(config.startDate).getTime()
  const isFinished = now.getTime() > new Date(config.endDate).getTime()

  if (isFinished) {
    return t("Minting has ended")
  }

  if (isStarted) {
    return t("Closes in")
  }

  return t("Opens in")
};

export default CountdownTitle;