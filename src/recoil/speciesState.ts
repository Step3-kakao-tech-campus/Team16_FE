import { atom } from 'recoil';

export type SpeciesType = '강아지' | '고양이' | '기타';

const speciesState = atom<SpeciesType>({
  key: 'speciesState',
  default: '강아지',
});

export default speciesState;
