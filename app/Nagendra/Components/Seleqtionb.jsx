"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./Page.module.css";

function Seleqtionb() {
  const [activeIndex, setActiveIndex] = useState(2);
  const swiperRef = useRef(null);

  const boxdata = [
    {
      id: 0,
      title: "THE TEA GARDEN",
      description:
        "An experience first hand what goes in to making some of the worlds finest teas guided personally by us in a tea estate...>>",
      image: "/images/Group 1000006303(1).png",
    },
    {
      id: 1,
      title: "",
      description:
        "An experience first hand what goes in to making some of the worlds finest teas guided personally by us in a tea estate...",
      image: "/images/Frame 1000009605(2).png",
    },
    {
      id: 2,
      title: ".",
      description:
        "An experience first hand what goes in to making some of the worlds finest teas guided personally by us in a tea estate...",
      image: "/images/Frame 1000009605 (3).png",
    },
    {
      id: 3,
      title: "",
      description:
        "An experience first hand what goes in to making some of the worlds finest teas guided personally by us in a tea estate...",
      image: "/images/Group 1000006304(4).png",
    },
    {
      id: 4,
      title: "",
      description:
        "An experience first hand what goes in to making some of the worlds finest teas guided personally by us in a tea estate...",
      image: "/images/Frame 1000009605 (5).png",
    },
  ];

  return (
    <div className="w-[1520px] h-[1000px] py-12 px-5 text-center ">
      <h1 className="text-gray-700 font-thin text-xl tracking-widest mb-1">
        SELEQTIONS <span className="font-bold text-gray-500">EXPERIENCES</span>
      </h1>
      <p className="text-sm text-gray-400 mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the
        <br />
        industry's standard dummy text ever since the 1500s
      </p>
      <button className="bg-gray-800 text-white rounded py-2 px-6 mt-4 mb-20 hover:bg-gray-700 transition">
        KNOW MORE
      </button>
      <div className=" relative justify-center w-full mt-10 flex">
        <div className="absolute top-[38.22px] left-[50.4%] transform -translate-x-1/2 z-30 w-[300.41px] h-[300.86px] border-10">
          <img
            src="/images/Ellipse 256.png"
            alt="image Q"
            className="w-[290.41px] h-[280.86px] top-[326.78px] left-[777.43px] border-10 "
          />
        </div>
        <div className="absolute top-[310.07px] left-[60%] transform -translate-x-1/2 z-30 w-[400px] h-[95.15px] flex items-center">
          <img
            src="/images/Vector.png"
            alt="Image ~"
            className="w-[400px] h-[95.15px] top-[688.07px] left-[875.25px] rotate-[1.63]  "
          />
        </div>
      </div>
      <div className="relative w-full h-[492.95px] mt-10">
        <div className="absolute left-48  top-80 transform -translate-y-1/2 z-10">
          <button
            className={styles.navButton}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img
              src="/images/Frame 1000009634(12).png"
              alt="Previous"
              className="p-2 w-16 sm:w-16 "
            />
          </button>
        </div>

        <Swiper
          spaceBetween={150}
          slidesPerView={5}
          loop={true}
          centeredSlides={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={false}
          className={styles.mySwiper}
        >
          {boxdata.map((box, index) => (
            <SwiperSlide
              key={index}
              className={`${styles.swiperSlide} ${
                activeIndex === index
                  ? styles.activeSlide
                  : styles.inactiveSlide
              }`}
            >
              <div className="flex flex-col items-center">
                <div
                  className={` ${styles.imageContainer}
                  }`}
                >
                  <img
                    src={box.image}
                    alt={`Box ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={
                    activeIndex === index
                      ? styles.activeText
                      : styles.hiddenText
                  }
                >
                  <h3 className="text-lg font-semibold text-amber-900 mt-28 mb-3">
                    {box.title}
                  </h3>
                  <p className="text-sm text-amber-900 mt-1 px-4">
                    {box.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute right-48 top-80 transform -translate-y-1/2 z-10">
          <button
            className={styles.navButton}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img
              src="/images/Frame 1000009633(11).png"
              alt="Next"
              className="p-2 w-16"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Seleqtionb;
