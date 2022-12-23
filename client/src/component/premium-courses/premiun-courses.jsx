import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { BiCubeAlt } from 'react-icons/bi'
import Card from '../card/card'
import ImgPdp from '../../assets/images/course_4870_image.jpeg'
import "swiper/css/navigation";
import {FaChevronLeft} from 'react-icons/fa'
import {FaChevronRight} from 'react-icons/fa'

export default function PremiumCourses () {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  return (
    <>
      <div className="premium-courses my-8 md:my-16">
        <div className="container">
          <h2 className="text-xl md:text-2xl font-semibold capitalize mb-4 md:mb-6 text-grey-9 flex items-center justify-center">
            <BiCubeAlt className="inline-block mr-4  w-6 h-6" />
            Premium
            <span className="text-blue ml-2">
            Courses
            </span>
          </h2>
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            slidesPerView={1}
            spaceBetween={32}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            className='group'
          >
            <SwiperSlide>
              <Card 
                productImage = {ImgPdp}
                productName={'Complete Python Prime Pack'}
                author={'Hoang Minh Giang'}
                price_amount={59}
                price_slashed={499}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card 
                productImage = {ImgPdp}
                productName={'Complete Python Prime Pack'}
                author={'Hoang Minh Giang'}
                price_amount={59}
                price_slashed={499}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card 
                productImage = {ImgPdp}
                productName={'Complete Python Prime Pack'}
                author={'Hoang Minh Giang'}
                price_amount={59}
                price_slashed={499}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card 
                productImage = {ImgPdp}
                productName={'Complete Python Prime Pack'}
                author={'Hoang Minh Giang'}
                price_amount={59}
                price_slashed={499}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card 
                productImage = {ImgPdp}
                productName={'Complete Python Prime Pack'}
                author={'Hoang Minh Giang'}
                price_amount={59}
                price_slashed={499}
              />
            </SwiperSlide>
            <div ref={navigationPrevRef} className='absolute top-1/2 -left-20 z-10 cursor-pointer p-4 bg-custom-7 rounded-full group-hover:left-2 transition-all delay-100' >
              <FaChevronLeft className='text-white' />
            </div>
            <div ref={navigationNextRef} className='absolute top-1/2 -right-20 z-10 cursor-pointer p-4 bg-custom-7 rounded-full group-hover:right-2 transition-all delay-100' >
              <FaChevronRight className='text-white' />
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}