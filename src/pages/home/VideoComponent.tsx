import React, { useState, useRef } from 'react';

interface VideoComponentProps {
  profileShortFormUrl: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  profileShortFormUrl,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playRequested, setPlayRequested] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        controls
        loop
        muted
        className="w-full h-full"
        onPlay={() => setPlayRequested(true)}
      >
        <source src={profileShortFormUrl} type="video/mp4" />
      </video>
      {!playRequested && <button onClick={handlePlayClick}>재생</button>}
    </div>
  );
};

export default VideoComponent;
