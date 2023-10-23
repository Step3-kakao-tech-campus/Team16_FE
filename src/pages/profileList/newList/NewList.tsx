import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import VNewList, { Props } from './VNewList';
import NewListSkeleton from './NewListSkeleton';

const NewList = () => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const navigate = useNavigate();
  // 페이지 변경 함수
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`/profile/new/${page}`);
  };

  const [newList, setNewList] = useState<Props | null>(null);

  const getProfiles = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URI}/pet/profiles/new?page=${currentPage}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    return json.response;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['new-list', currentPage],
    queryFn: getProfiles,
  });

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const pageData = {
        currentPage, // 현재 페이지 상태를 전달
        lastPage: data.totalPages,
        maxLength: 7,
        setCurrentPage: handlePageChange,
      };

      const newListData = data.newList;

      const newListProps: Props = {
        pageNationProps: pageData,
        profileListProps: newListData,
      };

      setNewList(newListProps);
    }
  }, [data, isLoading, isError]);

  if (isLoading) {
    return <NewListSkeleton />;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  if (newList) {
    return <VNewList {...newList} />;
  }

  return null;
};

export default NewList;
