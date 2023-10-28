import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import VHome, { ShortFormProps } from './VHome';

// 1 페이지에 10 영상 -> 10번째 나오면 페이지 바꿔주는 작업 필요
// hasNext가 true면 다음 페이지에 영상 있는 거

const HomeIO = () => {
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 상태
  const [shortForm, setShortForm] = useState<ShortFormProps[]>();
  // 현재 보여지는 비디오 구분 -> array index로 구분하기
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const [hasNextVideo, setHasNextVideo] = useState<boolean>(true);
  const [videoArrayLength, setVideoArrayLength] = useState<number>(0);
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

  const { data, isLoading } = useQuery({
    queryKey: ['home', currentPage],
    queryFn: getShortForm,
    onSuccess: (result) => {
      setCurrentVideo(0);
      setShortForm(result.shortForms);
      setVideoArrayLength(result.shortForms.length);
      setHasNextVideo(result.hasNext);
    },
    onError: (err) => {
      console.error('Query 에러 발생: ', err);
    },
    enabled: hasNextVideo, // hasNext가 있는 경우, 한 번 더 실행
  });

  const loadNextVideo = () => {
    if (currentVideo < videoArrayLength - 1) {
      setCurrentVideo((prev) => {
        console.log('화살표 아래 키가 눌렸습니다.');
        return prev + 1;
      });
    }
  };

  const loadPrevVideo = () => {
    if (currentVideo > 0) {
      setCurrentVideo((prev) => {
        console.log('화살표 윗키가 눌렸습니다.');
        return prev - 1;
      });
    }
  };

  const handleMouseWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      loadNextVideo();
    } else loadPrevVideo();
    console.log('wheel delta: ', e.deltaY);
  };
  const handleKeyDown = (e: { key: string }) => {
    if (e.key === 'ArrowDown') {
      loadNextVideo();
    } else if (e.key === 'ArrowUp') {
      loadPrevVideo();
    }
    console.log('press: ', e.key);
  };

  // io - 미완
  // useEffect(() => {
  //   const io = new IntersectionObserver(
  //     (entries, observer) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           if (entry.boundingClientRect.top < 0) {
  //             // setLoadNextVideo(true);
  //           }
  //         }
  //       });
  //     },
  //     { threshold: 0.3 }, // 30%로 적용
  //   );

  //   if (videoRef.current) {
  //     io.observe(videoRef.current);
  //     console.log(io);
  //   }

  //   return () => {
  //     if (videoRef.current) {
  //       io.unobserve(videoRef.current);
  //     }
  //   };
  // }, [videoRef]);
  // load 처리 관련 - 미완
  // useEffect(() => {
  //   if (loadNextVideo) {
  //     // 다음 영상을 로드 기능 추가
  //     console.log('다음 영상');

  //     setLoadNextVideo(false);
  //   }
  // }, [loadNextVideo]);

  useEffect(() => {
    if (!isLoading && videoArrayLength && shortForm) {
      console.log('받아오는 data: ', data);
      console.log('video 개수 count: ', videoArrayLength);
      console.log('video Data: ', shortForm);

      const videoElement = videoRef.current as HTMLVideoElement;
      if (videoElement) {
        videoElement.focus(); // 바로 포커스 되어서 키 다운이 먹도록
        document.addEventListener('wheel', handleMouseWheel);
      }
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (videoRef.current) {
        document.removeEventListener('wheel', handleMouseWheel);
      }
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLoading, shortForm, currentVideo]);

  // useEffect(() => {}, []);

  return (
    <div className="video flex flex-col text-center items-center w-screen gap-2">
      {hasNextVideo ? (
        shortForm && (
          <div
            key={shortForm[currentVideo].petId}
            className="w-full justify-center"
          >
            <div className="">
              {/* <a href={`/pet/${shortForm[currentVideo].petId}`} className=""> */}
              <video
                className="bg-black w-screen h-[85vh]"
                muted
                autoPlay
                loop
                ref={videoRef}
                tabIndex={0}
                autoFocus
              >
                <source
                  src={shortForm[currentVideo].profileShortFormUrl}
                  type="video/mp4"
                />
              </video>
              <span className="absolute right-10 bottom-20 bg-black border-2 rounded-md text-white p-2">
                좋아요 표시할 공간
              </span>
              {/* </a> */}
              <div className="flex flex-row text-lg justify-center text-white bg-black">
                {shortForm[currentVideo].name}
                {shortForm[currentVideo].adoptionStatus}
                {shortForm[currentVideo].shelterName}
              </div>
            </div>
          </div>
        )
      ) : (
        // 처음 영상으로 돌아가기
        <div>다음 영상이 없습니다.</div>
      )}
    </div>
  );
};

export default HomeIO;
