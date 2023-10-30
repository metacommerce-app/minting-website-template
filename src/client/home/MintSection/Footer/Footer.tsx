import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import UseThisTemplateButton from './GithubButton';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={`flex flex-row ${className}`}>
      <div className='flex flex-row items-center '>
        <div>
          { t("Powered by") }
        </div>
        <div>
          <Image src="/metacommerce-logo.svg" width={210} height={60} alt="Metacommerce Logo" />
        </div>
      </div>
      <div className='flex flex-grow'></div>
      <div className='flex items-center'>
        <UseThisTemplateButton />
      </div>
    </div>
  );
};

export default Footer;