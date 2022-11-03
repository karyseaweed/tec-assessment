interface GoldCheckListItemProps {
  content: string;
}

const GoldCheckListItem = ({ content }: GoldCheckListItemProps) => {
  return (
    <li className='flex lg:text-sm mb-1'>
      <span className='min-w-[26px]'>
        <img
          src='icon-gold-check.svg'
          aria-hidden='true'
          className='mt-1 lg:mt-0.5'
        />
      </span>
      {content}
    </li>
  );
};

export default GoldCheckListItem;
