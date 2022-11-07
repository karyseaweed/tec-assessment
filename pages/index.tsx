import Head from 'next/head';
import IconListItem from '../components/IconListItem';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import Form from '../components/Form';
import GoldCheckList from '../components/GoldCheckList';

export default function Home() {
  // In reality, carousel image sources, venue details, and gold check list data will most likely live on a seperate file or come from external sources. I've put them here so we don't overcomplicate things for this assessment.
  const carouselImgs: number[] = [1, 2, 3];

  interface venueDetails {
    icon: string;
    detail: React.ReactNode;
  }

  const venueDetails: venueDetails[] = [
    {
      icon: 'location',
      detail: (
        <>
          Level 1, No. 28 Stanley Street, Central,{' '}
          <span className='whitespace-nowrap'>Hong Kong</span>
        </>
      ),
    },
    { icon: 'capacity', detail: '100 Steated, 120 Standing' },
    { icon: 'size', detail: '3,300 sq.ft.' },
    {
      icon: 'phone',
      detail: (
        <>
          <a href='tel:+85222932293'>+852 2293 2293</a>
        </>
      ),
    },
  ];

  const goldCheckListItems: React.ReactNode[] = [
    <>
      Lorem ipsum dolor sit amet consectetur{' '}
      <span className='whitespace-nowrap'>Hong Kong</span>
    </>,
    'Buffet set up available',
    'Sed amet odit nisi nobis quae totam, id autem animi commodi ab ratione nam architecto distinctio delectus facere.',
  ];

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

      <main className='max-w-large mx-auto my-8'>
        <section className='mb-14 px-6 lg:px-0'>
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
                  {venueDetails.map((venueDetail) => (
                    <IconListItem
                      key={venueDetail.icon}
                      icon={venueDetail.icon}>
                      {venueDetail.detail}
                    </IconListItem>
                  ))}
                </ul>
                {/* gold check list */}
                <GoldCheckList goldCheckListItems={goldCheckListItems} />
                {/* buttons */}
                <div className='fixed z-10 bottom-0 left-0 bg-white w-full pt-4 px-6 pb-8 border-t border-grey-200 lg:border-0 lg:absolute lg:p-0'>
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
                  <img
                    src='icon-360-tour.svg'
                    alt='360&deg; virtual tour button'
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Form />
        </section>
      </main>
    </div>
  );
}
