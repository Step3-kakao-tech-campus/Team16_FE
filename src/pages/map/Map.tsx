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
        place.shelterId = data.id;
      } else {
        place.isRegistered = false;
      }
    });
    searchedPlace.forEach((place: any) => {
      displayMarkerByInfo(place);
    });
  });

  return (
    <div className="Map flex flex-col md:flex-row items-center justify-center gap-8">
      <div ref={mapRef} className="w-96 h-96" />
      <MapList searchedPlace={searchedPlace} map={map} />
    </div>
  );
};

export default Map;
