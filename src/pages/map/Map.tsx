/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-new */
import { useState, useEffect, useRef } from 'react';
import MapList from './MapList';
import MapSkeleton from './MapSkeleton';
import useMap from './useMap';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const { map, displayMarkerByInfo, searchedPlace, mutate, mutateData } =
    useMap(mapRef, setLoading);
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
      <div ref={mapRef} className={`w-96 h-96 ${loading ? 'hidden' : ''}`} />
      {loading && <MapSkeleton listSize={4} />}
      <MapList searchedPlace={searchedPlace} map={map} loading={loading} />
    </div>
  );
};

export default Map;
