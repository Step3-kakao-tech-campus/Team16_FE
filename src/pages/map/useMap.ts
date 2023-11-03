import { useEffect, useState, RefObject, useRef } from 'react';
import displayMarker from './displayMarker';
import searchPlace, { SearchedPlaceType } from './searchPlace';

function useMap<T>(
  containerRef: RefObject<T extends HTMLElement ? T : HTMLElement>,
) {
  const [map, setMap] = useState<any>();
  const [searchedPlace, setSearchedPlace] = useState<any[]>([]);
  const boundRef = useRef<any>();
  console.log(searchedPlace);

  const displayMarkerByInfo = async (addressInfo: any) => {
    if (!map) return;
    map.setBounds(boundRef.current);
    await displayMarker(map, addressInfo);
  };

  console.log(searchedPlace);

  useEffect(() => {
    (() => {
      if (!containerRef.current) return;
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
    })();
  }, [containerRef]);

  return { map, displayMarkerByInfo, searchedPlace };
}

export default useMap;
