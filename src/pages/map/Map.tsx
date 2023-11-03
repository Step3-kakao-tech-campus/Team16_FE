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
import useMap from './useMap';

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
  const [notMutated, setNotMutated] = React.useState(false);

  const mapRef = useRef<HTMLDivElement>(null);
  const { map, displayMarkerByInfo } = useMap(mapRef);

  return (
    <div className="Map">
      <div ref={mapRef} className="w-96 h-96" />
      <button>등록된 장소만 콘솔에 출력하기</button>
    </div>
  );
};

export default Map;
