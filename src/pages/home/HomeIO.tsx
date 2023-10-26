import { useQuery } from '@tanstack/react-query';
import { VideoHTMLAttributes, useEffect, useRef, useState } from 'react';
import VHome, { HomeProps } from './VHome';

// VHome에 들어가는 props
// export interface HomeProps {
//   pageProps: PageProps;
//   shortFormProps: ShortFormProps;
// }

const HomeIO = () => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [shortForm, setShortForm] = useState<HomeProps>();
  const [currentVideo, setCurrentVideo] = useState(); // 현재 보여지는 비디오 구분
  const [loadNextVideo, setLoadNextVideo] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const getShortForm = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URI}/short-forms/home?page=${currentPage}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    return json.response;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['home', currentPage],
    queryFn: getShortForm,
  });
  console.log(data);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.boundingClientRect.top < 0) {
              setLoadNextVideo(true);
            }
          }
        });
      },
      { threshold: 0.3 }, // 30%로 적용
    );

    if (videoRef.current) {
      io.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        io.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);

  useEffect(() => {
    if (loadNextVideo) {
      // 다음 영상을 로드 기능 추가
      console.log('다음 영상');

      setLoadNextVideo(false);
    }
  }, [loadNextVideo]);

  return (
    <div>
      <video ref={videoRef} controls>
        <source src="your-video-source.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HomeIO;
