import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CountdownWidget from './CountdownWidget';

interface CountdownProps {
  target: Date;
}

const Countdown: React.FC<CountdownProps> = ({ target }) => {

  const { t } = useTranslation()

  const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0 });

  /**
   * TODO: switch to dayjs
   */
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();

      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerId = setInterval(calculateTimeLeft, 1000);
    
    // Clean up the interval when the component is unmounted
    return () => clearInterval(timerId);
  }, [target]);

  return (
    <>
      <CountdownWidget title={t("Days")} timeLeft={timeLeft.days} />
      <CountdownWidget title={t("Hours")} timeLeft={timeLeft.hours} />
      <CountdownWidget title={t("Minutes")} timeLeft={timeLeft.minutes} />
      <CountdownWidget title={t("Seconds")} timeLeft={timeLeft.seconds} />
    </>
  );
};

export default Countdown;