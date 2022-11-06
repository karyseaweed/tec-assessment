interface GoldCheckListItemProps {
  children: React.ReactNode;
}

const GoldCheckListItem = ({ children }: GoldCheckListItemProps) => {
  return (
    <li className='flex lg:text-sm mb-1'>
      <span className='min-w-[26px]'>
        <img
          src='icon-gold-check.svg'
          aria-hidden='true'
          className='mt-1 lg:mt-0.5'
        />
      </span>
      <span>{children}</span>
    </li>
  );
};

export default GoldCheckListItem;
