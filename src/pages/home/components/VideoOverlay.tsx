import VideoDragBar from './VideoDragBar';
import { VideoOverlayProps } from '../homeType';

const VideoOverlay = (props: VideoOverlayProps) => {
  const { opacity, hovering, loading, playing, index } = props;
  return (
    <>
      {hovering && <VideoDragBar opacity={opacity} />}
      {((loading && index === 0) || (loading && index !== 0 && !playing)) && (
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
          <div className="absolute w-fit rounded-2xl h-fit p-10 backdrop-blur-lg flex flex-col justify-center items-center align-middle bg-brand-color/50">
            <div className="text-white">한 번 탭하면 일시정지</div>
            <div className="text-white">두 번 탭하면 음소거가 가능해요</div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoOverlay;
