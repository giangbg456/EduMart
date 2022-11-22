import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import hero_image1 from '../../assets/images/hero1.jpg'
import hero_image2 from '../../assets/images/hero2.jpg'
import hero_image3 from '../../assets/images/hero3.jpg'
import hero_image4 from '../../assets/images/hero4.jpg'

function Hero() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar]}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className='block relative w-full aspect-[376/300] md:aspect-[1440/600]'>
        <div className='fit'>
          <img src={hero_image1} alt="hero" className='fit object-cover' />
        </div>
      </SwiperSlide>
      <SwiperSlide className='block relative w-full aspect-[376/300] md:aspect-[1440/600]'>
        <div className='fit'>
          <img src={hero_image2} alt="hero" className='fit object-cover' />
        </div>
      </SwiperSlide>
      <SwiperSlide className='block relative w-full aspect-[376/300] md:aspect-[1440/600]'>
        <div className='fit'>
          <img src={hero_image3} alt="hero" className='fit object-cover' />
        </div>
      </SwiperSlide>
      <SwiperSlide className='block relative w-full aspect-[376/300] md:aspect-[1440/600]'>
        <div className='fit'>
          <img src={hero_image4} alt="hero" className='fit object-cover' />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero;