import { ClipLoader } from 'react-spinners';
import { LoaderProps } from '../mapType';

const Loader = (props: LoaderProps) => {
  const { loading, longLoading, loadingButApiIsOkay } = props;

  return (
    <>
      {loadingButApiIsOkay ||
        (loading && (
          <div className="w-screen h-screen flex flex-col items-center gap-8 justify-center">
            <h1 className="font-bold">{loading} 중 입니다...</h1>
            {loadingButApiIsOkay && <span>서버가 느려요... 기다려주세요!</span>}
            {longLoading && (
              <>
                <span>로딩이 너무 오래 걸리시나요?</span>
                <button
                  type="button"
                  onClick={() => {
                    window.location.reload();
                  }}
                  className="bg-brand-color text-white rounded-md px-4 py-2"
                >
                  새로고침
                </button>
              </>
            )}
            <ClipLoader color="black" loading={true} size={50} />
          </div>
        ))}
    </>
  );
};

export default Loader;
