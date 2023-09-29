import React from 'react';

type Props = {
  className: string;
  children: string;
};

const Banner = ({ className, children }: Props) => {
  return <span className={className}>{children}</span>;
};

export default Banner;
