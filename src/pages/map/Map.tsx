/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-new */
import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map: React.FC = () => {
  useEffect(() => {
    // 현재 위치를 가져옵니다
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude; // 위도
      const lon = position.coords.longitude; // 경도
      console.log(lat, lon);
    });
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_KEY}&libraries=services&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const { kakao } = window;
        // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

        // 장소 검색 객체를 생성합니다
        const ps = new kakao.maps.services.Places();

        // 키워드로 장소를 검색합니다
        ps.keywordSearch('이태원', placesSearchCB);

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
              displayMarker(data[i]);
              console.log(data[i]);
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
          }
        }

        // 지도에 마커를 표시하는 함수입니다
        function displayMarker(place: any) {
          // 마커를 생성하고 지도에 표시합니다
          const marker = new kakao.maps.Marker({
            map,
            position: new kakao.maps.LatLng(place.y, place.x),
          });

          // 마커에 클릭이벤트를 등록합니다
          kakao.maps.event.addListener(marker, 'click', function () {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent(
              `<div style="padding:5px;font-size:12px;">${place.phone}</div>`,
            );
            infowindow.open(map, marker);
          });
        }
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
  }, []);

  return (
    <div className="Map">
      <div id="map" className="w-96 h-96" />
    </div>
  );
};

export default Map;
