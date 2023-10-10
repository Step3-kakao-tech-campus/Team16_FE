import { useRecoilState } from 'recoil';
import registerState from 'recoil/registerState';

const typeOptions = [
  { label: '개', value: 'DOG' },
  { label: '고양이', value: 'CAT' },
  { label: '기타', value: 'ETC' },
  // 기타 타입 추가
];

const SelectBox = () => {
  const [selectedType, setSelectedType] = useRecoilState(registerState);

  const handleTypeChange = (value: string) => {
    setSelectedType((prevType) => ({
      ...prevType,
      type: value,
    }));
  };

  return (
    <div>
      <h2 className="font-semibold mb-1">종</h2>
      <select
        className="border-2 rounded-md border-gray-300 h-10"
        name="type"
        value={selectedType.type}
        onChange={(e) => handleTypeChange(e.target.value)}
      >
        {typeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectBox;
