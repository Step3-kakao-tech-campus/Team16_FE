/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, RefObject, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import displayMarker from './components/displayMarker';
import { SearchedPlace } from './mapType';

function useMap<T>(
  containerRef: RefObject<T extends HTMLElement ? T : HTMLElement>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const { kakao } = window;
  const [map, setMap] = useState<any>();
  const [searchedPlace, setSearchedPlace] = useState<any>([]);
  const boundRef = useRef<any>();

  const displayMarkerByInfo = async (addressInfo: SearchedPlace) => {
    if (!map) return;
    map.setBounds(boundRef.current);
    await displayMarker(map, addressInfo);
  };
  const { data: mutateData, mutate } = useMutation(
    ['shelterFilter'],
    (searchedPlaces: any) =>
      fetch(`${process.env.REACT_APP_URI}/shelter/filter`, {
        method: 'POST',
        body: JSON.stringify(searchedPlaces.map((place: any) => place.id)),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json()),
    {
      onSuccess: (data) => {
        if (data.success === false) {
          throw new Error(data.error.message);
        }
      },
    },
  );

  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      if (!containerRef.current || !kakao) return;
      setLoading(false);
      window.kakao.maps.load(() => {
        setMap(
          new window.kakao.maps.Map(containerRef.current, {
            center: new window.kakao.maps.LatLng(35.1759293, 126.9149701),
            level: 3,
          }),
        );

        function placesSearchCB(data: any[], status: any) {
          if (status === kakao.maps.services.Status.OK) {
            const bounds = new kakao.maps.LatLngBounds();

            for (let i = 0; i < data.length; i += 1) {
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }
            boundRef.current = bounds;
          }
          setSearchedPlace(data);
        }
        const ps = new kakao.maps.services.Places(); // 키워드로 장소를 검색합니다
        ps.keywordSearch('보호소', placesSearchCB, {
          location: new kakao.maps.LatLng(35.1759293, 126.9149701),
          radius: 20000,
          sort: kakao.maps.services.SortBy.DISTANCE,
        });
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
    onLoadKakaoMap();
  }, [containerRef, kakao]);

  return { map, displayMarkerByInfo, searchedPlace, mutate, mutateData };
}

export default useMap;
