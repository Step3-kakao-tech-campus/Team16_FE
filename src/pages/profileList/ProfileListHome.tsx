import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import VProfileListHome, { ProfileListProps } from './VProfileListHome';
import ProfileListHomeSkeleton from './ProfileListHomeSkeleton';
import getPetProfiles from './api/PetApi';

const ProfileListHome = () => {
  const [profileListProps, setProfileListProps] =
    useState<ProfileListProps | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['pet-list'],
    queryFn: getPetProfiles,
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
