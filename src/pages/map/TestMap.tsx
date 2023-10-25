import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

type Coordinate = {
  lat: number;
  lng: number;
};

type PlaceType = {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
};

// 보호소 키워드로 검색한 후 저장
const searchKeywordPlace = (
  state: PlaceType[],
  setState: React.Dispatch<React.SetStateAction<PlaceType[]>>,
) => {
  const ps = new kakao.maps.services.Places();
  ps.keywordSearch(
    '동물 보호소',
    (data: any, status: kakao.maps.services.Status) => {
      if (status === kakao.maps.services.Status.OK && data) {
        setState(data);
      } else if (status === kakao.maps.services.Status.OK) {
        // 검색 결과가 없을 때 -> 이 부분은 나중에 어떻게 표현할지 회의 필요
        alert('검색 결과가 없습니다.');
      }
    },
  );
  // 여기서 필터링?
  if (state.length > 0) {
    const filteredSearchedPlaces = state.map((searchedPlace) => ({
      address_name: searchedPlace.address_name,
      place_name: searchedPlace.place_name,
      lat: searchedPlace.x,
      lng: searchedPlace.y,
    }));
    return filteredSearchedPlaces;
  }
  return [];
};

const TestMap = () => {
  const [currentPosition, setCurrentPosition] = useState<Coordinate>({
    lat: 35.1759293,
    lng: 126.9149701,
  });
  const [markers, setMarkers] = useState<Array<PlaceType>>([]);
  const [searchedPlaces, setSearchedPlaces] = useState<Array<PlaceType>>([]);

  // 필요한 값만 새로운 객체로 저장
  useEffect(() => {
    const filteredPlaces = searchKeywordPlace(
      searchedPlaces,
      setSearchedPlaces,
    );
    console.log('filteredPlace: ', filteredPlaces);
  }, []);

  return (
    <Map
      id="map"
      center={currentPosition}
      className="w-[500px] h-[500px]"
      level={3}
    >
      <MapMarker position={currentPosition}>현재 위치</MapMarker>
    </Map>
  );
};

export default TestMap;
