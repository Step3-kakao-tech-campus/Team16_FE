import { SignupGuideModalProps } from '../signupType';

const SignupGuideModal = ({ text, open, onClose }: SignupGuideModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <dialog open={open} className="border-2 rounded-xl w-[300px] h-[250px]">
      <div className="flex flex-col w-full h-full py-6 justify-around items-center">
        <div className="font-bold text-xl">{text}</div>
        <button
          onClick={onClose}
          className="text-white w-[100px] bg-brand-color px-4 py-1 rounded-lg"
        >
          확인
        </button>
      </div>
    </dialog>
  );
};

export default SignupGuideModal;
