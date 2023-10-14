/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-new */
import React, { useEffect, useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

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
  isRegistered?: boolean;
}

const Map: React.FC = () => {
  const [searchedPlace, setSearchedPlace] = useState<SearchedPlaceType[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoading2, setIsLoading2] = React.useState(true);
  const [notMutated, setNotMutated] = React.useState(false);
  const [currentPosition, setCurrentPosition] = React.useState({
    lat: 35.1759293,
    lon: 126.9149701,
  });
  const {
    data,
    isLoading: isMutateLoading,
    mutate,
    isSuccess,
  } = useMutation(
    ['shelter'],
    () => {
      console.log(searchedPlace);
      return fetch(`${process.env.REACT_APP_URI}/shelter/filter`, {
        method: 'POST',
        body: JSON.stringify(searchedPlace.map((place) => place.id)),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (data) => {
        console.log(data);
        if (data.response.length > 0) {
          for (let i = 0; i < data.response.length; i += 1) {
            for (let j = 0; j < searchedPlace.length; j += 1) {
              console.log(
                data.response[i].kakaoLocationId,
                searchedPlace[j].id,
              );
              if (
                data.response[i].kakaoLocationId.toString() ===
                searchedPlace[j].id
              ) {
                setSearchedPlace((prev) => {
                  const temp = [...prev];
                  temp[j].isRegistered = true;
                  return temp;
                });
              } else {
                setSearchedPlace((prev) => {
                  const temp = [...prev];
                  temp[j].isRegistered = false;
                  return temp;
                });
              }
            }
          }
        }
      },
    },
  );
  console.log(searchedPlace);
  if (notMutated) {
    mutate();
    setNotMutated(false);
    console.log('mutate');
  }

  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_KEY}&libraries=services&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      if (!currentPosition.lat || !currentPosition.lon) {
        return;
      }
      console.log(currentPosition.lat, currentPosition.lon);
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(
            currentPosition.lat,
            currentPosition.lon,
          ), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const { kakao } = window;
        // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

        // 장소 검색 객체를 생성합니다
        const ps = new kakao.maps.services.Places();

        // 키워드로 장소를 검색합니다
        ps.keywordSearch('보호소', placesSearchCB, {
          location: new kakao.maps.LatLng(
            currentPosition.lat,
            currentPosition.lon,
          ),
          radius: 20000,
          sort: kakao.maps.services.SortBy.DISTANCE,
        });

        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB(data: string | any[], status: any) {
          if (status === kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            const bounds = new kakao.maps.LatLngBounds();

            for (let i = 0; i < data.length; i += 1) {
              if (
                searchedPlace.some((place) => {
                  return place.id === data[i].id && place.isRegistered;
                })
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
              if (data.length > searchedPlace.length) {
                setSearchedPlace((prev) => [...prev, placeInfo]);
              }
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            setNotMutated(true);
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

          // 마커에 클릭이벤트를 등록합니다
          kakao.maps.event.addListener(marker, 'click', function () {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
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

          // 마커에 클릭이벤트를 등록합니다
          kakao.maps.event.addListener(marker, 'click', function () {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent(
              `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`,
            );
            infowindow.open(map, marker);
            // 중간 지점으로 이동
            map.setCenter(marker.getPosition());
          });
        }
        // searchedPlace.current 순환하며 isRegistered에 대해서 마커 스타일 변경하기
        const imageSrc3 = '/assets/images/all.png';
        const imageSize3 = new kakao.maps.Size(64, 69);
        const markerImage3 = new kakao.maps.MarkerImage(imageSrc3, imageSize3);
        function displayMarker3(place: any) {
          // 마커를 생성하고 지도에 표시합니다
          const marker = new kakao.maps.Marker({
            map,
            position: new kakao.maps.LatLng(place.y, place.x),
            image: markerImage3,
          });

          // 마커에 클릭이벤트를 등록합니다
          kakao.maps.event.addListener(marker, 'click', function () {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent(
              `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`,
            );
            infowindow.open(map, marker);
            // 중간 지점으로 이동
            map.setCenter(marker.getPosition());
          });
        }
      });
      setTimeout(() => {
        console.log('settimeout');
        setIsLoading(false);
      }, 500);
      setTimeout(() => {
        setIsLoading2(false);
      }, 1000);
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
  }, [isLoading, isLoading2]);

  return (
    <div className="Map">
      <div id="map" className="w-96 h-96" />
      <button>등록된 장소만 콘솔에 출력하기</button>
    </div>
  );
};

export default Map;
