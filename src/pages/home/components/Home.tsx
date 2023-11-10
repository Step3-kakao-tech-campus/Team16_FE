import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRecoilState } from 'recoil';
import speciesState, { SpeciesType } from 'recoil/speciesState';
import regionState, { RegionType } from 'recoil/regionState';
import HomeVideoSlider from './HomeVideoSlider';
import VideoMuteIcon from './VideoMuteIcon';
import { HomeVideoSliderProps } from '../homeType';
import HomeNoData from './HomeNoData';

const Home = () => {
  const [muted, setMuted] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [species, setSpecies] = useRecoilState<SpeciesType>(speciesState);
  const [region, setRegion] = useRecoilState<RegionType>(regionState);
  const { data, fetchNextPage } = useInfiniteQuery(
    ['home', 1, region, species],
    ({ pageParam = 1 }) => {
      const SPECIES_TYPES = {
        강아지: 'DOG',
        고양이: 'CAT',
        기타: 'ETC',
        전체: '',
      };
      const type = SPECIES_TYPES[species] ?? '';

      let area = '';
      if (region === '전국') {
        area = '';
      } else {
        area = region;
      }
      const apiUrl =
        region !== '전국' || species !== '전체'
          ? `${process.env.REACT_APP_URI}/short-forms?type=${type}&area=${area}&page=${pageParam}&size=5`
          : `${process.env.REACT_APP_URI}/short-forms/home?page=${pageParam}&size=5`;
      return fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.response?.hasNext ? lastPage.response?.nextPage : false;
      },
      keepPreviousData: true,
      suspense: true,
    },
  );
  // 에러가 특이하게 와서 이렇게 처리했습니다...
  // onError나 onSuccess로는 잡히지 않더라고요
  if (data?.pages[0].success === false) {
    throw new Error(data?.pages[0].error.message);
  }

  const handleRemoveFilter = (string: string) => {
    if (string === species) {
      setSpecies('전체');
    } else setRegion('전국');
  };

  const homeVideoSliderProps: HomeVideoSliderProps = {
    data,
    muted,
    setMuted,
    setOpacity,
    fetchNextPage,
  };

  const noData = data?.pages[0].response?.shortForms.length === 0;

  return region !== '전국' || species !== '전체' ? (
    <div className="overflow-hidden bg-white h-[95vh]">
      <div className="flex justify-center gap-7 my-3 items-center">
        <span className=" text-orange-400 text-xl font-semibold">카테고리</span>
        <button
          className="flex bg-orange-400 rounded-full px-5 py-2 text-white"
          onClick={() => handleRemoveFilter(species)}
        >
          {species} x
        </button>
        <button
          className="flex bg-orange-400 rounded-full px-5 py-2 text-white"
          onClick={() => handleRemoveFilter(region)}
        >
          {region} x
        </button>
        <span className="text-lg font-semibold"> 친구들 </span>
      </div>

      {noData && <HomeNoData species={species} />}
      <VideoMuteIcon muted={muted} opacity={opacity} />
      <HomeVideoSlider {...homeVideoSliderProps} />
    </div>
  ) : (
    <div className="overflow-hidden bg-white h-[85vh]">
      <HomeNoData species={species} />
      <VideoMuteIcon muted={muted} opacity={opacity} />
      <HomeVideoSlider {...homeVideoSliderProps} />
    </div>
  );
};

export default Home;
