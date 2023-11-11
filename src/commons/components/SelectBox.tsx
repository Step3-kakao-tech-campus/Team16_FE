import { useRecoilState } from 'recoil';
import registerState from 'recoil/registerState';

const typeOptions = [
  { label: '개', value: 'DOG' },
  { label: '고양이', value: 'CAT' },
  { label: '기타', value: 'ETC' },
  // 기타 타입 추가
];
interface SelectProps {
  label: string;
  value: string;
}

const yearOptions: SelectProps[] = [];
for (let idx = 0; idx < 32; idx += 1) {
  yearOptions.push({ label: `${idx}`, value: `${idx}` });
}

const monthOptions: SelectProps[] = [];
for (let idx = 0; idx < 12; idx += 1) {
  monthOptions.push({ label: `${idx}`, value: `${idx}` });
}

export interface IdProps {
  id: number;
  label: string;
}
// 기타 타입 추가
const SelectBox = ({ id, label }: IdProps) => {
  const [selectedType, setSelectedType] = useRecoilState(registerState);

  const year = selectedType.age.substring(0, selectedType.age.indexOf('년'));
  const month = selectedType.age.substring(
    selectedType.age.indexOf('년') + 1,
    selectedType.age.indexOf('개'),
  );
  const handleChange = (value: string) => {
    if (label === '종🔸') {
      setSelectedType((prevType) => ({
        ...prevType,
        type: value,
      }));
    } else if (label === 'ㅤ') {
      setSelectedType((prevType) => ({
        ...prevType,
        age: `${year}년${value}개월`,
      }));
    } else {
      setSelectedType((prevType) => ({
        ...prevType,
        age: `${value}년${month}개월`,
      }));
    }
  };

  let code: SelectProps[];
  let key: string;
  switch (id) {
    case 1:
      key = year;
      code = yearOptions;
      break;
    case 2:
      key = month;
      code = monthOptions;
      break;
    default:
      key = selectedType.type;
      code = typeOptions;
  }
  return (
    <div className="justify-end">
      <h2 className="font-semibold mb-1">{label}</h2>
      <select
        className="border-2 rounded-md w-auto border-gray-300 h-10 mx-auto"
        name="type"
        value={key}
        onChange={(e) => handleChange(e.target.value)}
      >
        {code.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectBox;
