import { VideoMuteIconProps } from '../homeType';

const VideoMuteIcon = (props: VideoMuteIconProps) => {
  const { muted, opacity } = props;
  return (
    <div className="absolute z-10 pointer-events-none w-16 h-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {!muted && (
        <img
          src="/assets/images/speaker.svg"
          alt="speaker"
          style={{
            opacity,
            transition: 'opacity 0.5s',
            width: '100%',
            height: '100%',
          }}
        />
      )}
      {muted && (
        <img
          src="/assets/images/mute.svg"
          alt="mute"
          style={{
            opacity,
            transition: 'opacity 0.5s',
            width: '100%',
            height: '100%',
          }}
        />
      )}
    </div>
  );
};

export default VideoMuteIcon;
