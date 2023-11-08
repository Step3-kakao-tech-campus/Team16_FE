import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import HomeVideoSlider, { HomeVideoSliderProps } from './HomeVideoSlider';
import VideoMuteIcon from './VideoMuteIcon';

const Home = () => {
  const [muted, setMuted] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const { data, fetchNextPage } = useInfiniteQuery(
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

  const homeVideoSliderProps: HomeVideoSliderProps = {
    data,
    muted,
    setMuted,
    setOpacity,
    fetchNextPage,
  };

  return (
    <div className="overflow-hidden bg-slate-500 h-[90vh]">
      <VideoMuteIcon muted={muted} opacity={opacity} />
      <HomeVideoSlider {...homeVideoSliderProps} />
    </div>
  );
};

export default Home;
