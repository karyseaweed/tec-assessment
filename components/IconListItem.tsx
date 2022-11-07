interface IconListItemProps {
  icon: string;
  children: React.ReactNode;
}

const IconListItem = ({ icon, children }: IconListItemProps) => {
  return (
    <li className='flex lg:text-sm mb-1 text-grey-600'>
      <span className='min-w-[26px]'>
        <img
          src={`icon-${icon}.svg`}
          alt=''
          aria-hidden='true'
          className='mt-1 lg:mt-0.5'
        />
      </span>
      <span>{children}</span>
    </li>
  );
};

export default IconListItem;
