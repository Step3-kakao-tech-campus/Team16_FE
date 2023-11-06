import ReactPlayer from 'react-player';

const HomePost = () => {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=2L2Goi1HB-Q"
        controls={true}
        width="100%"
        playing={true}
        onReady={() => console.log('onReady callback')}
        muted={true}
      />
    </div>
  );
};

export default HomePost;
