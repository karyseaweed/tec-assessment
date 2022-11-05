import { useState } from 'react';

interface GoldCheckListItemProps {
  children: React.ReactNode;
}

const GoldCheckListItem = ({ children }: GoldCheckListItemProps) => {
  console.log('GoldCheckListItem rendered');
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

interface GoldCheckListProps {
  goldCheckListItems: React.ReactNode[];
}

const GoldCheckList = ({ goldCheckListItems }: GoldCheckListProps) => {
  console.log('GoldCheckList rendered');
  const [expand, setExpand] = useState(false);
  const toggleGoldCheckList = () => {
    setExpand(!expand);
  };
  return (
    <>
      {/* gold check list hidden in mobile by default, toggled by See More */}
      <ul className={`mb-5 ${expand ? 'block' : 'hidden'} lg:block`}>
        {goldCheckListItems.map((item, index) => (
          <GoldCheckListItem key={index}>{item}</GoldCheckListItem>
        ))}
      </ul>
      <p
        className='text-blue-light font-bold flex items-center cursor-pointer lg:hidden'
        onClick={toggleGoldCheckList}>
        See {expand ? 'Less' : 'More'}
        <img
          src='icon-caret.svg'
          aria-hidden='true'
          className={`inline-block ml-2 ${expand && 'rotate-180'}`}
        />
      </p>
    </>
  );
};

export default GoldCheckList;
