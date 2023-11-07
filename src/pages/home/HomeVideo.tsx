import { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

export interface HomeVideoProps {
  url: string;
  muted: boolean;
  setMuted: (mute: boolean) => void;
  handleDoubleClick: () => void;
  hovering: boolean;
  setHovering: (hover: boolean) => void;
}

const HomeVideo = (props: HomeVideoProps) => {
  const { url, muted, setMuted, handleDoubleClick, hovering, setHovering } =
    props;
  const [playing, setPlaying] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPlaying(true);
        } else {
          setPlaying(false);
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
  }, []);

  return (
    <>
      {hovering && (
        <div
          className="absolute font text-white text-3xl bg-black/50 top-0 right-0 w-1 px-10 h-full flex flex-col gap-10 items-center justify-center"
          style={{
            opacity,
            transition: 'opacity 0.2s ease-in-out',
          }}
        >
          <div>왼쪽으로</div>
          <div>당겨보세요</div>
        </div>
      )}
      <div
        ref={videoRef}
        onClick={() => setPlaying((prev) => !prev)}
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
        <ReactPlayer
          url={url}
          loop={true}
          width="100%"
          height="100%"
          playing={playing}
          muted={muted}
        />
      </div>
    </>
  );
};

export default HomeVideo;
