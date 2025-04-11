"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Styles from "./page1.modle.css";

function Seleqtiond() {
  const [activeIndex, setActiveIndex] = useState(2);

  const swiperRef = useRef(null);

  const boxdata = [
    {
      id: 0,
      title: "BREAKFAST INCLUSIVE RATE",
      content: "Get 20% off on breakfast at first stay...>>",
      image:
        "/images/69c098387affb033f5d73a4f67e71b8671054af1-960x1320 (1).png",
    },
    {
      id: 1,
      title: "BREAKFAST INCLUSIVE RATE",
      content: "Get 20% off on breakfast at first stay...>>",
      image: "/images/cq5dam.web.756.756.png",
    },
    {
      id: 2,
      title: "BREAKFAST INCLUSIVE RATE",
      content: "Get 20% off on breakfast at first stay...>>",
      image:
        "/images/69c098387affb033f5d73a4f67e71b8671054af1-960x1320 (1).png",
    },
    {
      id: 3,
      title: "BREAKFAST INCLUSIVE RATE",
      content: "Get 20% off on breakfast at first stay...>>",
      image: "/images/cq5dam.web.756.756.png",
    },
  ];

  return (
    <div className="w-100vw xss:w-[640px] xss:h-[886px]  py-12">
      <div className="text-center xss:w-[587.49px] xss:h-[117px] xss:gap-3 font-[Jost] ">
        <h1 className="text-3xl font-bold text-amber-800 xss:leading-7 xss:tracking-[0.2em] xss:-mr-14 xss:mt-14 xss:mb-3 tracking-wide">
          HANDPICKED OFFERS
          <span className="font-normal text-amber-700">
            {" "}
            FOR YOUR DREAM DESTINATION
          </span>
        </h1>
        <p className="text-gray-600 mt-2 xss:tracking-[0.1em] xss:mx-[85px] xss:mr-12 font-normal">
          Discover special deals at SeleQtions hotels that take you closer to
          the destinations you've always
          <br /> dreamed of—without compromising on comfort or style.
        </p>
      </div>
      <div className=" relative w-full h-[492px] mt-10">
        <div className="absolute top-[20%] left-10  lg:left-40 bg-white rounded-l-full  lg:top-[35%] tab: xss:hidden rounded-full transform -translate-y-1/2 z-10">
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

        <div className="relative w-[1,879px] h-[531px] gap-20 mt-12 px-8">
          <Swiper
            spaceBetween={10}
            slidesPerView={3.6}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Navigation]}
            navigation={false}
            className={Styles.mySwiper}
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
                slidespreView: 3.6,
              },
            }}
          >
            {boxdata.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=" container border-[1px] w-[420px] xss:w-full xss:h-auto xss:mt-9 h-auto  gap-5 border-gray-700 overflow-hidden shadow-lg  flex flex-col items-center align-middle justify-center">
                  <div clasName="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[390px] h-60vh mt-4 xss:w-[400px] xss:h-[276px] object-cover"
                    />
                    <div className="h4 absolute left-28 top-2 pb-2 bg-white px-6 py-1 mt-[8.3px] x text-xs font-bold text-gray-700 ">
                      VALID TILL 30TH DECEMBER 2024
                    </div>
                  </div>
                  <div className="font-[Jost]  text-start">
                    <h2 className="leading-6 right-9 -ml-[90px] flex justify-start text-[18px] font-bold text-gray-700">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 mt-1 -ml-[90px] text-sm">
                      {item.content}
                    </p>
                    <div className="mt-4 flex justify-center space-x-4">
                      <button className="bg-gray-600 text-white px-8 py-2 items-start -ml-[90px] mb-5  rounded-sm  text-sm">
                        BOOK NOW
                      </button>
                      <button className="text-gray-800 underline mb-5 text-sm cstm-button">
                        READ MORE &gt;
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute top-[20%] right-10 lg:right-40 lg:top-[35%] xss:hidden  transform -translate-y-1/2 z-10">
            <button
              className={Styles.navButton}
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
    </div>
  );
}

export default Seleqtiond;
