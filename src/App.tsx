import './App.css';
import { RecoilRoot } from 'recoil';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DetailPetPage from 'pages/DetailPetPage';
import Home from 'pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pet/:id" element={<DetailPetPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
