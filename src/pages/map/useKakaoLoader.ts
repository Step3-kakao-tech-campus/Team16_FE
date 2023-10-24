import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

const useKakaoLoader = () => {
  useKakaoLoaderOrigin({
    appkey: `${process.env.REACT_APP_KAKAO_KEY}`,
    libraries: ['clusterer', 'drawing', 'services'],
  });
};

export default useKakaoLoader;
