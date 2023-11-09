import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRecoilState } from 'recoil';
import speciesState, { SpeciesType } from 'recoil/speciesState';
import regionState, { RegionType } from 'recoil/regionState';
import HomeVideoSlider, { HomeVideoSliderProps } from './HomeVideoSlider';
import VideoMuteIcon from './VideoMuteIcon';

const Home = () => {
  const [muted, setMuted] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const [species, setSpecies] = useRecoilState<SpeciesType>(speciesState);
  const [region, setRegion] = useRecoilState<RegionType>(regionState);
  const { data, fetchNextPage } = useInfiniteQuery(
    ['home', 1, region, species],
    ({ pageParam = 1 }) => {
      const SPECIIES_TYPES = {
        강아지: 'DOG',
        고양이: 'CAT',
        기타: 'ETC',
        전체: '',
      };
      const type = SPECIIES_TYPES[species] ?? '';

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
        return lastPage.response.hasNext ? lastPage.response.nextPage : false;
      },
      suspense: true,
    },
  );
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

  return region !== '전국' || species !== '전체' ? (
    <div className="overflow-hidden bg-white h-[95vh]">
      <div className="flex justify-center gap-7 my-3 items-center">
        <text className=" text-orange-400 text-xl font-semibold">카테고리</text>
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
        <text className="text-lg font-semibold"> 친구들 </text>
      </div>
      <VideoMuteIcon muted={muted} opacity={opacity} />
      <HomeVideoSlider {...homeVideoSliderProps} />
    </div>
  ) : (
    <div className="overflow-hidden bg-white h-[85vh]">
      <VideoMuteIcon muted={muted} opacity={opacity} />
      <HomeVideoSlider {...homeVideoSliderProps} />
    </div>
  );
};

export default Home;
