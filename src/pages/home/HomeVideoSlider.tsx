import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Mousewheel, Keyboard } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import HomeVideo from './HomeVideo';
import VideoInfo from './VideoInfo';

export interface HomeVideoSliderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  muted: boolean;
  setMuted: (muted: boolean) => void;
  setOpacity: (opacity: number) => void;
  fetchNextPage: () => void;
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
  const { data, muted, setMuted, setOpacity, fetchNextPage } = props;
  const [hovering, setHovering] = useState(false);
  const [playing, setPlaying] = useState(false);
  const nextPageRef = useRef(null);
  const navigate = useNavigate();

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fetchNextPage();
      }
    });
    return () => {
      io.disconnect();
    };
  });
  useEffect(() => {
    if (nextPageRef.current) {
      io.observe(nextPageRef.current);
    }
    return () => {
      io.disconnect();
    };
  });

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
                    <div className="h-[70vh]">
                      <HomeVideo
                        url={shortForm.profileShortFormUrl}
                        muted={muted}
                        handleDoubleClick={handleDoubleClick}
                        hovering={hovering}
                        setHovering={setHovering}
                        playing={playing}
                        setPlaying={setPlaying}
                        index={pagesIndex * 5 + index}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full h-[90vh] text-xl flex items-center justify-center font-bold text-white bg-black">
                      <div>동물 정보를 가져오는 중입니다🐶</div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="w-full flex justify-center">
                  <VideoInfo
                    name={shortForm.name}
                    adoptionStatus={shortForm.adoptionStatus}
                    shelterName={shortForm.shelterName}
                    age={shortForm.age}
                  />
                </div>
              </SwiperSlide>
            );
          }
          return (
            <SwiperSlide
              key={shortForm.profileShortFormUrl + index}
              className="flex justify-center items-centerr"
            >
              <Swiper
                className="bg-black"
                modules={[A11y]}
                grabCursor={true}
                autoHeight={true}
                direction={'horizontal'}
                onSlideNextTransitionEnd={() => {
                  navigate(`/pet/${shortForm.petId}`);
                }}
              >
                <SwiperSlide>
                  <div className="flex flex-col h-[70vh] items-center justify-center">
                    <HomeVideo
                      url={shortForm.profileShortFormUrl}
                      muted={muted}
                      handleDoubleClick={handleDoubleClick}
                      hovering={hovering}
                      setHovering={setHovering}
                      playing={playing}
                      setPlaying={setPlaying}
                      index={pagesIndex * 5 + index}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[90vh] text-xl flex items-center justify-center font-bold text-white bg-black">
                    <div>동물 정보를 가져오는 중입니다🐶</div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="w-full flex justify-center">
                <VideoInfo
                  name={shortForm.name}
                  adoptionStatus={shortForm.adoptionStatus}
                  shelterName={shortForm.shelterName}
                  age={shortForm.age}
                />
              </div>
            </SwiperSlide>
          );
        }),
      )}
    </Swiper>
  );
};

export default HomeVideoSlider;
