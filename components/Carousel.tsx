import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

interface CarouselProps {
  slides: number[];
}

export default function Carousel({ slides }: CarouselProps) {
  return (
    <div className='lg:max-w-[793px]'>
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className='carousel relative'>
        {slides.map((imgId) => (
          <SwiperSlide key={imgId}>
            <Image
              src={`https://picsum.photos/id/${imgId}/1586/960`}
              alt=''
              priority
              width={1586}
              height={960}
              sizes='(max-width: 1024px) 200vw'
              className='object-cover w-full lg:min-h-[480px]'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
