import VShelterInfo, {
  ProfileListProps,
  Props,
  ShelterInfoProps,
} from './VShelterInfo';

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
  const profileListProps: ProfileListProps = {
    image: '/assets/pet.png',
    id: 1,
    name: '보리',
    age: 1,
    shelter: '광주보호소',
    state: '입양완료',
  };

  const props: Props = {
    shelterInfoProps,
    profileListProps,
  };

  // JSX를 VAC로 교체
  return <VShelterInfo {...props} />;
};
export default ShelterInfo;
