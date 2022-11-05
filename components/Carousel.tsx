import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

interface CarouselProps {
  slides: number[];
}

export default function Carousel({ slides }: CarouselProps) {
  console.log('Carousel rendered');
  return (
    <div className='lg:max-w-[793px]'>
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className='carousel relative'>
        {slides.map((imgId) => (
          <SwiperSlide key={imgId}>
            <Image
              src={`https://picsum.photos/id/${imgId}/793/480`}
              alt=''
              priority
              width={793}
              height={480}
              sizes='(min-width: 1025px) 793px, 100vw'
              className='object-cover w-full lg:min-h-[480px]'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
