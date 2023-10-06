import { atom } from 'recoil';

export type SpeciesType = '강아지' | '고양이' | '기타' | '전체';

const speciesState = atom<SpeciesType>({
  key: 'speciesState',
  default: '전체',
});

export default speciesState;
