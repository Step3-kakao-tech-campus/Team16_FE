import './App.css';
import { RecoilRoot } from 'recoil';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchOnMount: false },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pet/:id" element={<DetailPetPage />} />
            <Route path="/profile" element={<ProfileListPage />} />
            <Route path="/shelter/:id/:page" element={<ShelterInfoPage />} />
            <Route path="/profile/urgent/:page" element={<UrgentListPage />} />
            <Route path="/profile/new/:page" element={<NewListPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/find-shelter" element={<MapPage />} />
            <Route path="/pet-update/:id" element={<UpdatePage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
