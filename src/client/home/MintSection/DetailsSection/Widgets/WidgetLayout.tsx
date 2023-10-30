import React from 'react';

interface DetailWidgetProps {
  header?: string | React.ReactNode | React.ReactNode[];
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

const DetailWidget: React.FC<DetailWidgetProps> = ({ header, children, className }) => {
  return (
    <div className={`my-4 border border-gray-300 p-4 rounded-md ${className}`}>
      <div>
        { header }
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default DetailWidget;