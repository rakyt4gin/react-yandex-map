import { useEffect, useState } from 'react';
import { Polyline } from 'react-yandex-maps';
import { useCustomDispatch, useCustomSelector } from '../../../../customHooks/customHooks';
import { setElementClicked } from '../../../../store/mapSlice';
import styles from '../../../../assets/styles/styles';

const Line: React.FC<any> = (props: any) => {
  const [strokeColor, setStrokeColor] = useState(styles.grey);
  const [isClick, setIsClick] = useState(false);
  const selector = useCustomSelector((state) => state.mapSlice);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    if (selector.idClickedElement !== props.item.id) {
      setStrokeColor(styles.grey);
    }
  });

  const clickOnElement = () => {
    setIsClick(true);
    setStrokeColor(styles.red);
    dispatch(setElementClicked(props.item.id));
  };

  return (
    <Polyline
      id={props.item.id}
      onMousemove={() => setStrokeColor(styles.red)}
      onClick={() => clickOnElement()}
      onMouseleave={() => !isClick && setStrokeColor(styles.grey)}
      geometry={props.item.geometry}
      options={{
        strokeColor: strokeColor,
        strokeWidth: 8,
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
