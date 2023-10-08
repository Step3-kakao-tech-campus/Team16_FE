import VPagenation, { Props } from './VPagenation';

const Pagenation = (data: Props) => {
  return <VPagenation {...data} />;
};
// const navigate = useNavigate();

// export function navigatePet(id: number) {
//   return navigate('pet/$id');
// }

export default Pagenation;
