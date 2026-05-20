'use client'

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { GoGoal as GoGoalIcon } from 'react-icons/go';
import { SiZoom } from 'react-icons/si';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slideData = [
  {
    id: 1,
    title: "Learn Better.\nAchieve More.",
    description: "Book expert tutors, attend interactive sessions, and reach your goals with MediQueue.",
    ctaText: "Browse Tutors",
    ctaLink: "/tutors",
    studentImage: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Expert Tutors.\nGuaranteed Success.",
    description: "Connect with industry professionals and top-tier educators specialized in your field.",
    ctaText: "Find Your Tutor",
    ctaLink: "/tutors",
    studentImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Clear Doubts.\nInstantly Online.",
    description: "Get 1-on-1 personalized guidance from top mentors to solve your toughest assignments.",
    ctaText: "Start Learning",
    ctaLink: "/all-courses",
    studentImage: "https://images.unsplash.com/photo-1610484826625-ac2be7f1c8c1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Track Growth.\nExcel Academically.",
    description: "Monitor your progress with weekly mock tests and detailed insights from your tutors.",
    ctaText: "View Dashboard",
    ctaLink: "/profile",
    studentImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
  }
]

const Slider = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a052e]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        speed={800}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        pagination={{
          clickable: true,
          el: '.custom-swiper-pagination',
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        className="w-full min-h-[500px] lg:h-[480px] xl:h-[550px]"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full flex items-center">

            {/* Background Gradient Layer */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#070420] via-[#0f0a3e] to-[#160e54] opacity-95" />

            <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 w-full h-full grid grid-cols-1 lg:grid-cols-12 items-center gap-8 py-12 lg:py-0">

              {/* Text Content Area */}
              <div className="lg:col-span-5 text-white flex flex-col justify-center text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight whitespace-pre-line">
                  {slide.title}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                  {slide.description}
                </p>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <Link
                    href={slide.ctaLink}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:translate-x-1"
                  >
                    {slide.ctaText}
                    <FiArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Images & Badges Area */}
              <div className="lg:col-span-7 relative w-full h-[320px] sm:h-[400px] lg:h-[450px] flex items-center justify-center">

                {/* Smooth Gradient Blend Circular Container */}
                <div
                  className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[650px] lg:h-[650px] rounded-full overflow-hidden"
                  style={{
                    maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 70%)',
                    WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 70%)'
                  }}
                >
                  <Image
                    src={slide.studentImage}
                    alt="Student Learning"
                    fill
                    loading="eager"
                    fetchPriority="high"
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </div>

                {/* Badge 1: Live Interactive */}
                <div className="absolute left-2 sm:left-10 top-12 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3 animate-bounce [animation-duration:3s]">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl shadow-md">
                    <SiZoom />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 leading-tight">Live Interactive</p>
                    <p className="text-[11px] text-gray-500 mt-0.5 flex items-center gap-1">
                      Sessions <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block animate-pulse" />
                    </p>
                  </div>
                </div>

                {/* Badge 2: Goals */}
                <div className="absolute right-2 sm:right-10 bottom-16 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3 animate-bounce [animation-duration:4s]">
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl shadow-md">
                    <GoGoalIcon />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 leading-none">Achieve</p>
                    <p className="text-sm font-bold text-gray-900 mt-1">Your Goals</p>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 active:scale-95">
          <FiChevronLeft className="w-6 h-6" />
        </button>
        <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 active:scale-95">
          <FiChevronRight className="w-6 h-6" />
        </button>

        {/* Custom Pagination */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          <div className="custom-swiper-pagination flex items-center gap-2" />
        </div>
      </Swiper>

      {/* Global CSS for Swiper Active Dots */}
      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.4;
          width: 9px;
          height: 9px;
          transition: all 0.3s ease;
          border-radius: 9999px;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #6366f1 !important;
          opacity: 1;
          width: 24px;
        }
      `}</style>
    </section>
  )
}

export default Slider