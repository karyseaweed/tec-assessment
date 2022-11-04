import ReactDOMServer from 'react-dom/server';

interface ButtonProps {
  secondary?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button = ({ secondary, className, children }: ButtonProps) => {
  const handleClick = () => {
    console.log(children);
  };
  return (
    <button
      className={`w-full h-[42px] uppercase mb-2 last-of-type:mb-0 hover:bg-blue-muted hover:text-white ${
        secondary ? 'border border-blue text-blue' : 'bg-blue text-white'
      } ${className ? className : ''}`}
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
