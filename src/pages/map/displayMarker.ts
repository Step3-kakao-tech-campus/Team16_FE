export interface AddressInfo {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const displayMarker = async (map: any, addressInfo: AddressInfo) => {
  const { kakao } = window;
  const { isRegistered, x: lng, y: lat, place_name: placeName } = addressInfo;

  const DEFAULT_SHELTER_SRC = '/assets/images/racoon.png';
  const ANYMORY_SHELTER_SRC = '/assets/images/dog.png';
  const imageSize = new kakao.maps.Size(64, 69);

  const markerImageDefault = new kakao.maps.MarkerImage(
    DEFAULT_SHELTER_SRC,
    imageSize,
  );
  const markerImageAnymory = new kakao.maps.MarkerImage(
    ANYMORY_SHELTER_SRC,
    imageSize,
  );
  const marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(parseFloat(lat), parseFloat(lng)),
    image: isRegistered ? markerImageAnymory : markerImageDefault,
    clickable: true,
    zIndex: 1,
  });

  const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  kakao.maps.event.addListener(marker, 'click', () => {
    infowindow.setContent(
      `<div style="padding:5px;font-size:12px;">${placeName}</div>`,
    );
    infowindow.open(map, marker);
    setTimeout(() => {
      infowindow.close();
    }, 1500);
    map.setCenter(marker.getPosition());
  });

  marker.setMap(map);
};

export default displayMarker;
