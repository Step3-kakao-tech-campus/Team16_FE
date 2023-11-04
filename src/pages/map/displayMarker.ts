const displayMarker = async (map: any, addressInfo: any) => {
  const { kakao } = window;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { isRegistered, x: lng, y: lat, place_name } = addressInfo;

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
      `<div style="padding:5px;font-size:12px;">${place_name}</div>`,
    );
    infowindow.open(map, marker);
    setTimeout(() => {
      infowindow.close();
    }, 1500);
    console.log(marker.getPosition());
    map.setCenter(marker.getPosition());
  });

  marker.setMap(map);
};

export default displayMarker;
