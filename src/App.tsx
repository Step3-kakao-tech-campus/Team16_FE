import './App.css';
import { RecoilRoot } from 'recoil';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DetailedPetPage from 'pages/DetailedPetPage';
import Home from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import SignupPage from 'pages/SignupPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<DetailedPetPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
