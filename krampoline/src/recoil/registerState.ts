import { atom } from 'recoil';

export interface RegisterType {
  name: string;
  age: string; // 0년2개월 ("x년y개월")
  type: string; // DOG | CAT
  weight: number; // float 허용 6.52 (단위:kg)
  size: string; // String
  sex: string; // MALE | FEMALE
  vaccinationStatus: string; // String
  adoptionStatus: string; // YES | NO
  neutralizationStatus: string; // YES | NO | UNKNOWN
  protectionExpirationDate: string; // 보호만료일 null 가능 2023-10-25
  description: string; // String
  polygonProfile: {
    // 1 ~ 5 정수
    intelligence: number; // "영리함 점수"
    affinity: number; // "친화력 점수",
    athletic: number; // "운동신경 점수",
    adaptability: number; // "적응력 점수",
    activeness: number; // "활발함 점수"
  };
  isComplete: boolean;
}

const registerState = atom<RegisterType>({
  key: 'registerState',
  default: {
    name: '',
    age: '0년0개월',
    type: 'DOG',
    weight: 0,
    size: '',
    sex: '',
    vaccinationStatus: '',
    adoptionStatus: '',
    neutralizationStatus: '',
    protectionExpirationDate: '',
    description: '',
    polygonProfile: {
      intelligence: 1,
      affinity: 1,
      athletic: 1,
      adaptability: 1,
      activeness: 1,
    },
    isComplete: false,
  },
});

export default registerState;
