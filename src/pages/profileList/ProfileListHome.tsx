import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import VProfileListHome, { ProfileListProps } from './VProfileListHome';
import ProfileListHomeSkeleton from './ProfileListHomeSkeleton';

const ProfileListHome = () => {
  const [profileListProps, setProfileListProps] =
    useState<ProfileListProps | null>(null);

  const getProfiles = async () => {
    const response = await fetch(`${process.env.REACT_APP_URI}/pet/profiles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    return json.response;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['pet-list'],
    queryFn: getProfiles,
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
