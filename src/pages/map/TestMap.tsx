import { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from './useKakaoLoader';

type Coordinate = {
  lat: number;
  lng: number;
};

interface SearchedPlaceType {
  position: { lat: number; lng: number };
  content: string;
}

type PlaceType = {
  address_name: string;
  distance: number;
  id: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: number;
  y: number;
};

const TestMap = () => {
  useKakaoLoader();
  const [currentPosition, setCurrentPosition] = useState<Coordinate>({
    lat: 35.1759293,
    lng: 126.9149701,
  });
  const [markers, setMarkers] = useState<Array<SearchedPlaceType>>([]);
  const [searchedPlaces, setSearchedPlaces] = useState<Array<object>>([]);

  // 키워드 검색
  useEffect(() => {
    const ps = new kakao.maps.services.Places();
    const places: any = [];
    ps.keywordSearch('보호소', (data, status) => {
      if (status === kakao.maps.services.Status.OK && data) {
        places.push(data);
      }
      setSearchedPlaces(places);
    });
    console.log(searchedPlaces);
  }, []);

  return (
    <Map
      id="map"
      center={currentPosition}
      className="w-[500px] h-[500px]"
      level={3}
      onCreate={() => {}}
    >
      <MapMarker position={currentPosition}>현재 위치</MapMarker>
    </Map>
  );
};

export default TestMap;
