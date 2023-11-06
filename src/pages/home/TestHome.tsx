import { useInfiniteQuery } from '@tanstack/react-query';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import HomeVideo from './HomeVideo';

const TestHome = () => {
  const [muted, setMuted] = useState(true);
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

  return (
    <div className="overflow-hidden bg-slate-500 h-[90vh]">
      <button
        onClick={() => setMuted((prev) => !prev)}
        className="absolute z-10"
      >
        {!muted && <img src="/assets/images/speaker.svg" alt="speaker" />}
        {muted && <img src="/assets/images/mute.svg" alt="mute" />}
      </button>
      <Swiper
        modules={[A11y, Autoplay, Mousewheel, Keyboard]}
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        mousewheel={{
          thresholdTime: 1,
          sensitivity: 100,
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
