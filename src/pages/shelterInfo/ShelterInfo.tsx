import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import VShelterInfo, { Props } from './VShelterInfo';
import ShelterInfoSkeleton from './ShelterInfoSkeleton';

const ShelterInfo = () => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const navigate = useNavigate();
  const params = useParams();
  const shelterId = params.id;

  const [profiles, setProfiles] = useState<Props | null>(null);

  const getShelter = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URI}/shelter/${shelterId}?page=${currentPage}`,
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
    queryKey: ['page', currentPage],
    queryFn: getShelter,
  });
  console.log(data);

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const shelterInfoData = {
        name: data.shelter.name,
        id: data.shelter.id,
        adress: data.shelter.adress,
        call: data.shelter.contact,
      };
      const handlePageChange = (page: number) => {
        setCurrentPage(page);
        navigate(`/shelter/${shelterInfoData.id}/${page}`);
      };
      const pageData = {
        currentPage, // 현재 페이지 상태를 전달
        lastPage: data.totalPages,
        maxLength: 7,
        setCurrentPage: handlePageChange,
      };
      const profileListData = {
        id: data.petList.pets.id,
        name: data.petList.pets.name,
        adoptionStatus: data.petList.pets.adoptionStatus,
      };

      const props: Props = {
        shelterInfoProps: shelterInfoData,
        pageNationProps: pageData,
        profileProps: profileListData,
      };

      setProfiles(props);
    }
  }, [data, isLoading, isError]);

  if (isLoading) {
    return <ShelterInfoSkeleton />;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  if (profiles) {
    return <VShelterInfo {...profiles} />;
  }

  return null;
};

export default ShelterInfo;
