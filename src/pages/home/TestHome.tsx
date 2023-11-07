import { useInfiniteQuery } from '@tanstack/react-query';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import HomeVideo from './HomeVideo';

const TestHome = () => {
  const [muted, setMuted] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const nextPageRef = useRef(null);
  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    ['home', 1],
    ({ pageParam = 1 }) => {
      const apiUrl = `${process.env.REACT_APP_URI}/short-forms/home?page=${pageParam}&size=5`;
      return fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.response.hasNext ? lastPage.response.nextPage : false;
      },
      suspense: true,
    },
  );

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
    setMuted((prev) => !prev);
    setOpacity(1);
    setTimeout(() => {
      setOpacity(0);
    }, 200);
  };

  return (
    <div className="overflow-hidden bg-slate-500 h-[90vh]">
      <button
        onClick={() => setMuted((prev) => !prev)}
        className="absolute z-10 w-16 h-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {!muted && (
          <img
            src="/assets/images/speaker.svg"
            alt="speaker"
            style={{ opacity, transition: 'opacity 0.5s' }}
          />
        )}
        {muted && (
          <img
            src="/assets/images/mute.svg"
            alt="mute"
            style={{ opacity, transition: 'opacity 0.5s' }}
          />
        )}
      </button>
      <Swiper
        modules={[A11y, Autoplay, Mousewheel, Keyboard]}
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        mousewheel={{
          sensitivity: 100,
          thresholdDelta: 30,
        }}
        autoHeight={true}
        direction={'vertical'}
        keyboard={{ enabled: true, pageUpDown: true, onlyInViewport: true }}
      >
        {data?.pages.map((page, pagesIndex) =>
          page.response.shortForms.map((shortForm: any, index: number) => {
            if (pagesIndex * 5 + index === 5 * data.pages.length - 1) {
              return (
                <SwiperSlide key={shortForm.profileShortFormUrl + index}>
                  <div ref={nextPageRef}></div>
                  <HomeVideo
                    url={shortForm.profileShortFormUrl}
                    muted={muted}
                    setMuted={setMuted}
                    handleDoubleClick={handleDoubleClick}
                  />
                </SwiperSlide>
              );
            }
            return (
              <SwiperSlide key={shortForm.profileShortFormUrl + index}>
                <HomeVideo
                  url={shortForm.profileShortFormUrl}
                  muted={muted}
                  setMuted={setMuted}
                  handleDoubleClick={handleDoubleClick}
                />
              </SwiperSlide>
            );
          }),
        )}
      </Swiper>
    </div>
  );
};

export default TestHome;
