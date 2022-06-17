import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/startPage/StartPage';
import MapPage from './pages/mapPage/MapPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
