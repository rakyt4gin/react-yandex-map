import { YMaps, Map, Polyline, Placemark } from 'react-yandex-maps';
import Line from '../../Line/Line';

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
          zoom: 18,
        }}
        // onClick={() => clickOnMap()}
      >
        {obj.map((item) => {
          return <Line key={item.id} item={item} />;
        })}
      </Map>
    </YMaps>
  );
};

export default MapPage;
