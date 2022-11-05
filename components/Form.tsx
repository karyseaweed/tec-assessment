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
      <input
        {...register('fullName')}
        type='text'
        id='fullName'
        placeholder='Full Name*'
        className='placeholder:text-grey-500 placeholder:text-sm'
      />
      {errors.fullName && <p>{errors.fullName.message}</p>}

      <input
        {...register('phone')}
        type='tel'
        id='phone'
        placeholder='Phone Number*'
      />
      {errors.phone && <p>Please enter a valid phone number.</p>}

      <input
        {...register('email')}
        type='email'
        id='email'
        placeholder='Email*'
      />
      {errors.email && <p>{errors.email.message}</p>}

      <select id='centre' {...register('centre')}>
        <option value='centre1'>Centre 1</option>
        <option value='centre2'>Centre 2</option>
        <option value='centre3'>Centre 3</option>
      </select>

      <select id='venue' {...register('venue')}>
        {switchVenues(watchCentre)}
      </select>

      <input
        {...register('eventDate', { valueAsDate: true })}
        type='text'
        onFocus={(e) => (e.target.type = 'date')} // or should this just be a string input?
        id='eventDate'
        placeholder='Event Date'
      />

      <input
        {...register('eventTime')}
        type='text'
        id='eventTime'
        placeholder='Event Time'
      />

      <input
        {...register('foodBeverages')}
        type='text'
        id='foodBeverages'
        placeholder='Food & Beverage(Any food and beverage requirements?)'
      />

      <p>Amenities</p>
      <div className='inline-flex items-center gap-2'>
        <input
          {...register('amenity1')}
          type='checkbox'
          id='amenity1'
          className='mb-0'
        />
        <label htmlFor='amenity1'>amenity 1</label>
      </div>
      <div className='inline-flex items-center gap-2'>
        <input
          {...register('amenity2')}
          type='checkbox'
          id='amenity2'
          className='mb-0'
        />
        <label htmlFor='amenity2'>amenity 2</label>
      </div>

      <textarea
        {...register('other')}
        id='other'
        placeholder='Other requirements?'
        className='block'
      />

      <input
        type='submit'
        className='text-white bg-blue h-[42px] px-12 uppercase hover:bg-blue-muted'
      />
    </form>
  );
}
