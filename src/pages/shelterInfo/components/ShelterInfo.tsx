import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useFetch from 'commons/apis/useFetch';
import VShelterInfo, { ShelterInfoPageProps } from './VShelterInfo';
import ShelterInfoSkeleton from './ShelterInfoSkeleton';

const ShelterInfo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const params = useParams();
  const shelterId = params.id;

  const [profiles, setProfiles] = useState<ShelterInfoPageProps | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['page', currentPage],
    queryFn: () => useFetch(`/shelter/${shelterId}?page=${currentPage}`),
  });

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const shelterInfoData = {
        name: data.shelter.name,
        id: data.shelter.id,
        adress: `${data.shelter.address.province} ${data.shelter.address.city} ${data.shelter.address.roadName} ${data.shelter.address.detail} `,
        call: data.shelter.contact,
      };
      const handlePageChange = (page: number) => {
        setCurrentPage(page);
        navigate(`/shelter/${shelterInfoData.id}/${page}`);
      };
      const pageData = {
        currentPage, // 현재 페이지 상태를 전달
        lastPage: data.petList.totalPages,
        maxLength: 7,
        setCurrentPage: handlePageChange,
      };
      const profileListData = data.petList.pets;

      const props: ShelterInfoPageProps = {
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
