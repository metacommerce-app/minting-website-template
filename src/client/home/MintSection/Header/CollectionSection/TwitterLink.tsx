import React from 'react';

interface TwitterLinkProps {
  className?: string;
}

const TwitterLink: React.FC<TwitterLinkProps> = ({ className }) => {

  return (
    <div>
      @twitter
    </div>
  );
};

export default TwitterLink;