import { PageButtonProps } from '../profileListType';

export default function PageButton({
  className,
  active,
  disabled,
  children,
  ...otherProps
}: PageButtonProps) {
  if (disabled) {
    return (
      <span className="inline-flex  cursor-pointer h-8 w-8 m-0.5 items-center justify-center rounded border border-gray-200 bg-white text-gray-500 rtl:rotate-180">
        {children}
      </span>
    );
  }
  if (active) {
    return (
      <span className="inline-flex  cursor-pointer h-8 w-8 m-0.5 items-center justify-center rounded border border-gray-200 bg-orange-400 text-white rtl:rotate-180">
        {children}
      </span>
    );
  }

  return (
    <a
      className="inline-flex  cursor-pointer h-8 w-8 p-2 m-0.5 items-center justify-center rounded border border-gray-200 bg-white text-gray-500 rtl:rotate-180"
      aria-current={active ? 'page' : undefined}
      {...otherProps}
    >
      {children}
    </a>
  );
}
