import { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import GoldCheckListItem from '../components/GoldCheckListItem';
import IconListItem from '../components/IconListItem';
import Button from '../components/Button';
import Carousel from '../components/Carousel';

export default function Home() {
  // venue details and gold check list data should be stored somewhere else like a JSON file when we have more and more pages that look like this
  interface venueDetails {
    location: string;
    capacity: string;
    size: string;
    phone: string;
  }

  const venueDetails: venueDetails = {
    location: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    capacity: '100 Steated, 120 Standing',
    size: '3,300 sq.ft.',
    phone: '+852 2293 2293',
  };

  const goldCheckListItems: string[] = [
    'Lorem ipsum dolor sit amet consectetur',
    'Buffet set up available',
    'Sed amet odit nisi nobis quae totam, id autem animi commodi ab ratione nam architecto distinctio delectus facere.',
  ];

  const [expand, setExpand] = useState(false);
  const toggleGoldCheckList = () => {
    setExpand(!expand);
  };

  return (
    <div>
      <Head>
        <title>TEC Senior Web Dev Assessment</title>
        <meta name='keywords' content='TEC Senior Web Dev Assessment' />
        <meta
          name='description'
          content='Something more meaningful about the TEC Senior Web Dev Assessment'
        />
      </Head>

      <main className='max-w-large mx-auto'>
        <section className='mb-14 px-6 lg:px-0 mt-8'>
          <div className='grid grid-cols-3 gap-5'>
            <div className='col-span-3 lg:col-span-2'>
              <Carousel slides={[1, 2, 3]} />
            </div>
            <div className='col-span-3 lg:col-span-1 lg:border lg:border-blue lg:px-4 lg:py-5'>
              <div className='relative h-full'>
                <h1 className='font-secondary text-heading text-blue mb-5'>
                  28 Stanley Street - Level 1
                </h1>
                {/* icon list */}
                <ul className='mb-5'>
                  {Object.keys(venueDetails).map((detail) => {
                    return (
                      <IconListItem
                        key={detail}
                        icon={detail}
                        content={venueDetails[detail as keyof venueDetails]}
                      />
                    );
                  })}
                </ul>
                {/* gold check list hidden in mobile by default, toggled by See More */}
                <ul className={`mb-5 ${expand ? 'block' : 'hidden'} lg:block`}>
                  {goldCheckListItems.map((item) => (
                    <GoldCheckListItem key={item} content={item} />
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
                {/* buttons */}
                <div className='fixed bottom-0 left-0 bg-white w-full pt-4 px-6 pb-8 lg:absolute lg:p-0'>
                  <Button copy='enquiry' />
                  <Button
                    copy={<>360&deg; virtual tour</>}
                    secondary
                    className='hidden lg:block'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='border-[5px] border-blue'></div>
          <div className='h-[200px] px-6 pt-10 lg:pt-11 bg-grey-50 lg:border-x lg:border-b lg:border-grey-200'>
            <form>
              <h2 className='font-secondary text-heading text-blue mb-5'>
                Have questions? Leave us a message.
              </h2>
              <p>
                Complete the form and our team member will be in touch with you
                shortly
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
