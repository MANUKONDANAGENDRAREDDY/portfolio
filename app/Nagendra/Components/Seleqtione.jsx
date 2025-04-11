"use client";
import { useRef, useState } from "react";
import Styles from "./Page2.model.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Seleqtione() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const boxdata = [
    {
      id: 1,
      title: "Raajkutir, Kolkata",
      image: "/images/POOL 1.png",
    },
    {
      id: 2,
      title: "Norbu The Montanna,dharamshala ",
      image: "/images/DSC00728 2.png",
    },
    {
      id: 3,
      title: "President, Mumbai",
      image: "/images/Lobby Image  - Hero 2.png",
    },
    {
      id: 4,
      title: "President, Mumbai",
      image: "/images/DSC00728 2.png",
    },
    {
      id: 5,
      title: "Norbu The Montanna,dharamshala",
      image: "/images/Lobby Image  - Hero 2.png",
    },
    {
      id: 6,
      title: "Raajkutir, Kolkata",
      image: "/images/POOL 1.png",
    },
  ];

  return (
    <div className="w-100vw h-100vh lg:w-100vw lg:h-100vh lg:top-24 tab:mx-16 tab:my-20 xss:my-20 my-20 ">
      <div className=" font-[Jost] text-[30px] h-[59px] leading-7  xss:text-center  flex-col tab:my-4 xss:my-5 lg:top-[96px] text-center items-center align-middle flex xss:flex-col  ">
        <h1 className="font-normal xss:mx-20 xss:mb-14 leading-7 text-amber-800 tracking-[0.3em] ">
          FIND YOUR NEXT {"  "}
          <span className="font-bold text-amber-800"> WITH SELEQTIONS</span>
        </h1>
      </div>
      <p className="font-DM Sans font-normal lg:leading-6 mx-12 lg:mx-80 lg:tracking-widest  tracking-wider text-center text-gray-600 ">
        Experience the newest additions to SeleQtions, where contemporary
        elegance meets timeless stories. Immerse yourself in new SeleQtions
        hotels, where every corner tells a tale of culture, luxury, and
        extraordinary service.
      </p>
      <div className=" relative w-full h-[452px] mt-10 ">
        <div className=" absolute top-[20%] left-10 tab:hidden lg:left-40 bg-white rounded-l-full  lg:top-[35%] tab: xss:hidden rounded-full transform -translate-y-1/2 z-10">
          <button
            className={Styles.navButton}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img
              src="/images/Frame 1000009634(12).png"
              alt="preview"
              className="lg:p-2 lg:w-14 w-10 p-2 "
            />
          </button>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={2.5}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className={Styles.mySwiper}
          navigation={false}
          //   module={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1.9 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 1.95 },
            1024: { slidesPerView: 4.5 },
          }}
        >
          {boxdata.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className={
                activeIndex === index ||
                activeIndex - 1 === index ||
                activeIndex + 1 === index
                  ? Styles.activeSlide
                  : Styles.inactiveSlide
              }
            >
              <div className="relative w-[452px] h-[540px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-80 h-auto object-cover"
                />
                <div className=" absolute w-[338.39px] h-[427.73px] top-[56.13px] left-[56.93px] justify-center text-white p-4 font-[Jost] text-center flex ">
                  <h2 className="  font-bold  leading-[28.8px] -my-10 mr-20 -ml-16 text-center">
                    {item.title}
                  </h2>
                  <div className=" absolute w-[338.39px h-[150px] gap-6 font-DM Sans font-medium">
                    <button className="leading-6 tracking-widest  p-[18.18px] pr-[72.73px] pb-[18.18px] pl-[72.73px] gap-2 my-52 mr-16 -ml-16 rounded bg-white text-black  ">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute top-[20%] right-10 lg:right-40 tab:hidden lg:top-[35%] xss:hidden  transform -translate-y-1/2 z-10"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img
            src="/images/Frame 1000009631.png"
            alt="Next"
            className="w-11 p-2 lg:w-14 lg:p-2"
          />
        </button>
      </div>
    </div>
  );
}

export default Seleqtione;
