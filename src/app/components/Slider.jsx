"use client";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-125 overflow-hidden"
      >
        <SwiperSlide className="flex h-full items-center justify-center bg-blue-500 text-white text-2xl font-bold">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="flex h-full items-center justify-center bg-green-500 text-white text-2xl font-bold">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="flex h-full items-center justify-center bg-orange-500 text-white text-2xl font-bold">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="flex h-full items-center justify-center bg-purple-500 text-white text-2xl font-bold">
          Slide 4
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;