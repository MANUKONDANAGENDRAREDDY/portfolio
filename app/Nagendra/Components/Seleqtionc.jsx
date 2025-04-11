"use client";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./pages.model.css";

function Seleqtionc() {
  const [activeIndex, setActiveIndex] = useState(2);
  const swiperRef = useRef(null);

  const boxdata = [
    {
      id: 0,
      title: "PHOOLON KI HOLI",
      description:
        "Experience the joyous festival of Holi with cultural performances, a vibrant play with flowers, and a feast that celebrates the arrival of spring in true Indian style..",
      image: "/images/Mask group (2).png",
    },
    {
      id: 1,
      title: "HATHKARGA",
      description:
        "Experience the joyous festival of Holi with cultural performances, a vibrant play with flowers, and a feast that celebrates the arrival of spring in true Indian style.",
      image: "/images/Mask group (1).png",
    },
    {
      id: 2,
      title: "PET TALKS",
      description:
        "Join a symposium designed for pet parents and industry professionals, featuring panels, discussions, and playdates that bridge the gap between knowledge and fun.",
      image: "/images/Mask group (3).png",
    },
    {
      id: 3,
      title: "PHOOLON KI HOLI",
      description:
        "Join a symposium designed for pet parents and industry professionals, featuring panels, discussions, and playdates that bridge the gap between knowledge and fun.",

      image: "/images/Mask group (2).png",
    },
    {
      id: 4,
      title: "PET TALKS",
      description:
        "Join a symposium designed for pet parents and industry professionals, featuring panels, discussions, and playdates that bridge the gap between knowledge and fun.",
      image: "/images/Mask group (3).png",
    },
  ];

  // const handleNext = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slideNext();
  //   }
  // };

  // const handlePrev = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slidePrev();
  //   }
  // };

  return (
    <div
      className=" w-100vw h-[902px] lg:w-100vw lg:h-[820px] lg:top-[1430px] bg-cover bg-center bg-no-repeat bg-[#8D6346] bg-opacity-8"
      style={{ backgroundImage: "url('/images/Pattern-02 1 (1).png')" }}
    >
      <div className=" font-[Jost]  text-[26px] h-[78px] xss:mx-9 xss:text-center text-white justify-center items-center flex xss:flex-col">
        <h1 className=" text-[26px] font-normal leading-6  tracking-widest  lg:text-[34px] lg:text-xxl  lg:leading-[34px]  lg:tracking-[0.2em]  text-white">
          MOMENTS THAT MATTER,
          <span className=" font-bold text-white lg:text-[30px] lg:tracking-[20%] lg:leading-[34px] ">
            CURATED JUST FOR YOU
          </span>
        </h1>
      </div>

      <p className="flex mt-5 justify-center mb-16 text-sm font-[Jost] tracking-widest text-center  align-middle  items-center text-white">
        Experience the heart of culture, connection, and celebration with
        SeleQtions’ curated events.
        <br />
        Each gathering offers an immersive blend of knowledge, tradition, and
        fun.
      </p>

      <div className=" relative w-full h-[492px] mt-10">
        <div className="absolute top-[20%] left-10  lg:left-40 bg-white rounded-l-full  lg:top-[35%] tab: xss:hidden rounded-full transform -translate-y-1/2 z-10">
          <button
            className={styles.navButton}
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
          spaceBetween={30}
          slidesPerView={3.5}
          centeredSlides={true}
          loopAdditionalSlides={false}
          loop={true}
          onSwiper={(Swiper) => (swiperRef.current = Swiper)}
          onSlideChange={(Swiper) => setActiveIndex(Swiper.realIndex)}
          navigation={false}
          className={styles.mySwiper}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidespreView: 4.5,
            },
          }}
        >
          {boxdata.map((item, index) => (
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
                  className={` ${
                    styles.imageContainer
                  } transition-all duration-300 ${
                    activeIndex === index ? "scale-110" : "scale-90"
                  }
                  }`}
                >
                  <img
                    src={item.image}
                    alt={`item ${index + 1}`}
                    className="lg:w-full lg:h-fit w-[290px] tab:w-full tab:h-fit h-48 object-cover "
                  />

                  <div
                    className={
                      activeIndex === index
                        ? styles.activeText
                        : styles.hiddenText
                    }
                  >
                    <h2 className="flex  font-[Jost] text-white mt-3 items-center justify-center align-middle">
                      {item.title}
                    </h2>
                    <p
                      className={`flex font-light text-gray-300 font-[Jost] leading-[-21.6px]  mt-4 items-center justify-center align-middle text-center ${
                        activeIndex === index ? "" : "hidden"
                      } `}
                    >
                      {item.description}
                    </p>
                    <button
                      className={`flex mb-8 mt-5 px-6 py-2 bg-white text-black font-[Jost] rounded-md shadow-md items-center align-middle justify-self-center  ${
                        activeIndex === index ? "" : "hidden"
                      }`}
                    >
                      EXPLORE
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-[20%] right-10 lg:right-40 lg:top-[35%] xss:hidden  transform -translate-y-1/2 z-10">
          <button
            className={styles.navButton}
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
    </div>
  );
}

export default Seleqtionc;
