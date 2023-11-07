import {
  A11y,
  Autoplay,
  Mousewheel,
  Keyboard,
  Navigation,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';

export interface PageProps {
  hasNext: boolean;
}

export interface ShortFormProps {
  map(
    arg0: (
      shortForm: ShortFormProps,
      index: number,
    ) => import('react/jsx-runtime').JSX.Element,
  ): import('react').ReactNode;
  petId: number;
  name: string;
  age: string;
  shelterId: number;
  shelterName: string;
  profileShortFormUrl: string;
  adoptionStatus: string;
}

export interface HomeProps {
  pageProps: PageProps;
  shortFormProps: ShortFormProps;
  handleReachEnd: any;
}

const VHome = (homeProps: HomeProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isCurrentSlideMuted = (index: number) => {
    return index !== currentIndex - 1;
    // 일단 이전 페이지 소리가 나오게 해놨습니다
  };

  const throttle = (event: any, delay: number) => {
    let throttled = false;
    return (...args: any) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          event(...args);
          throttled = false;
        }, delay);
      }
    };
  };

  return (
    <div className="flex flex-col sm:mx-40 lg:mx-64 my-5">
      <h2 className="flex w-60 font-bold text-xl sm:text-2xl items-center whitespace-nowrap"></h2>
      <div className="flex flex-col h-[75vh] w-fit items-center">
        <Swiper
          className="flex w-full items-center justify-center"
          modules={[A11y, Autoplay, Mousewheel, Keyboard, Navigation]}
          spaceBetween={10}
          onSetTranslate={() => throttle(onscroll, 500)}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          navigation={{
            nextEl: '.my-slider-box-1__btn-right',
            prevEl: '.my-slider-box-1__btn-left',
          }}
          mousewheel={{
            thresholdDelta: 70,
            sensitivity: 100,
          }}
          onSlideChange={(swiper: any) => {
            setCurrentIndex(swiper.realIndex);
          }}
          autoHeight={true}
          direction={'vertical'}
          keyboard={{ enabled: true, pageUpDown: true, onlyInViewport: true }}
          onReachEnd={homeProps.handleReachEnd}
        >
          {homeProps.shortFormProps.map((shortForm, index) => {
            return (
              <SwiperSlide
                className="flex .swiper-container slide-item items-center"
                key={index}
              >
                <a>
                  <div className="flex flex-col items-center justify-center justify-items-center">
                    <div className="h-full my-slider-box-1__nav flex flex-col justify-center items-center">
                      <div className="w-10 h-10 m-2 text-4xl -rotate-90 rounded-full text-brand-color my-slider-box-1__btn-left">
                        ➤
                      </div>
                      <div className=" h-[50vh]">
                        <video
                          muted={isCurrentSlideMuted(index)}
                          id="short-form"
                          autoPlay
                          loop
                          className="w-auto h-[50vh]"
                        >
                          <source
                            src={shortForm.profileShortFormUrl}
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                    <div className="w-10 h-10 m-2 text-4xl  rotate-90 text-brand-color bg-white my-slider-box-1__btn-right">
                      ➤
                    </div>
                  </div>
                  <div className="flex flex-row h-20 px-6 pe-5 py-2 justify-between">
                    <div className="text-lg text-neutral-950">
                      {shortForm.name}
                    </div>
                    <div className="flex flex-col h-10 w-fit text-end">
                      <div className=" text-blue-700 font-semibold whitespace-pre-wrap">
                        {shortForm.adoptionStatus}
                      </div>
                      <div className="text-gray-500 whitespace-nowrap">
                        {shortForm.shelterName}
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default VHome;
