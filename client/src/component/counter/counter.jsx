import { Swiper, SwiperSlide } from "swiper/react";
import { FaLaptop } from "react-icons/fa";
import { FaUserAlt } from 'react-icons/fa'
import { FaUserGraduate } from 'react-icons/fa'
import { BiCertification } from 'react-icons/bi'

import "swiper/css";

export default function Counter () {
  return (
    <>
      <section className="counter-section my-8 md:my-16">
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={32}
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
          >
          <SwiperSlide>
              <div className="flex items-center justify-center gap-4 bg-custom-2 px-6 py-6 rounded-2xl">
                <FaLaptop className="w-16 h-16 text-custom-1" />
                <div>
                  <div className="flex">
                    <h5 className="text-lg font-medium text-grey-9">5000</h5>
                    <span className="text-lg font-medium text-grey-9">+</span>
                  </div>
                  <p className="text-sm font-normal text-grey-7">Premium Courses</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center gap-4 px-6 py-6 bg-grey-2 rounded-2xl ">
                <FaUserAlt className="w-16 h-16 text-custom-3" />
                <div>
                  <div className="flex">
                    <h5 className="text-lg font-medium text-grey-9">5000</h5>
                    <span className="text-lg font-medium text-grey-9">+</span>
                  </div>
                  <p className="text-sm font-normal text-grey-7">Premium Courses</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center gap-4 px-6 py-6 bg-grey-1 rounded-2xl ">
                <FaUserGraduate className="w-16 h-16 text-custom-4" />
                <div>
                  <div className="flex">
                    <h5 className="text-lg font-medium text-grey-9">5000</h5>
                    <span className="text-lg font-medium text-grey-9">+</span>
                  </div>
                  <p className="text-sm font-normal text-grey-7">Premium Courses</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center gap-4 px-6 py-6 bg-custom-5 rounded-2xl ">
                <BiCertification className="w-16 h-16 text-custom-6" />
                <div>
                  <div className="flex">
                    <h5 className="text-lg font-medium text-grey-9">5000</h5>
                    <span className="text-lg font-medium text-grey-9">+</span>
                  </div>
                  <p className="text-sm font-normal text-grey-7">Premium Courses</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

    </>
  );
}