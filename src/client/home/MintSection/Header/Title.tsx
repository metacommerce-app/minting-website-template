import React from 'react';
import { useTranslation } from 'react-i18next';

interface TitleProps {
  className?: string;
}

const Title: React.FC<TitleProps> = ({ className }) => {
  const { t } = useTranslation()
  
  return (
    <div className={`font-bold text-4xl text-gray-800 ${className}`}>
      { t("The Evolution of Art") }
    </div>
  );
};

export default Title;