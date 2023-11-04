/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-new */
import React, { useEffect, useRef } from 'react';
import MapList, { SearchedPlace } from './MapList';
import useMap from './useMap';

declare global {
  interface Window {
    kakao: any;
  }
}
const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { map, displayMarkerByInfo, searchedPlace, mutate, mutateData } =
    useMap(mapRef);
  useEffect(() => {
    mutate(searchedPlace);
  }, [searchedPlace]);

  mutateData?.response?.forEach((data: any) => {
    searchedPlace.forEach((place: any) => {
      if (place.id === data.kakaoLocationId.toString()) {
        place.isRegistered = true;
      } else {
        place.isRegistered = false;
      }
    });
    searchedPlace.forEach((place: any) => {
      const lat = parseFloat(place.y);
      const lng = parseFloat(place.x);
      displayMarkerByInfo(place);
    });
  });

  return (
    <div className="Map flex">
      <div ref={mapRef} className="w-96 h-96" />
      <MapList searchedPlace={searchedPlace} map={map} />
    </div>
  );
};

export default Map;
