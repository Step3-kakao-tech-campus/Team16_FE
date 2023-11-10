import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useFetch from 'commons/apis/useFetch';
import VProfileListHome from './VProfileListHome';
import ProfileListHomeSkeleton from './ProfileListHomeSkeleton';
import { ProfileListProps } from '../profileListType';

const ProfileListHome = () => {
  const [profileListProps, setProfileListProps] =
    useState<ProfileListProps | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['pet-list'],
    queryFn: () => useFetch('/pet/profiles'),
  });

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const sosListData = data.sosList;

      const newListData = data.newList;

      const updatedProfileListProps: ProfileListProps = {
        sosListProps: sosListData,
        newListProps: newListData,
      };

      setProfileListProps(updatedProfileListProps);
    }
  }, [data, isLoading, isError]);

  if (isLoading) {
    return <ProfileListHomeSkeleton />;
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
