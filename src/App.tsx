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
            <Route path="/shelter" element={<ShelterInfoPage />} />
            <Route path="/profile/urgent/:page" element={<UrgentListPage />} />
            <Route path="/profile/new/:page" element={<NewListPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
