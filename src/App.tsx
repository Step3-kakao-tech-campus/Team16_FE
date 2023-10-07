import './App.css';
import { RecoilRoot } from 'recoil';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DetailPetPage from 'pages/DetailPetPage';
import Home from 'pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProfileListPage from 'pages/ProfileListPage';
import ShelterInfoPage from 'pages/ShelterInfoPage';
import UrgentListPage from 'pages/UrgentListPage';
import NewListPage from 'pages/NewListPage';
import LoginPage from 'pages/LoginPage';
import SignupPage from 'pages/SignupPage';
import RegisterPage from 'pages/RegisterPage';
import MapPage from 'pages/MapPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pet/:id" element={<DetailPetPage />} />
            <Route path="/profile" element={<ProfileListPage />} />
            <Route path="/shelter/:id" element={<ShelterInfoPage />} />
            <Route path="/profile/urgent/:page" element={<UrgentListPage />} />
            <Route path="/profile/new/:page" element={<NewListPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/find-shelter" element={<MapPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
