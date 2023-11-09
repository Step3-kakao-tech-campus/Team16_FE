interface ShortForm {
  adoptionStatus: string;
  age: string;
  name: string;
  shelterName: string;
}

const VideoInfo = (props: ShortForm) => {
  return (
    <div className="flex flex-row h-20 w-5/6 px-6 py-2  items-center justify-between">
      <div className="text-lg text-neutral-950">{props.name}</div>
      <div className="flex flex-col h-10 w-fit text-end">
        <div className=" text-blue-700 font-semibold whitespace-pre-wrap">
          {props.adoptionStatus}
        </div>
        <div className="text-gray-700 whitespace-nowrap">
          {props.shelterName}
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
