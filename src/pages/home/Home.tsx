import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import speciesState, { SpeciesType } from 'recoil/speciesState';
import regionState, { RegionType } from 'recoil/regionState';
import { useRecoilState } from 'recoil';
import VHome, { HomeProps } from './VHome';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [shortForm, setShortForm] = useState<HomeProps | null>(null);
  const [region, setRegion] = useRecoilState<RegionType>(regionState);
  const [species, setSpecies] = useRecoilState<SpeciesType>(speciesState);

  const fetchShortForm = async (page: number) => {
    let type = '';
    if (species === '강아지') {
      type = 'DOG';
    } else if (species === '고양이') {
      type = 'CAT';
    } else if (species === '기타') {
      type = 'ETC';
    } else {
      type = '';
    }
    let area = '';
    if (region === '전국') {
      area = '';
    } else {
      area = region;
    }
    const apiUrl =
      type !== '' || area !== ''
        ? `${process.env.REACT_APP_URI}/short-forms?type=${type}&area=${area}&page=${page}&size=10`
        : `${process.env.REACT_APP_URI}/short-forms/home?page=${page}`;
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    return json.response;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['home', currentPage, species, region],
    queryFn: () => fetchShortForm(currentPage),
  });

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const pageData = {
        hasNext: data.hasNext,
      };

      const shortFormData = data.shortForms;
      const handleReachEnd = () => {
        if (pageData.hasNext) {
          setCurrentPage(currentPage + 1);
          console.log('마지막');
        } else {
          setCurrentPage(1);
        }
      };

      const homeProps: HomeProps = {
        pageProps: pageData,
        shortFormProps: shortFormData,
        handleReachEnd,
      };

      setShortForm(homeProps);
    }
  }, [data, isLoading, isError, species, region]);

  const handleRemoveFilter = (string: string) => {
    if (string === species) {
      setSpecies('전체');
      setCurrentPage(1);
    } else setRegion('전국');
    setCurrentPage(1);
    console.log('수정');
  };

  if (isLoading) {
    return <div className="justify-center">로딩중</div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  if (shortForm) {
    return species !== '전체' || region !== '전국' ? (
      <div>
        {/* 카테고리 선택 UI 요소를 추가 */}
        <div className="flex justify-center gap-7 items-center">
          <text className=" text-orange-400 text-lg font-semibold">
            카테고리
          </text>
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
        <VHome {...shortForm} />
      </div>
    ) : (
      <div>
        <VHome {...shortForm} />
      </div>
    );
  }

  return null;
};

export default Home;
