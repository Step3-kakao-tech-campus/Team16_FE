import React from 'react';
import ErrorBoundary from 'layouts/ErrorBoundary';
import EditProfileTemplate from './components/EditProfileTemplate';

const EditProfilePage = () => {
  return (
    <ErrorBoundary fallback={'Error...'}>
      <EditProfileTemplate />
    </ErrorBoundary>
  );
};

export default EditProfilePage;
