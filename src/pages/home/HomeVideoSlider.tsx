import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Mousewheel, Keyboard } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import HomeVideo from './HomeVideo';

export interface HomeVideoSliderProps {
  data: any;
  nextPageRef: React.MutableRefObject<HTMLDivElement | null>;
  muted: boolean;
  setMuted: (muted: boolean) => void;
  setOpacity: (opacity: number) => void;
}

interface ShortFormPage {
  error: string;
  response: {
    hasNext: boolean;
    nextPage: number;
    shortForms: ShortForm[];
  };
  success: boolean;
}
interface ShortForm {
  adoptionStatus: string;
  age: string;
  likeCount: string;
  name: string;
  petId: number;
  profileShortFormUrl: string;
  shelterId: number;
  shelterName: string;
}

const HomeVideoSlider = (props: HomeVideoSliderProps) => {
  const { data, nextPageRef, muted, setMuted, setOpacity } = props;
  const navigate = useNavigate();
  const [hovering, setHovering] = useState(false);

  const handleDoubleClick = () => {
    setMuted(!muted);
    setOpacity(1);
    setTimeout(() => {
      setOpacity(0);
    }, 200);
  };

  return (
    <Swiper
      modules={[A11y, Autoplay, Mousewheel, Keyboard]}
      spaceBetween={10}
      grabCursor={true}
      mousewheel={{
        sensitivity: 100,
        thresholdDelta: 30,
      }}
      autoHeight={true}
      direction={'vertical'}
      keyboard={{ enabled: true, pageUpDown: true, onlyInViewport: true }}
    >
      {data?.pages.map((page: ShortFormPage, pagesIndex: number) =>
        page.response.shortForms.map((shortForm: ShortForm, index: number) => {
          if (pagesIndex * 5 + index === 5 * data.pages.length - 1) {
            return (
              <SwiperSlide key={shortForm.profileShortFormUrl + index}>
                <div ref={nextPageRef}></div>

                <Swiper
                  modules={[A11y]}
                  grabCursor={true}
                  autoHeight={true}
                  direction={'horizontal'}
                  onSlideNextTransitionEnd={() => {
                    navigate(`/pet/${shortForm.petId}`);
                  }}
                >
                  <SwiperSlide>
                    <HomeVideo
                      url={shortForm.profileShortFormUrl}
                      muted={muted}
                      handleDoubleClick={handleDoubleClick}
                      hovering={hovering}
                      setHovering={setHovering}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full h-[90vh] flex items-center justify-center font-bold text-white bg-black">
                      <div>동물 정보 가져오겠습니다~</div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </SwiperSlide>
            );
          }
          return (
            <SwiperSlide key={shortForm.profileShortFormUrl + index}>
              <Swiper
                modules={[A11y]}
                grabCursor={true}
                autoHeight={true}
                direction={'horizontal'}
                onSlideNextTransitionEnd={() => {
                  navigate(`/pet/${shortForm.petId}`);
                }}
              >
                <SwiperSlide>
                  <HomeVideo
                    url={shortForm.profileShortFormUrl}
                    muted={muted}
                    handleDoubleClick={handleDoubleClick}
                    hovering={hovering}
                    setHovering={setHovering}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[90vh] flex items-center justify-center font-bold text-white bg-black">
                    <div>동물 정보 가져오겠습니다~</div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </SwiperSlide>
          );
        }),
      )}
    </Swiper>
  );
};

export default HomeVideoSlider;
