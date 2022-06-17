import { YMaps, Map, Polyline, Placemark } from 'react-yandex-maps';
import Line from './MapElements/Line/Line';
import PlacemarkElement from './MapElements/Placemark/Placemark';

const obj = [
  {
    id: 1,
    geometry: [
      [53.897063, 27.539198],
      [53.900299, 27.546421],
      [53.905257, 27.553514],
    ],
  },
  {
    id: 2,
    geometry: [
      [53.905198, 27.553641],
      [53.902597, 27.556347],
    ],
  },
];

const placemarks = [
  {
    id: 3,
    geometry: [53.896473, 27.538041],
  },
];

const MapPage: React.FC = () => {
  return (
    <YMaps
      query={{
        ns: 'use-load-option',
        load: 'Map,Placemark,Polyline,geoObject.addon.hint',
      }}
    >
      <Map
        width="99vw"
        height="80vh"
        defaultState={{
          center: [53.897063, 27.539198],
          zoom: 16,
          behaviors: ['default'],
        }}
        options={{
          minZoom: 14,
          maxZoom: 16,
        }}
      >
        {obj.map((item) => {
          return <Line key={item.id} item={item} />;
        })}
        {placemarks.map((item) => {
          return <PlacemarkElement key={item.id} item={item} />;
        })}
      </Map>
    </YMaps>
  );
};

export default MapPage;
