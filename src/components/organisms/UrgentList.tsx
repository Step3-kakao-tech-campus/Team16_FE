import VUrgentList, { ProfileListProps } from './VUrgentList';

const UrgentList = () => {
  // const [list, setlist] = useState([]);

  // useEffect(() => {
  //   fetch('public/data/profileHomeMock.json')
  //     .then((res) => res.json()) // javascript객체로 변환
  //     .then(setlist); // list에 저장
  // }, []);
  const profileListProps: ProfileListProps = {
    image: '/assets/pet.png',
    id: 1,
    name: '보리',
    age: 1,
    shelter: '광주보호소',
    state: '입양완료',
  };

  // JSX를 VAC로 교체

  return <VUrgentList {...profileListProps} />;
};
export default UrgentList;
