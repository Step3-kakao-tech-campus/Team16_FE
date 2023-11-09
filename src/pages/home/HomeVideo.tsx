import { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import VideoDragBar from './VideoDragBar';

export interface HomeVideoProps {
  url: string;
  muted: boolean;
  handleDoubleClick: () => void;
  hovering: boolean;
  setHovering: (hover: boolean) => void;
  playing: boolean;
  setPlaying: (playing: boolean) => void;
  index: number;
}

const HomeVideo = (props: HomeVideoProps) => {
  const {
    url,
    muted,
    handleDoubleClick,
    hovering,
    setHovering,
    playing,
    setPlaying,
    index,
  } = props;
  const [opacity, setOpacity] = useState(1);
  const videoRef = useRef(null);
  const videoPlayerRef = useRef<HTMLVideoElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (videoPlayerRef.current) {
      // 음소거 상태로 만들기
      videoPlayerRef.current.defaultMuted = true;
      videoPlayerRef.current.playsInline = true;
    }
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting, !playing);

        if (entry.isIntersecting && playing) {
          const playPromise = videoPlayerRef.current?.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                // Automatic playback started!
                // Show playing UI.
                setLoading(false);
              })
              .catch((error) => {
                // Auto-play was prevented
                // Show paused UI.
              });
          }
        } else if (entry.isIntersecting && !playing) {
          videoPlayerRef.current?.pause();
        } else if (!entry.isIntersecting && playing) {
          videoPlayerRef.current?.pause();
        } else if (!entry.isIntersecting && !playing) {
          videoPlayerRef.current?.pause();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [playing]);

  const handleVideoClick = () => {
    setPlaying(!playing);
    if (videoPlayerRef.current && videoPlayerRef.current.paused) {
      videoPlayerRef.current.play();
    } else if (videoPlayerRef.current && !videoPlayerRef.current.paused) {
      videoPlayerRef.current.pause();
    }
  };
  return (
    <>
      {hovering && <VideoDragBar opacity={opacity} />}
      {/* {!playing && (
        <img src="/assets/images/play.svg" alt="play" className="absolute" />
      )} */}
      {loading && index === 0 && (
        <div className="absolute w-1/2 h-1/2 bg-black">
          <div className="text-white text-2xl">클릭해서 재생하기</div>
        </div>
      )}
      {loading && index !== 0 && (
        <div className="absolute w-1/2 h-1/2 bg-black">
          <div className="text-white text-2xl">이거는 로딩 중이라는 뜻</div>
        </div>
      )}
      <div
        ref={videoRef}
        onClick={handleVideoClick}
        onDoubleClick={handleDoubleClick}
        className="h-screen w-screen items-center justify-center"
        onMouseEnter={() => {
          setHovering(true);
          setOpacity(1);
          setTimeout(() => {
            setHovering(false);
          }, 1500);
          setTimeout(() => {
            setOpacity(0);
          }, 1300);
        }}
      >
        <video
          ref={videoPlayerRef}
          muted={!muted}
          autoPlay={playing}
          loop
          playsInline
        >
          <source src={url} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default HomeVideo;
