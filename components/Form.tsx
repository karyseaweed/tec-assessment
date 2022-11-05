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
  eventDate: Date;
  eventTime: string;
  foodBeverages: string;
  amenity1: boolean;
  amenity2: boolean;
  amenity3: boolean;
  amenityFour: boolean;
  amenity5: boolean;
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
  eventDate: yup.date().min(today),
  eventTime: yup.string(),
  foodBeverages: yup.string(),
  amenity1: yup.boolean(),
  amenity2: yup.boolean(),
  amenity3: yup.boolean(),
  amenityFour: yup.boolean(),
  amenity5: yup.boolean(),
  other: yup.string(),
});

export default function Form() {
  console.log('Form rendered');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  // subscribe to changes of centre
  const watchCentre: string = watch('centre');

  // render different venues based on centre selected
  const switchVenues = (centre: string) => {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-3 gap-8 lg:gap-16'>
        <div className='col-span-3 lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-2'>
          <div className='lg:order-1 relative'>
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

          <select id='centre' {...register('centre')} className='lg:order-0'>
            <option value='centre1'>Centre 1</option>
            <option value='centre2'>Centre 2</option>
            <option value='centre3'>Centre 3</option>
          </select>

          <select id='venue' {...register('venue')} className='lg:order-2'>
            {switchVenues(watchCentre)}
          </select>

          <input
            {...register('eventDate', { valueAsDate: true })}
            type='text'
            onFocus={(e) => (e.target.type = 'date')} // or should this just be a string input?
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

          <input
            {...register('foodBeverages')}
            type='text'
            id='foodBeverages'
            placeholder='Food & Beverage(Any food and beverage requirements?)'
            className='lg:order-9'
          />

          <div className='checkbox-group text-grey-500 text-sm w-full lg:order-8'>
            <p className='text-xs'>Amenities</p>
            <div className='flex flex-wrap gap-x-4 gap-y-1'>
              <div className='inline-flex items-center gap-2'>
                <input
                  {...register('amenity1')}
                  type='checkbox'
                  id='amenity1'
                />
                <label htmlFor='amenity1'>amenity 1</label>
              </div>
              <div className='inline-flex items-center gap-2'>
                <input
                  {...register('amenity2')}
                  type='checkbox'
                  id='amenity2'
                />
                <label htmlFor='amenity2'>amenity 2</label>
              </div>
              <div className='inline-flex items-center gap-2'>
                <input
                  {...register('amenity3')}
                  type='checkbox'
                  id='amenity3'
                />
                <label htmlFor='amenity3'>amenity 3</label>
              </div>
              <div className='inline-flex items-center gap-2'>
                <input
                  {...register('amenityFour')}
                  type='checkbox'
                  id='amenityFour'
                />
                <label htmlFor='amenityFour'>amenity Four</label>
              </div>
              <div className='inline-flex items-center gap-2'>
                <input
                  {...register('amenity5')}
                  type='checkbox'
                  id='amenity5'
                />
                <label htmlFor='amenity5'>Lorem ipsum dolor</label>
              </div>
            </div>
          </div>
        </div>

        <textarea
          {...register('other')}
          id='other'
          placeholder='Other requirements?'
          className='col-span-3 lg:col-span-1 block p-3 border border-grey-300 bg-transparent placeholder:text-grey-500 placeholder:text-sm focus-visible:outline-0'
        />
      </div>

      <input
        type='submit'
        className='w-max my-4 text-white bg-blue h-[42px] px-12 uppercase cursor-pointer hover:bg-blue-muted'
      />
      <p className='text-sm mb-16 lg:mb-0'>*Required Fields</p>
    </form>
  );
}
