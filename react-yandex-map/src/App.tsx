import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css';
import StartPage from './pages/startPage/StartPage';
import MapPage from './pages/mapPage/MapPage';
import { dbType, useGetMapObjectsQuery } from './store/apiSlice';
import AboutPage from './pages/about/about';
import Help from './pages/help/help';

const transformData = (data: dbType[]) => {
  return data.map((item) => {
    const imgLength = item.images?.split(',').length;
    return {
      ...item,
      geometry: JSON.parse(item.geometry),
      images: imgLength && item.images?.split(',').slice(0, imgLength - 1),
    };
  });
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
