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
        <div className="absolute bg-black/50 top-0 right-0 w-1/6 h-full flex items-center justify-center">
          안녕하세요
        </div>
      )}
      <div
        ref={videoRef}
        onClick={() => setPlaying((prev) => !prev)}
        onDoubleClick={handleDoubleClick}
        className="h-screen w-screen items-center justify-center"
        onMouseEnter={() => {
          setHovering(true);
          setTimeout(() => {
            setHovering(false);
          }, 1000);
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
