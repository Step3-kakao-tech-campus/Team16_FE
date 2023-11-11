import { ClipLoader } from 'react-spinners';
import { LoaderProps } from '../mapType';

const Loader = (props: LoaderProps) => {
  const { loading, longLoading, loadingButApiIsOkay } = props;

  return (
    <>
      {loadingButApiIsOkay && (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <h1 className="font-bold">거의 다 불러왔어요!</h1>
          <span>조금만 기다려주세요!</span>
        </div>
      )}
      {longLoading && loading && (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <h1>로딩이 너무 오래 걸리시나요?</h1>
          <button
            type="button"
            onClick={() => {
              window.location.reload();
            }}
            className="bg-brand-color text-white rounded-md px-4 py-2"
          >
            새로고침
          </button>
        </div>
      )}
      {loadingButApiIsOkay ||
        (loading && (
          <div className="w-screen h-screen flex items-center justify-center">
            <ClipLoader color="black" loading={true} size={50} />
          </div>
        ))}
    </>
  );
};

export default Loader;
