const displayMarker = async (map: any, addressInfo: any) => {
  const { kakao } = window;
  const { isRegistered, lat, lng } = addressInfo;
  console.log(isRegistered, lat, lng);

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
    position: new kakao.maps.LatLng(lat, lng),
    image: isRegistered ? markerImageAnymory : markerImageDefault,
    clickable: true,
    zIndex: 1,
  });

  marker.setMap(map);
};

export default displayMarker;
