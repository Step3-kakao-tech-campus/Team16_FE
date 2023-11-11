import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useFetch from 'commons/apis/useFetch';
import { Profiles } from '../profileListType';
import VProfileListHome from './VProfileListHome';
import ProfileListSkeleton from '../components/ProfileListSkeleton';

const ProfileListHome = () => {
  const [profileListProps, setProfileListProps] = useState<Profiles | null>(
    null,
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ['pet-list'],
    queryFn: () => useFetch('/pet/profiles'),
  });

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const sosListData = data.sosList;

      const newListData = data.newList;

      const updatedProfileListProps: Profiles = {
        sosProps: sosListData,
        newProps: newListData,
      };

      setProfileListProps(updatedProfileListProps);
    }
  }, [data, isLoading, isError]);

  if (isLoading) {
    return <ProfileListSkeleton prop="home" />;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  if (profileListProps) {
    return <VProfileListHome {...profileListProps} />;
  }

  return null;
};

export default ProfileListHome;
