import './App.css';
import { RecoilRoot } from 'recoil';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
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
import ValidateCheckLayout from 'layouts/ValidateCheckLayout';
import EditProfilePage from 'pages/editProfile/EditProfilePage';
import GNB from 'layouts/GNB';
import NotFound from 'pages/notFound/NotFound';
import HomePage from 'pages/home/HomePage';
import UpdatePage from 'pages/update/UpdatePage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchOnMount: false },
  },
});

const routes = [
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
            lazy: () => import('pages/detailPet/DetailPetPage'),
            element: <DetailPetPage />,
          },
          {
            path: '/profile',
            lazy: () => import('pages/profileList/ProfileListPage'),
            element: <ProfileListPage />,
          },
          {
            path: '/shelter/:id/:page',
            lazy: () => import('pages/shelterInfo/ShelterInfoPage'),
            element: <ShelterInfoPage />,
          },
          {
            path: '/profile/urgent/:page',
            lazy: () => import('pages/profileList/urgentList/UrgentListPage'),
            element: <UrgentListPage />,
          },
          {
            path: '/profile/new/:page',
            lazy: () => import('pages/profileList/newList/NewListPage'),
            element: <NewListPage />,
          },
          {
            path: '/register',
            lazy: () => import('pages/register/RegisterPage'),
            element: <RegisterPage />,
          },
          {
            path: '/find-shelter',
            lazy: () => import('pages/map/MapPage'),
            element: <MapPage />,
          },
          {
            path: '/pet-update/:id',
            lazy: () => import('pages/update/UpdatePage'),
            element: <UpdatePage />,
          },
          {
            path: '/shelter/:id/edit',
            lazy: () => import('pages/home/HomePage'),
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
];

const router = createBrowserRouter(routes as RouteObject[]);

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
