/* eslint-disable @typescript-eslint/naming-convention */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SearchedPlace } from '../mapType';

const MapList = ({
  searchedPlace,
  map,
}: {
  searchedPlace: SearchedPlace[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  map: any;
}) => {
  const { kakao } = window;
  const navigate = useNavigate();
  const [unRegisteredClick, setUnRegisteredClick] = useState(false);
  // isRegistered가 true인 것을 우선순위로 정렬, 그 다음엔 거리순으로 정렬
  searchedPlace.sort((a, b) => {
    if (a.isRegistered) {
      return -1;
    }
    if (b.isRegistered) {
      return 1;
    }
    // eslint-disable-next-line radix
    if (parseInt(a.distance) < parseInt(b.distance)) {
      return -1;
    }
    return 0;
  });

  return (
    <div className="w-96">
      {searchedPlace.map((place) => (
        <div
          key={place.id}
          onMouseEnter={() => {
            const moveLatLon = new kakao.maps.LatLng(
              parseFloat(place.y),
              parseFloat(place.x),
            );
            map.setCenter(moveLatLon);
          }}
          onClick={() => {
            if (place.isRegistered) {
              navigate(`/shelter/${place.shelterId}/1`);
            } else {
              setUnRegisteredClick(true);
              setTimeout(() => {
                setUnRegisteredClick(false);
              }, 1000);
            }
          }}
          className={`${
            !place.isRegistered && unRegisteredClick
              ? 'bg-red-200 '
              : 'bg-white hover:bg-gray-100 '
          } cursor-pointer border rounded-md p-4 mb-2 transition duration-300 ease-in-out`}
        >
          {place.isRegistered && (
            <div className="mx-auto w-1/2 text-brand-color">
              {`애니모리 등록 보호소`}
            </div>
          )}
          <div>{place.place_name}</div>
          <div className="text-sm">{place.road_address_name}</div>
        </div>
      ))}
      {unRegisteredClick && (
        <div className="text-red-600 text-sm">
          등록되지 않은 보호소는 클릭할 수 없습니다.
        </div>
      )}
    </div>
  );
};

export default MapList;
