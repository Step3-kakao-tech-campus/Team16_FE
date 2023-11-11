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
import useMap from '../useMap';
import Loader from './Loader';
import { LoaderProps } from '../mapType';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState('지도 로딩');
  const [longLoading, setLongLoading] = useState(false);
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

  setTimeout(() => {
    setLongLoading(true);
  }, 5000);

  const loaderProps: LoaderProps = {
    loading,
    longLoading,
    loadingButApiIsOkay:
      longLoading && mutateData?.response?.length === 0 && !loading,
  };

  return (
    <>
      <Loader {...loaderProps} />
      <div className="Map mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
        <div ref={mapRef} className={`w-96 h-96`} />
        <MapList searchedPlace={searchedPlace} map={map} />
      </div>
    </>
  );
};

export default Map;
