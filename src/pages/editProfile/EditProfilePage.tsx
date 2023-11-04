import { useQuery } from '@tanstack/react-query';
import Banner from 'commons/Banner';
import InputGroup from 'commons/InputGroup';
import GNB from 'layouts/GNB';
import AddressInputGroup from 'pages/signUp/AddressInputGroup';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const EditProfilePage = () => {
  const params = useParams();
  const shelterId = params.id;
  const [editEmailCheck, setEditEmailCheck] = useState<boolean>(false);
  const [editPasswordCheck, setEditPasswordCheck] = useState<boolean>(false);

  // 백엔드에 api 문의 필요
  const getProfileInfo = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URI}/shelter/${shelterId}`,
    );
  };
  const { data } = useQuery({
    queryKey: ['editProfile', shelterId],
    queryFn: () => {},
  });

  return (
    <div>
      <GNB />
      <div
        className="flex flex-col justify-center items-center gap-4 min-h-screen"
        style={{
          backgroundImage: 'url(assets/images/backgroundImage.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col gap-2">
          <Banner className="font-semibold text-2xl">
            My 보호소 정보 수정
          </Banner>
        </div>
        <form
          className="flex flex-col gap-3 w-full max-w-[400px] px-2"
          onSubmit={() => {}}
        >
          <div className="email-confirm flex place-items-end justify-center">
            <InputGroup
              id="email"
              name="이메일"
              type="text"
              placeholder="이메일을 입력해주세요."
              onChange={() => {}}
              autocomplete="off"
            />
            <button
              type="button" // type을 버튼으로 지정해주면 handleSubmit이 작동하지 않음 -> onClick만 동작
              className="bg-brand-color text-white rounded min-w-[100px] min-h-[44px]"
              onClick={() => {}}
            >
              중복 확인
            </button>
          </div>
          <InputGroup
            id="password"
            name="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={() => {}}
            autocomplete="off"
          />

          <InputGroup
            id="password-confirm"
            name="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요."
            onChange={() => {}}
            autocomplete="off"
          />

          <InputGroup
            id="shelter"
            name="보호소 이름"
            type="text"
            placeholder="보호소 이름을 입력해주세요."
            onChange={() => {}}
            autocomplete="off"
          />

          <InputGroup
            id="shelter-contact"
            name="보호소 연락처"
            type="text"
            placeholder="보호소에 연락 가능한 연락처를 입력해주세요."
            onChange={() => {}}
            autocomplete="off"
          />

          <AddressInputGroup />
          <button className="bg-brand-color text-white w-full rounded-md p-2">
            {'isLoading' ? (
              // false -> isLoading으로 넣기
              <ClipLoader size={20} color="#fff" loading={false} />
            ) : (
              '회원가입'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
