import { atom } from 'recoil';

export type SpeciesType = '강아지' | '고양이' | '기타';

const speciesAtom = atom<SpeciesType>({
  key: 'speciesAtom',
  default: '강아지',
});

export default speciesAtom;
