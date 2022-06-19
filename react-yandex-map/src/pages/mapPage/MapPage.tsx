import { useEffect, useRef, useState } from 'react';
import { YMaps, Map, Polyline, Placemark } from 'react-yandex-maps';
import { useCustomDispatch, useCustomSelector } from '../../customHooks/customHooks';
import { setCenter } from '../../store/mapSlice';
import Line from './MapElements/Line/Line';
import PlacemarkElement from './MapElements/Placemark/Placemark';
import Sidebar from './MapElements/Sidebar/Sidebar';
import './Map.scss';
import Header from './Header/Header';
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
  const selector = useCustomSelector((state) => state.mapSlice);
  const dispatch = useCustomDispatch();

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
          {selector.data.map((item) => {
            return <Line key={item.id} item={item} />;
          })}
          {/* {obj.map((item) => {
            return <Line key={item.id} item={item} />;
          })} */}
          {placemarks.map((item) => {
            return <PlacemarkElement key={item.id} item={item} />;
          })}
        </Map>
      </YMaps>
    </>
  );
};

export default MapPage;
