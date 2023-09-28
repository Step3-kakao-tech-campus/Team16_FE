import VShelterInfo, { ShelterInfoProps } from './VShelterInfo';

const ShelterInfo = () => {
  //   const [sosList, setSosList] = useState([]);

  //   useEffect(() => {
  //     fetch('public/data/profileHomeMock.json')
  //       .then((res) => res.json()) // javascript객체로 변환
  //       .then(setSosList); // list에 저장
  //   }, []);
  const shelterInfoProps: ShelterInfoProps = {
    name: '광주광역시보호소',
    id: 1,
    adress: '광주광역시 어디구 어디로',
    call: '010-3916-5330',
  };

  // JSX를 VAC로 교체
  return <VShelterInfo {...shelterInfoProps} />;
};
export default ShelterInfo;
