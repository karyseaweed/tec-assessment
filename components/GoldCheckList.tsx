import { useState } from 'react';

interface GoldCheckListProps {
  goldCheckListItems: React.ReactNode[];
}

const GoldCheckList = ({ goldCheckListItems }: GoldCheckListProps) => {
  const [expand, setExpand] = useState(false);
  const toggleGoldCheckList = () => {
    setExpand(!expand);
  };
  return (
    <>
      {/* gold check list hidden in mobile by default, toggled by See More */}
      <ul className={`mb-5 ${expand ? 'block' : 'hidden'} lg:block`}>
        {goldCheckListItems.map((item, index) => (
          <li key={index} className='flex lg:text-sm mb-1'>
            <span className='min-w-[26px]'>
              <img
                src='icon-gold-check.svg'
                width='14'
                height='12'
                alt=''
                aria-hidden='true'
                className='mt-1 lg:mt-0.5'
              />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p
        className='text-blue-light font-bold flex items-center cursor-pointer lg:hidden'
        onClick={toggleGoldCheckList}>
        See {expand ? 'Less' : 'More'}
        <img
          src='icon-caret.svg'
          width='10'
          height='6'
          alt=''
          aria-hidden='true'
          className={`inline-block ml-2 ${expand && 'rotate-180'}`}
        />
      </p>
    </>
  );
};

export default GoldCheckList;
