import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// yup-phone utilizes google-libphonenumber (a library that parses, formats, stores, and validates international phone numbers), which gives accurate validation checks, so we don’t have to reinvent the wheel.
import 'yup-phone';

type Inputs = {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  centre: string;
  venue: string;
  eventDate: string;
  eventTime: string;
  foodBeverages: string;
  amenity1: boolean;
  amenity2: boolean;
  amenity3: boolean;
  amenityFour: boolean;
  amenityLoremIpsum: boolean;
  other: string;
};

const today = new Date();
today.setHours(0, 0, 0, 0);

const validationSchema = yup.object().shape({
  fullName: yup.string().required('Please enter your full name.'),
  phone: yup.string().phone().required(),
  email: yup.string().email().required('Please enter a valid email address.'),
  company: yup.string(),
  centre: yup.string().oneOf(['centre1', 'centre2', 'centre3']),
  venue: yup
    .string()
    .oneOf([
      'centre1-venue1',
      'centre1-venue2',
      'centre1-venue3',
      'centre2-venue1',
      'centre2-venue2',
      'centre2-venue3',
      'centre3-venue1',
      'centre3-venue2',
      'centre3-venue3',
    ]),
  eventDate: yup.string(),
  eventTime: yup.string(),
  foodBeverages: yup.string(),
  amenity1: yup.boolean(),
  amenity2: yup.boolean(),
  amenity3: yup.boolean(),
  amenityFour: yup.boolean(),
  amenityLoremIpsum: yup.boolean(),
  other: yup.string(),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data): void => {
    console.log(data);
    reset();
  };

  // subscribe to changes of centre
  const watchCentre: string = watch('centre');

  // render different venues based on centre selected
  const switchVenues = (centre: string): React.ReactNode => {
    switch (centre) {
      case 'centre2':
        return (
          <>
            <option value='centre2-venue1'>Centre 2 Venue 1</option>
            <option value='centre2-venue2'>Centre 2 Venue 2</option>
            <option value='centre2-venue3'>Centre 2 Venue 3</option>
          </>
        );
      case 'centre3':
        return (
          <>
            <option value='centre3-venue1'>Centre 3 Venue 1</option>
            <option value='centre3-venue2'>Centre 3 Venue 2</option>
            <option value='centre3-venue3'>Centre 3 Venue 3</option>
          </>
        );
      default:
        return (
          <>
            <option value='centre1-venue1'>Centre 1 Venue 1</option>
            <option value='centre1-venue2'>Centre 1 Venue 2</option>
            <option value='centre1-venue3'>Centre 1 Venue 3</option>
          </>
        );
    }
  };

  interface amenities {
    name:
      | 'amenity1'
      | 'amenity2'
      | 'amenity3'
      | 'amenityFour'
      | 'amenityLoremIpsum';
    label: string;
  }

  const amenities: amenities[] = [
    { name: 'amenity1', label: 'amenity 1' },
    { name: 'amenity2', label: 'amenity 2' },
    { name: 'amenity3', label: 'amenity 3' },
    { name: 'amenityFour', label: 'amenity Four' },
    { name: 'amenityLoremIpsum', label: 'Lorem ipsum dolor' },
  ];

  return (
    <>
      <div className='border-[5px] border-blue'></div>
      <div className='px-6 py-10 lg:pt-11 bg-grey-50 lg:border-x lg:border-b lg:border-grey-200'>
        <h2 className='font-secondary text-heading text-blue mb-5'>
          Have questions? Leave us a message.
        </h2>
        <p className='mb-8'>
          Complete the form and our team member will be in touch with you
          shortly.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-3 gap-8 lg:gap-16'>
            <div className='col-span-3 lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-2'>
              <div className='lg:order-1 lg:mt-3 relative'>
                <input
                  {...register('fullName')}
                  type='text'
                  id='fullName'
                  placeholder='Full Name*'
                />
                {errors.fullName && (
                  <p className='error-message'>{errors.fullName.message}</p>
                )}
              </div>

              <div className='lg:order-3 relative'>
                <input
                  {...register('phone')}
                  type='tel'
                  id='phone'
                  placeholder='Phone Number*'
                />
                {errors.phone && (
                  <p className='error-message'>
                    Please enter a valid phone number.
                  </p>
                )}
              </div>

              <div className='lg:order-5 relative'>
                <input
                  {...register('email')}
                  type='email'
                  id='email'
                  placeholder='Email*'
                />
                {errors.email && (
                  <p className='error-message'>{errors.email.message}</p>
                )}
              </div>

              <input
                {...register('company')}
                type='text'
                id='company'
                placeholder='Company'
                className='lg:order-7'
              />

              <div className='lg:order-0 lg:mt-3 relative'>
                <label
                  htmlFor='centre'
                  className='absolute text-xs text-grey-400 -top-5'>
                  Centre
                </label>
                <div className='border-b border-grey-300 mb-9 lg:mb-7 flex items-center'>
                  <img
                    src='icon-building.svg'
                    width='12'
                    height='18'
                    alt=''
                    aria-hidden='true'
                    className='pb-1.5 mr-1'
                  />
                  <select id='centre' {...register('centre')}>
                    <option value='centre1'>Centre 1</option>
                    <option value='centre2'>Centre 2</option>
                    <option value='centre3'>Centre 3</option>
                  </select>
                </div>
              </div>

              <div className='lg:order-2 relative'>
                <label
                  htmlFor='venue'
                  className='absolute text-xs text-grey-400 -top-5'>
                  Venue
                </label>
                <div className='border-b border-grey-300 mb-9 lg:mb-7 flex items-center'>
                  <img
                    src='icon-building.svg'
                    width='12'
                    height='18'
                    alt=''
                    aria-hidden='true'
                    className='pb-1.5 mr-1'
                  />
                  <select id='venue' {...register('venue')}>
                    {switchVenues(watchCentre)}
                  </select>
                </div>
              </div>

              <input
                {...register('eventDate')}
                type='text'
                id='eventDate'
                placeholder='Event Date'
                className='lg:order-4'
              />

              <input
                {...register('eventTime')}
                type='text'
                id='eventTime'
                placeholder='Event Time'
                className='lg:order-6'
              />

              <div className='lg:order-9 relative'>
                <label
                  htmlFor='foodBeverages'
                  className='text-sm text-grey-500 absolute -top-5'>
                  Food & Beverage
                </label>
                <input
                  {...register('foodBeverages')}
                  type='text'
                  id='foodBeverages'
                  placeholder='(Any food and beverage requirements?)'
                  className='placeholder:text-xs'
                />
              </div>

              <div className='text-grey-500 text-sm w-full lg:order-8 relative'>
                <p className='text-xs absolute -top-5'>Amenities</p>
                <div className='flex flex-wrap gap-x-4 gap-y-1'>
                  {amenities.map((amenity) => (
                    <div key={amenity.name} className='checkbox-container'>
                      <input
                        {...register(amenity.name)}
                        type='checkbox'
                        id={amenity.name}
                      />
                      <label htmlFor={amenity.name}>{amenity.label}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <textarea
              {...register('other')}
              id='other'
              placeholder='Other requirements?'
              className='col-span-3 lg:col-span-1 block h-[287px] p-3 border border-grey-300 bg-transparent text-sm placeholder:text-grey-500 focus-visible:outline-0'
            />
          </div>

          <input
            type='submit'
            className='text-base font-medium w-max mt-6 mb-4 text-white bg-blue h-[42px] px-12 pb-0 uppercase cursor-pointer hover:bg-blue-muted'
          />
          <p className='text-sm mb-12 lg:mb-0'>*Required Fields</p>
        </form>
      </div>
    </>
  );
}
