import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import CarDetail from './pages/CarDetail';
import Wishlist from './pages/Wishlist';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
}
