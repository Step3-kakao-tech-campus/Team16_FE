import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import VNewList, { PageNationProps, Props } from './VNewList';
import { ProfileListProps } from '../VProfileListHome';

const NewList = () => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const navigate = useNavigate();
  // 페이지 변경 함수
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`/profile/urgent/${page}`);
  };
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
  const pageNationProps: PageNationProps = {
    currentPage, // 현재 페이지 상태를 전달
    lastPage: 10,
    maxLength: 7,
    setCurrentPage: handlePageChange, // 페이지 변경 함수를 전달
  };

  const props: Props = {
    pageNationProps,
    profileListProps,
  };
  // JSX를 VAC로 교체

  return <VNewList {...props} />;
};
export default NewList;
