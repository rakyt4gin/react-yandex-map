import { YMaps, Map, Polyline, Placemark } from 'react-yandex-maps';
import { useCustomDispatch, useCustomSelector } from '../../customHooks/customHooks';
import { setCenter } from '../../store/mapSlice';
import Line from './MapElements/Line/Line';
import PlacemarkElement from './MapElements/Placemark/Placemark';
import Sidebar from './MapElements/Sidebar/Sidebar';
import './Map.scss';
import Header from './Header/Header';

const MapPage: React.FC = () => {
  const selector = useCustomSelector((state) => state.mapSlice);
  const dispatch = useCustomDispatch();
  const lines = selector.data.filter((item) => item.type === 'road');
  const places = selector.data.filter((item) => item.type === 'place');

  return (
    <>
      <Header />
      <Sidebar />
      <YMaps
        query={{
          ns: 'use-load-option',
          load: 'Map,Placemark,Polyline,geoObject.addon.hint',
          apikey: '4eac92f5-31d4-47bc-92f7-627863dc7410',
        }}
      >
        <Map
          className="map"
          state={{
            center: selector.center,
            zoom: 16,
          }}
          instanceRef={(ref: any) => {
            ref &&
              ref.events.add('boundschange', () => {
                dispatch(setCenter(ref.getCenter() as number[]));
              });
          }}
          options={{
            minZoom: 15,
            maxZoom: 16,
          }}
        >
          {lines.map((item) => {
            return <Line key={item.id} item={item} />;
          })}
          {places.map((item) => {
            return <PlacemarkElement key={item.id} item={item} />;
          })}
        </Map>
      </YMaps>
    </>
  );
};

export default MapPage;
