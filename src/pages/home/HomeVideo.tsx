import { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

export interface HomeVideoProps {
  url: string;
  muted: boolean;
  setMuted: (mute: boolean) => void;
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
        className="h-asdf"
      >
        <ReactPlayer
          url={url}
          loop={true}
          width="100%"
          playing={playing}
          muted={muted}
        />
      </div>
      <button
        onClick={() => setMuted(!muted)}
        className="m-5 p-2 bg-red-900 rounded-full"
      />
    </>
  );
};

export default HomeVideo;
