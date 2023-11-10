import Banner from 'commons/Banner';
import InputGroup from 'commons/InputGroup';
import { ClipLoader } from 'react-spinners';
import { shelterSignupState } from 'recoil/shelterState';
import { useRecoilValue } from 'recoil';
import EditProfilePageSkeleton from './components/EditProfilePageSkeleton';
import EditAddressInputGroup from './components/EditAddressInputGroup';
import { VEditProfileProps } from './editProfileType';

const VEditProfilePage = ({
  getLoading,
  postloading,
  handleSubmit,
}: VEditProfileProps) => {
  const shelterInfo = useRecoilValue(shelterSignupState);

  return (
    <div className="h-full">
      {getLoading ? (
        <EditProfilePageSkeleton />
      ) : (
        <div
          className="flex flex-col justify-center items-center gap-10 min-h-[80vh]"
          style={{
            backgroundImage: 'url(assets/images/backgroundImage.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Banner className="font-semibold text-2xl mb-4">
            My 보호소 정보 수정
          </Banner>

          <form
            className="flex flex-col gap-6 w-full max-w-[400px] px-2"
            onSubmit={handleSubmit}
          >
            <InputGroup
              id="shelter"
              name="보호소 이름"
              type="text"
              placeholder="보호소 이름을 입력해주세요."
              autocomplete="off"
              defaultValue={shelterInfo.name}
            />
            <InputGroup
              id="shelter-contact"
              name="보호소 연락처"
              type="text"
              placeholder="보호소에 연락 가능한 연락처를 입력해주세요."
              autocomplete="off"
              defaultValue={shelterInfo.contact}
            />
            <EditAddressInputGroup />
            <button className="bg-brand-color text-white w-full rounded-md p-2">
              {postloading ? (
                <ClipLoader size={20} color="#fff" loading={postloading} />
              ) : (
                '정보 수정하기'
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default VEditProfilePage;
