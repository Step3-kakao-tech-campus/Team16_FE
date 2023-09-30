import { atom } from 'recoil';
import { SpeciesType } from 'commons/CategoryModal';

const speciesAtom = atom<SpeciesType>({
  key: 'speciesAtom',
  default: '강아지',
});

export default speciesAtom;
