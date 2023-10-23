import React, { useEffect, useState } from 'react';

const { kakao } = window;

// 지도 띄우기
const LoadMap = () => {
  const [map, setMap] = useState(null);

  // useEffect []로 script 태그 내용 넣어주는게 가장 간단한 방식 + API 문서대로 하기 쉬울듯
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      // 중간 위치 -> 나중에 사용자 위치로 바꿔야 됨
      center: new kakao.maps.LatLng(35.175483, 126.906988),
      // 확대 수준
      level: 4,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  return <div id="map" className="w-[500px] h-[400px] mx-2"></div>;
};

const TestMap = () => {
  // const [data, isLoading, isSuccess] = useQuery(['shelter'], () => {
  //   fetch(`${process.env.REACT_APP_URI}/shelter/filter`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(),
  //   }).then((res) => {
  //     return res.json();
  //   });
  // });
  const currentPosition = { lat: 35.1759293, lon: 126.9149701 };

  return <LoadMap />;
};

export default TestMap;
