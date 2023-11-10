import VideoDragBar from './VideoDragBar';
import { VideoOverlayProps } from '../homeType';

const VideoOverlay = (props: VideoOverlayProps) => {
  const { opacity, hovering, loading, playing, index } = props;
  return (
    <>
      {hovering && <VideoDragBar opacity={opacity} />}
      {((loading && index === 0) || (loading && index !== 0 && !playing)) && (
        <div className="absolute w-fit rounded-2xl h-fit p-10 backdrop-blur-lg flex flex-col justify-center items-center align-middle bg-brand-color/50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-white">한 번 탭하면 일시정지</div>
          <div className="text-white">두 번 탭하면 음소거가 가능해요</div>
        </div>
      )}
      {loading && index !== 0 && playing && (
        <div className="absolute w-10 h-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 loader" />
      )}
    </>
  );
};

export default VideoOverlay;
