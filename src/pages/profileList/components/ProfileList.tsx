import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useFetch from 'commons/apis/useFetch';
import { ProfileListProps } from '../profileListType';
import ProfileListSkeleton from './ProfileListSkeleton';
import VProfileList from './VProfileList';

const ProfileList = (prop: { prop: string }) => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const navigate = useNavigate();
  // 페이지 변경 함수
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`/profile/${prop.prop}/${page}`);
  };
  const word = prop.prop === 'urgent' ? 'sos' : prop.prop;

  const [list, setList] = useState<ProfileListProps | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['list', currentPage],
    queryFn: () => useFetch(`/pet/profiles/${word}?page=${currentPage}`),
  });

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const pageData = {
        currentPage: data.pageNumber, // 현재 페이지 상태를 전달
        lastPage: data.totalPages,
        maxLength: 7,
        setCurrentPage: handlePageChange,
      };

      const listData = data.sosList ? data.sosList : data.newList;

      const listProps: ProfileListProps = {
        pageProps: pageData,
        listProps: listData,
      };

      setList(listProps);
    }
  }, [data, isLoading, isError]);

  if (isLoading) {
    return <ProfileListSkeleton prop={prop.prop} />;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  if (list) {
    const title =
      prop.prop === 'urgent' ? '긴급 도움이 필요해요' : '신규 애니모리 친구들';
    return <VProfileList profileProps={list} title={title} />;
  }

  return null;
};
export default ProfileList;
