type Props = {
  className: string;
  children: string | JSX.Element | JSX.Element[];
};

const Container = ({ className, children }: Props) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
