import ReactDOMServer from 'react-dom/server';

interface ButtonProps {
  secondary?: boolean;
  copy: any; // not sure if this is correct
  className?: string;
}

const Button = ({ secondary, copy, className }: ButtonProps) => {
  const handleClick = () => {
    typeof copy === 'string'
      ? console.log(copy.toUpperCase())
      : console.log(copy.props.children.toUpperCase());
  };
  return (
    <button
      className={`w-full h-[42px] uppercase mb-2 last-of-type:mb-0 hover:bg-blue-muted hover:text-white font-medium ${
        secondary ? 'border border-blue text-blue' : 'bg-blue text-white'
      } ${className ? className : ''}`}
      onClick={handleClick}>
      {copy}
    </button>
  );
};

export default Button;
