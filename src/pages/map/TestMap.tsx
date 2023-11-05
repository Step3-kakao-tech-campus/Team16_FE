import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useRef,
  RefObject,
} from 'react';
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

type FilteredPlaceType = {
  address_name: string;
  place_name: string;
  lat: string;
  lng: string;
};

const TestMap = () => {
  const [currentPosition, setCurrentPosition] = useState<Coordinate>({
    lat: 35.1759293,
    lng: 126.9149701,
  });
  const [markers, setMarkers] = useState<Array<PlaceType>>([]);
  const [searchedPlaces, setSearchedPlaces] = useState<Array<PlaceType>>([]);
  const [isExecuted, setIsExecuted] = useState<boolean>(false);
  const mapRef = useRef<any>();
  const markerRef = useRef<any>();

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
          setIsExecuted(true);
        } else if (status === kakao.maps.services.Status.ERROR) {
          // 검색 결과가 없을 때 -> 이 부분은 나중에 어떻게 표현할지 회의 필요
          alert('검색 결과가 없습니다.');
          setIsExecuted(false);
        }
      },
    );
  };

  // 필요한 값만 새로운 객체로 저장
  useEffect(() => {
    if (!isExecuted) searchKeywordPlace(searchedPlaces, setSearchedPlaces);
    console.log('filteredPlaces: ', searchedPlaces);
    console.log('MapRef: ', mapRef.current);
  }, [searchedPlaces]);

  return (
    <div className="flex">
      <Map
        id="map"
        center={currentPosition}
        className="w-[500px] h-[500px]"
        level={3}
        ref={mapRef}
      >
        {/* <MapMarker
          position={currentPosition}
          image={{
            src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35,
            }, // 마커이미지의 크기입니다
          }}
          title="현재 위치"
          ref={markerRef}
        /> */}
        {/* Marker 표시 */}
        {searchedPlaces.map((searchedPlace) => {
          console.log('마커 작동여부 확인');
          return (
            <MapMarker
              key={`${searchedPlace.id}-${searchedPlace.place_name}`}
              position={{
                x: Number(searchedPlace.x),
                y: Number(searchedPlace.y),
              }} // 마커를 표시할 위치
              image={{
                src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
                size: {
                  width: 24,
                  height: 35,
                }, // 마커이미지의 크기입니다
              }}
              title={searchedPlace.place_name} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            ></MapMarker>
          );
        })}
      </Map>
      <div className="list flex flex-col justify-center">
        {isExecuted && searchedPlaces.length > 0 ? (
          searchedPlaces.map((searchedPlace, index) => (
            <span key={index} className=" border-gray-200 ">
              <span className="">{searchedPlace.place_name}</span>
              <span className="">{searchedPlace.address_name}</span>
            </span>
          ))
        ) : (
          <div className="border-gray-200">검색 결과가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default TestMap;
