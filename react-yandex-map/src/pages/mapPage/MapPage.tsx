import { YMaps, Map, Polyline, Placemark, Clusterer } from 'react-yandex-maps';
import { useCustomDispatch, useCustomSelector } from '../../customHooks/customHooks';
import { setCenter, setZoom } from '../../store/mapSlice';
import Line from './MapElements/Line/Line';
import PlacemarkElement from './MapElements/Placemark/Placemark';
import './Map.scss';
import Header from './Header/Header';
import { useEffect, useRef, useState } from 'react';
import Polygon from './MapElements/Polygon/Polygon';
import SidebarLeft from './MapElements/SidebarLeft/SidebarLeft';
import SidebarRight from './MapElements/SidebarRight/SidebarRight';
import AboutPage from '../about/about';

const MapPage: React.FC = () => {
  const [Ref, setRef] = useState<any>(null);
  const selector = useCustomSelector((state) => state.mapSlice);
  const dispatch = useCustomDispatch();
  const lines = selector.data.filter((item) => item.type === 'road');
  const places = selector.data.filter((item) => item.type === 'place');
  const areas = selector.data.filter((item) => item.type === 'area');

  useEffect(() => {
    sessionStorage.setItem('isHelp', 'true');
  });

  useEffect(() => {
    return () => {
      Ref &&
        (() => {
          dispatch(setCenter(Ref.getCenter() as number[]));
          dispatch(setZoom(Ref.getZoom() as number));
        })();
    };
  }, [Ref]);

  return (
    <>
      <Header />
      <SidebarLeft />
      <SidebarRight />
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
            zoom: selector.zoom,
          }}
          instanceRef={(ref: any) => {
            ref && setRef(ref);
          }}
          options={{
            minZoom: 14,
            maxZoom: 120,
          }}
        >
          {lines.map((item) => {
            return <Line key={JSON.stringify(item)} item={item} />;
          })}
          {areas.map((item) => {
            return <Polygon key={JSON.stringify(item)} item={item} />;
          })}
          <Clusterer
            options={{
              preset: 'islands#invertedBlueClusterIcons',
              groupByCoordinates: false,
            }}
          >
            {places.map((item) => {
              return <PlacemarkElement key={item.id} item={item} />;
            })}
          </Clusterer>
        </Map>
      </YMaps>
    </>
  );
};

export default MapPage;
