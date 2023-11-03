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
import { SearchedPlaceType } from './searchPlace';
import useMap from './useMap';

declare global {
  interface Window {
    kakao: any;
  }
}
const Map: React.FC = () => {
  const [notMutated, setNotMutated] = useState(false);

  const mapRef = useRef<HTMLDivElement>(null);
  const { map, displayMarkerByInfo, searchedPlace } = useMap(mapRef);
  console.log(searchedPlace);
  searchedPlace.forEach((place) => {
    const lat = parseFloat(place.x);
    const lng = parseFloat(place.y);
    console.log(lat, lng);
    displayMarkerByInfo({ lat, lng });
  });
  displayMarkerByInfo({ lat: 35.1759293, lng: 126.9149701 });

  return (
    <div className="Map">
      <div ref={mapRef} className="w-96 h-96" />
      <button>등록된 장소만 콘솔에 출력하기</button>
    </div>
  );
};

export default Map;
