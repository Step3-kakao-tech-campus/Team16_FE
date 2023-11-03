import { useEffect, useState, RefObject } from 'react';

function useMap<T>(
  containerRef: RefObject<T extends HTMLElement ? T : HTMLElement>,
) {
  const [map, setMap] = useState();

  useEffect(() => {
    (() => {
      if (!containerRef.current) return;
      setMap(
        new window.kakao.maps.Map(containerRef.current, {
          center: new window.kakao.maps.LatLng(35.1759293, 126.9149701),
          level: 3,
        }),
      );
    })();
  }, [containerRef]);

  return { map };
}
