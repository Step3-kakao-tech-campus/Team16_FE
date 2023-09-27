import React from 'react';

type Props = {
  className: string;
  children: string;
};

const Banner = ({ className, children }: Props) => {
  return <div className={className}>{children}</div>;
};

export default Banner;
