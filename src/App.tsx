import './App.css';
import { RecoilRoot } from 'recoil';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DetailPetPage from 'pages/detailPet/DetailPetPage';
import ProfileListPage from 'pages/profileList/ProfileListPage';
import LoginPage from 'pages/login/LoginPage';
import MapPage from 'pages/map/MapPage';
import NewListPage from 'pages/profileList/newList/NewListPage';
import RegisterPage from 'pages/register/RegisterPage';
import ShelterInfoPage from 'pages/shelterInfo/ShelterInfoPage';
import SignupPage from 'pages/signUp/SignupPage';
import UrgentListPage from 'pages/profileList/urgentList/UrgentListPage';
import UpdatePage from 'pages/update/UpdatePage';
import HomePage from 'pages/home/HomePage';
import ValidateCheckLayout from 'layouts/ValidateCheckLayout';
import EditProfilePage from 'pages/editProfile/EditProfilePage';
import GNB from 'layouts/GNB';
import NotFound from 'pages/notFound/NotFound';
import ErrorBoundary from 'commons/ErrorBoundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchOnMount: false },
  },
});

const router = createBrowserRouter([
  {
    element: <GNB />,
    children: [
      {
        element: <ValidateCheckLayout />,

        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/pet/:id',
            element: <DetailPetPage />,
          },
          {
            path: '/profile',
            element: <ProfileListPage />,
          },
          {
            path: '/shelter/:id/:page',
            element: <ShelterInfoPage />,
          },
          {
            path: '/profile/urgent/:page',
            element: <UrgentListPage />,
          },
          {
            path: '/profile/new/:page',
            element: <NewListPage />,
          },
          {
            path: '/register',
            element: <RegisterPage />,
          },
          {
            path: '/find-shelter',
            element: <MapPage />,
          },
          {
            path: '/pet-update/:id',
            element: <UpdatePage />,
          },
          {
            path: '/shelter/:id/edit',
            element: <EditProfilePage />,
          },
          {
            path: '*',
            element: <NotFound />,
          },
        ],
      },
    ],
  },
  {
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
