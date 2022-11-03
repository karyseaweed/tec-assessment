import Head from 'next/head';
import Image from 'next/image';
import GoldCheckListItem from '../components/GoldCheckListItem';
import IconListItem from '../components/IconListItem';
import Button from '../components/Button';

export default function Home() {
  // venue details and gold check list data should be stored somewhere else like a JSON file when we have more and more pages that look like this
  interface venueDetails {
    location: string;
    capacity: string;
    size: string;
    phone: string;
  }

  const venueDetails: venueDetails = {
    location: 'Level 1, No. 28 Stanley Street, Central, Hong Kong',
    capacity: '100 Steated, 120 Standing',
    size: '3,300 sq.ft.',
    phone: '+852 2293 2293',
  };

  const goldCheckListItems: string[] = [
    'Online streaming available on request',
    'Buffet set up available',
    'Seamless experience in a versatile corporate event space',
  ];

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
          <div className='lg:h-[480px] grid grid-cols-3 gap-5'>
            <div className='col-span-3 lg:col-span-2'>
              {/* Carousel component */}
              <Image
                src='https://picsum.photos/784/480'
                alt=''
                priority
                width={784}
                height={480}
              />
            </div>
            <div className='col-span-3 lg:col-span-1 lg:border lg:border-blue lg:px-4 lg:py-5'>
              <div className='relative h-full'>
                <h1 className='font-secondary text-heading text-blue mb-5'>
                  28 Stanley Street - Level 1
                </h1>
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
                <ul>
                  {goldCheckListItems.map((item) => (
                    <GoldCheckListItem key={item} content={item} />
                  ))}
                </ul>
                <div className='hidden lg:block lg:absolute lg:w-full lg:bottom-0'>
                  <Button copy='enquiry' />
                  <Button copy={<>360&deg; virtual tour</>} secondary />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='border-[5px] border-blue'></div>
          <div className='h-[200px] px-6 pt-10 lg:pt-11 bg-grey-50 lg:border-x lg:border-b lg:border-grey-200'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            nihil dignissimos tenetur. Sed amet odit nisi nobis quae totam, id
            autem animi commodi ab ratione nam architecto distinctio delectus
            facere.
          </div>
        </section>
      </main>
    </div>
  );
}
