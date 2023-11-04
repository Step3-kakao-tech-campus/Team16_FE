/* eslint-disable @typescript-eslint/naming-convention */
export interface SearchedPlace {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
  isRegistered: boolean;
}

const MapList = ({
  searchedPlace,
  map,
}: {
  searchedPlace: SearchedPlace[];
  map: any;
}) => {
  const { kakao } = window;
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

  const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  return (
    <div>
      {searchedPlace.map((place) => (
        <div
          key={place.id}
          onClick={() => {
            const moveLatLon = new kakao.maps.LatLng(
              parseFloat(place.y),
              parseFloat(place.x),
            );
            map.setCenter(moveLatLon);
          }}
        >
          <div>{place.place_name}</div>
          <div>{place.road_address_name}</div>

          <div>{place.isRegistered ? '등록됨' : '등록안됨'}</div>
        </div>
      ))}
    </div>
  );
};

export default MapList;
