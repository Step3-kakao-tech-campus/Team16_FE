import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import VUrgentList, { Props } from './VUrgentList';
import UrgentListSkeleton from './UrgentListSkeleton';

const UrgentList = () => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const navigate = useNavigate();
  // 페이지 변경 함수
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`/profile/urgent/${page}`);
  };

  const [urgentList, setUrgentList] = useState<Props | null>(null);

  const getProfiles = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URI}/pet/profiles/sos?page=${currentPage}`,
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
    queryKey: ['urgent-list', currentPage],
    queryFn: getProfiles,
  });

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const pageData = {
        currentPage: data.pageNumber, // 현재 페이지 상태를 전달
        lastPage: data.totalPages,
        maxLength: 7,
        setCurrentPage: handlePageChange,
      };

      const urgentListData = data.sosList;

      const urgentListProps: Props = {
        pageNationProps: pageData,
        profileListProps: urgentListData,
      };

      setUrgentList(urgentListProps);
    }
  }, [data, isLoading, isError]);

  if (isLoading) {
    return <UrgentListSkeleton />;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  if (urgentList) {
    return <VUrgentList {...urgentList} />;
  }

  return null;
};
export default UrgentList;
