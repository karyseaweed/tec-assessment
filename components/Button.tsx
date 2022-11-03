import ReactDOMServer from 'react-dom/server';

interface ButtonProps {
  secondary?: boolean;
  copy: any; // not sure if this is correct
}

const Button = ({ secondary, copy }: ButtonProps) => {
  const clickHandler = () => {
    typeof copy === 'string'
      ? console.log(copy)
      : console.log(copy.props.children);
  };
  return (
    <button
      className={`w-full h-[42px] uppercase mb-2 last-of-type:mb-0 ${
        secondary ? 'border border-blue' : 'bg-blue text-white'
      }`}
      onClick={clickHandler}>
      {copy}
    </button>
  );
};

export default Button;
