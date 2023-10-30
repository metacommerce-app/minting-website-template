import Button from '@/components/buttons/Button/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa'

interface GithubButtonProps {
  className?: string;
}

const GithubButton: React.FC<GithubButtonProps> = ({ className }) => {
  const { t } = useTranslation()
  
  const handleOnClick = () => {

  }

  return (
    <Button onClick={handleOnClick} className='border border-gray-900 p-2 bg-gray-900 text-white hover:text-gray-900 hover:bg-transparent hover:border-gray-900 !rounded-md !w-fit'>
      <div className='flex flex-row gap-1'>
        <div className='flex justify-center items-center'>
          <FaGithub />
        </div>
        <div className='flex flex-grow'></div>
        <div className='flex justify-center'>
          {t("Use this template")}
        </div>
      </div>
    </Button>
  );
};

export default GithubButton;