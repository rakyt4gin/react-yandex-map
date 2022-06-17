import { useEffect, useState } from 'react';
import { Polyline } from 'react-yandex-maps';
import { useCustomDispatch, useCustomSelector } from '../customHooks/customHooks';
import { setElementClicked } from '../store/mapSlice';

const Line: React.FC<any> = (props: any) => {
  const [strokeWidth, setStrokeWidth] = useState(8);
  const [isClick, setIsClick] = useState(false);
  const selector = useCustomSelector((state) => state.mapSlice);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    if (selector.idClickedElement !== props.item.id) {
      setStrokeWidth(8);
    }
  });

  const clickOnElement = () => {
    setStrokeWidth(20);
    setIsClick(true);
    dispatch(setElementClicked(props.item.id));
  };

  return (
    <Polyline
      id={props.item.id}
      onMousemove={() => setStrokeWidth(20)}
      onClick={() => clickOnElement()}
      onMouseleave={() => !isClick && setStrokeWidth(8)}
      geometry={props.item.geometry}
      inBlur={() => setStrokeWidth(8)}
      options={{
        strokeColor: '#000',
        strokeWidth: strokeWidth,
        strokeOpacity: 0.5,
      }}
      properties={{
        balloonContentHeader: 'Балун метки',
        balloonContentBody: 'Содержимое <em>балуна</em> метки',
        balloonContentFooter: 'Подвал',
        hintContent: '<div style="padding:5px; font-size: 20px;">Хинт метки</div>',
      }}
    />
  );
};

export default Line;
