import { render } from 'react-dom';

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
          aria-hidden='true'
          className='mt-1 lg:mt-0.5'
        />
      </span>
      <span>{children}</span>
    </li>
  );
};

interface IconListProps {
  location: React.ReactNode;
  capacity: React.ReactNode;
  size: React.ReactNode;
  phone: React.ReactNode;
}

const IconList = ({ location, capacity, size, phone }: IconListProps) => {
  return (
    <ul className='mb-5'>
      <IconListItem icon='location'>{location}</IconListItem>
      <IconListItem icon='capacity'>{capacity}</IconListItem>
      <IconListItem icon='size'>{size}</IconListItem>
      <IconListItem icon='phone'>{phone}</IconListItem>
    </ul>
  );
};

export default IconList;
