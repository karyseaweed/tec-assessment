interface IconListItemProps {
  icon: string;
  content: string;
}

const IconListItem = ({ icon, content }: IconListItemProps) => {
  return (
    <li className='flex lg:text-sm mb-1'>
      <span className='min-w-[26px]'>
        <img
          src={`icon-${icon}.svg`}
          aria-hidden='true'
          className='mt-1 lg:mt-0.5'
        />
      </span>
      {content}
    </li>
  );
};

export default IconListItem;
