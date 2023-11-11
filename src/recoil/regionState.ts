import { atom } from 'recoil';

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

const regionState = atom<RegionType>({
  key: 'regionState',
  default: '전국',
});

export default regionState;
