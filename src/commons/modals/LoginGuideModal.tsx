import { removeCookie, setCookie } from 'commons/cookie/cookie';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenCheckState } from 'recoil/shelterState';

const LoginGuideModal = () => {
  const navigate = useNavigate();
  const [isLogined, setIsLogined] = useRecoilState(tokenCheckState);
  // default : true (로그인이 되지 않았을 때 사용하기 위해)

  if (isLogined) {
    return null;
  }

  return (
    <>
      <dialog
        className="fixed z-50 flex justify-center w-full h-[20vh] opacity-100 hover:opacity-100 bottom-2 rounded-lg border-2 border-gray-300 text-black"
        open={!isLogined}
      >
        <div className="modal-content w-[600px] flex flex-col gap-4 justify-center">
          <div className="font-bold text-center text-lg">
            <div>로그인 정보가 만료되었습니다.</div>
            <div>다시 로그인 하시겠습니까?</div>
          </div>
          <div className="flex justify-evenly font-bold ">
            <button
              className="border-brand-color text-brand-color border-2 rounded-md px-4 py-1 transition duration-300 hover:bg-brand-color hover:text-white "
              onClick={() => {
                navigate('/login');
                removeCookie('loginState');
                setIsLogined(true);
              }}
            >
              로그인 하기
            </button>
            <button
              className="bg-brand-color text-white rounded-md px-4 py-1 transition duration-300 hover:bg-white hover:text-brand-color"
              onClick={() => {
                setCookie('loginState', 'Not Login');
                setIsLogined(true);
              }}
            >
              로그아웃 유지하기
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default LoginGuideModal;
