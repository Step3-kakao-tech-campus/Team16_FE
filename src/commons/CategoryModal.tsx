export interface CategoryModalProps {
  handleModalCloseClick: () => void;
  handleModalOutsideClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  setSelectedRegion: (region: RegionType) => void;
  speciesOrRegion: CategoryModalType;
  setSpeciesOrRegion: (speciesOrRegion: CategoryModalType) => void;
}

export type RegionType =
  | '서울'
  | '경기'
  | '인천'
  | '강원'
  | '충북'
  | '충남'
  | '대전'
  | '경북'
  | '경남'
  | '대구'
  | '울산'
  | '부산'
  | '전북'
  | '전남'
  | '광주'
  | '제주'
  | '세종'
  | '전국';
export type CategoryModalType = 'species' | 'region';

const CategoryModal = ({
  handleModalCloseClick,
  handleModalOutsideClick,
  setSelectedRegion,
  speciesOrRegion,
  setSpeciesOrRegion,
}: CategoryModalProps) => {
  return (
    <div
      onClick={handleModalOutsideClick}
      className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50"
    >
      <div className="flex flex-col w-4/5 p-10 pt-5 fixed bg-white rounded-md">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <button
              className={`${
                speciesOrRegion === 'species' &&
                'object-contain border-b-2 border-yellow-600 font-bold text-yellow-600'
              }`}
              onClick={() => setSpeciesOrRegion('species')}
            >
              종류
            </button>
            <button
              className={`${
                speciesOrRegion === 'region' &&
                'object-contain border-b-2 border-yellow-600 font-bold text-yellow-600'
              }`}
              onClick={() => setSpeciesOrRegion('region')}
            >
              지역
            </button>
          </div>
          <button onClick={handleModalCloseClick} className="text-2xl">
            X
          </button>
        </div>
        {speciesOrRegion === 'species' ? (
          // 배열에 담아서 map으로 뿌려주기 1
          // 종류 선택하면 지역 선택으로 넘어가기
          <div className="flex flex-col">
            <button>강아지</button>
            <button>고양이</button>
            <button>기타</button>
          </div>
        ) : (
          // 배열에 담아서 map으로 뿌려주기 2
          // 지역까지 선택하고나면 모달 끄기
          // useState로 관리하지 말고 recoil로 관리해야 할 듯
          <div className="flex flex-col">
            <button onClick={() => setSelectedRegion('전국')}>전국</button>
            <button onClick={() => setSelectedRegion('서울')}>서울</button>
            <button onClick={() => setSelectedRegion('경기')}>경기</button>
            <button onClick={() => setSelectedRegion('인천')}>인천</button>
            <button onClick={() => setSelectedRegion('강원')}>강원</button>
            <button onClick={() => setSelectedRegion('충북')}>충북</button>
            <button onClick={() => setSelectedRegion('충남')}>충남</button>
            <button onClick={() => setSelectedRegion('대전')}>대전</button>
            <button onClick={() => setSelectedRegion('경북')}>경북</button>
            <button onClick={() => setSelectedRegion('경남')}>경남</button>
            <button onClick={() => setSelectedRegion('대구')}>대구</button>
            <button onClick={() => setSelectedRegion('울산')}>울산</button>
            <button onClick={() => setSelectedRegion('부산')}>부산</button>
            <button onClick={() => setSelectedRegion('전북')}>전북</button>
            <button onClick={() => setSelectedRegion('전남')}>전남</button>
            <button onClick={() => setSelectedRegion('광주')}>광주</button>
            <button onClick={() => setSelectedRegion('제주')}>제주</button>
            <button onClick={() => setSelectedRegion('세종')}>세종</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryModal;
