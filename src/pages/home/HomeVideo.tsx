import { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

export interface HomeVideoProps {
  url: string;
  muted: boolean;
  setMuted: (mute: boolean) => void;
  handleDoubleClick: () => void;
}

const HomeVideo = (props: HomeVideoProps) => {
  const { url, muted, setMuted } = props;
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
      <div
        ref={videoRef}
        onClick={() => setPlaying((prev) => !prev)}
        onDoubleClick={props.handleDoubleClick}
        className="h-screen w-screen items-center justify-center"
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
