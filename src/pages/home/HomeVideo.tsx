import { useState, useRef, useEffect } from 'react';
import VideoOverlay, { VideoOverlayProps } from './VideoOverlay';

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
        if (entry.isIntersecting && playing) {
          const playPromise = videoPlayerRef.current?.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                // Automatic playback started!
                // Show playing UI.
                setLoading(false);
              })
              .catch(() => {
                // Auto-play was prevented
                // Show paused UI.
              });
          }
        } else {
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
  const handleMouseEnter = () => {
    setHovering(true);
    setOpacity(1);
    setTimeout(() => {
      setHovering(false);
    }, 1500);
    setTimeout(() => {
      setOpacity(0);
    }, 1300);
  };
  const videoOverlayProps: VideoOverlayProps = {
    opacity,
    hovering,
    loading,
    playing,
    index,
  };
  return (
    <>
      <VideoOverlay {...videoOverlayProps} />
      <div
        ref={videoRef}
        onClick={handleVideoClick}
        onDoubleClick={handleDoubleClick}
        className="h-[70vh] items-center justify-center"
        onMouseEnter={handleMouseEnter}
      >
        <video
          className="w-full h-full"
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
