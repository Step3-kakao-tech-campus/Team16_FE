import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import VHome, { HomeProps } from './VHome';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [shortForm, setShortForm] = useState<HomeProps | null>(null);

  const getShortForm = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URI}/short-forms/home?page=${currentPage}`,
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
    queryKey: ['home', currentPage],
    queryFn: getShortForm,
  });
  console.log(data);

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const pageData = {
        hasNext: data.hasNext,
      };

      const shortFormData = data.shortForms;
      const handleReachEnd = () => {
        if (pageData.hasNext) {
          setCurrentPage(currentPage + 1);
          console.log('마지막');
        }
      };

      const homeProps: HomeProps = {
        pageProps: pageData,
        shortFormProps: shortFormData,
        handleReachEnd,
      };

      setShortForm(homeProps);
    }
  }, [data, isLoading, isError]);

  if (isLoading) {
    return <div className=" justify-center">로딩중</div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  if (shortForm) {
    return <VHome {...shortForm} />;
  }

  return null;
};

export default Home;
