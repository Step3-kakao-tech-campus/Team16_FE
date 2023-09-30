import { atom } from 'recoil';
import { RegionType } from 'commons/CategoryModal';

const regionAtom = atom<RegionType>({
  key: 'regionAtom',
  default: '전국',
});

export default regionAtom;
