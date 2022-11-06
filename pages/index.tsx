import Head from 'next/head';
import IconListItem from '../components/IconListItem';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import Form from '../components/Form';
import GoldCheckList from '../components/GoldCheckList';

// In reality, carousel image sources, venue details, and gold check list data will most likely live on a seperate file or come from external sources. I've put them here so we don't overcomplicate things for this assessment.

export const carouselImgs: number[] = [1, 2, 3];
interface venueDetails {
  location: React.ReactNode;
  capacity: React.ReactNode;
  size: React.ReactNode;
  phone: React.ReactNode;
}

export const venueDetails: venueDetails = {
  location: (
    <>
      Level 1, No. 28 Stanley Street, Central,{' '}
      <span className='whitespace-nowrap'>Hong Kong</span>
    </>
  ),
  capacity: '100 Steated, 120 Standing',
  size: '3,300 sq.ft.',
  phone: (
    <>
      <a href='tel:+85222932293'>+852 2293 2293</a>
    </>
  ),
};

export const goldCheckListItems: React.ReactNode[] = [
  <>
    Lorem ipsum dolor sit amet consectetur{' '}
    <span className='whitespace-nowrap'>Hong Kong</span>
  </>,
  'Buffet set up available',
  'Sed amet odit nisi nobis quae totam, id autem animi commodi ab ratione nam architecto distinctio delectus facere.',
];

export default function Home() {
  const logButtonName = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(e.currentTarget.getAttribute('data-button'));
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
          <div className='grid grid-cols-3 gap-5 relative'>
            <div className='col-span-3 lg:col-span-2'>
              <Carousel slides={carouselImgs} />
            </div>
            <div className='col-span-3 lg:col-span-1 lg:border lg:border-blue lg:px-4 lg:py-5'>
              <div className='lg:relative h-full'>
                <h1 className='font-secondary text-heading text-blue mb-5'>
                  28 Stanley Street - Level 1
                </h1>
                {/* icon list */}
                <ul className='mb-5'>
                  <IconListItem icon='location'>
                    {venueDetails.location}
                  </IconListItem>
                  <IconListItem icon='capacity'>
                    {venueDetails.capacity}
                  </IconListItem>
                  <IconListItem icon='size'>{venueDetails.size}</IconListItem>
                  <IconListItem icon='phone'>{venueDetails.phone}</IconListItem>
                </ul>
                {/* gold check list */}
                <GoldCheckList goldCheckListItems={goldCheckListItems} />
                {/* buttons */}
                <div className='fixed z-10 bottom-0 left-0 bg-white w-full pt-4 px-6 pb-8 lg:absolute lg:p-0'>
                  <Button clickHandler={logButtonName} className='lg:mb-2'>
                    enquiry
                  </Button>
                  <Button
                    clickHandler={logButtonName}
                    className='hidden lg:block'>
                    360&deg; virtual tour
                  </Button>
                </div>
                <button
                  data-button='360&deg; virtual tour'
                  onClick={logButtonName}
                  className='absolute right-4 top-4 z-10 lg:hidden'>
                  <img src='icon-360-tour.svg' />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='border-[5px] border-blue'></div>
          <div className='px-6 py-10 lg:pt-11 bg-grey-50 lg:border-x lg:border-b lg:border-grey-200'>
            <h2 className='font-secondary text-heading text-blue mb-5'>
              Have questions? Leave us a message.
            </h2>
            <p className='mb-8'>
              Complete the form and our team member will be in touch with you
              shortly
            </p>
            <Form />
          </div>
        </section>
      </main>
    </div>
  );
}
