interface ButtonProps {
  secondary?: boolean;
  className?: string;
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button = ({
  secondary,
  className,
  clickHandler,
  children,
}: ButtonProps) => {
  return (
    <button
      data-button={children}
      className={`w-full h-[42px] uppercase font-medium hover:bg-blue-muted hover:text-white ${
        secondary ? 'border border-blue text-blue' : 'bg-blue text-white'
      } ${className ? className : ''}`}
      onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
