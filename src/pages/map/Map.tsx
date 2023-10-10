/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-new */
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}
interface SearchedPlaceType {
  address_name: string;
  distance: string;
  id: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

const Map: React.FC = () => {
  const searchedPlace = useRef<SearchedPlaceType[]>([]);
  const [currentPosition, setCurrentPosition] = React.useState({
    lat: 0,
    lon: 0,
  });

  useEffect(() => {
    // 현재 위치를 가져옵니다
    if (!navigator.geolocation) {
      alert('위치 정보를 사용할 수 없습니다');
    }
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude; // 위도
      const lon = position.coords.longitude; // 경도
      setCurrentPosition({ lat, lon });
    });
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_KEY}&libraries=services&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      if (!currentPosition.lat || !currentPosition.lon) {
        return;
      }
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(
            currentPosition.lat,
            currentPosition.lon,
          ),
          level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const { kakao } = window;
        // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

        // 장소 검색 객체를 생성합니다
        const ps = new kakao.maps.services.Places();

        // '보호소' 키워드로 장소를 검색합니다
        ps.keywordSearch('보호소', placesSearchCB, {
          location: new kakao.maps.LatLng(
            currentPosition.lat,
            currentPosition.lon,
          ),
          radius: 20000,
          sort: kakao.maps.services.SortBy.DISTANCE,
        });

        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB(
          data: string | any[],
          status: any,
          pagination: any,
        ) {
          if (status === kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            const bounds = new kakao.maps.LatLngBounds();

            for (let i = 0; i < data.length; i += 1) {
              if (
                data[i].place_name === '광주광역시동물보호소' ||
                data[i].place_name === '광주청소년일시보호소'
              ) {
                displayMarker2(data[i]);
              } else displayMarker(data[i]);
              const {
                address_name,
                distance,
                id,
                place,
                place_name,
                place_url,
                road_address_name,
                x,
                y,
              } = data[i];
              const placeInfo: SearchedPlaceType = {
                address_name,
                distance,
                id,
                place_name,
                place_url,
                road_address_name,
                x,
                y,
              };
              searchedPlace.current.push(placeInfo);
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
          }
        }

        // 마커 스타일 변경
        const imageSrc = '/assets/images/racoon.png';
        const imageSize = new kakao.maps.Size(64, 69);
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        // 지도에 마커를 표시하는 함수입니다
        function displayMarker(place: any) {
          // 마커를 생성하고 지도에 표시합니다
          const marker = new kakao.maps.Marker({
            map,
            position: new kakao.maps.LatLng(place.y, place.x),
            image: markerImage,
          });

          kakao.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(
              `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`,
            );
            infowindow.open(map, marker);
            // 중간 지점으로 이동
            map.setCenter(marker.getPosition());
          });
        }
        // 등록되지 않은 보호소는 마커 스타일 다르게 표시
        const imageSrc2 = '/assets/images/dog.png';
        const imageSize2 = new kakao.maps.Size(64, 69);
        const markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize2);
        function displayMarker2(place: any) {
          // 마커를 생성하고 지도에 표시합니다
          const marker = new kakao.maps.Marker({
            map,
            position: new kakao.maps.LatLng(place.y, place.x),
            image: markerImage2,
          });

          kakao.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(
              `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`,
            );
            infowindow.open(map, marker);
            map.setCenter(marker.getPosition());
          });
        }
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
  }, [currentPosition.lat, currentPosition.lon]);

  return (
    <div className="Map">
      <div id="map" className="w-96 h-96" />
      <button onClick={() => console.log(searchedPlace.current)}>
        검색된 장소들 콘솔에 출력하기
      </button>
    </div>
  );
};

export default Map;
