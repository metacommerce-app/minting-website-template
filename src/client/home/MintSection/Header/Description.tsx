import React from 'react';
import { useTranslation } from 'react-i18next';

interface DescriptionProps {
  className?: string;
}

const Description: React.FC<DescriptionProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={`text-lg text-gray-700 ${className}`}>
      {t('Become the co-owner of the second Pop Art Wonder called "The Evolution of Art". This painting is a tribute to the 16 most popular artworks in history. The painting will be revealed over 16 days from October 20th to November 4th.')}
    </div>
  );
};

export default Description;