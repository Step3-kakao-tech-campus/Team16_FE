import './App.css';
import { RecoilRoot } from 'recoil';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DetailPetPage from 'pages/DetailPetPage';
import Home from 'pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginPage from 'pages/LoginPage';
import SignupPage from 'pages/SignupPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pet/:id" element={<DetailPetPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
