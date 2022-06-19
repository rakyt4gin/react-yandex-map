import { useEffect, useState } from 'react';
import { Polyline } from 'react-yandex-maps';
import { useCustomDispatch, useCustomSelector } from '../../../../customHooks/customHooks';
import { setElementClicked, toggleSidebar } from '../../../../store/mapSlice';
import styles from '../../../../assets/styles/styles';
import { dbType } from '../../../../store/db';

type Props = {
  item: dbType;
};

const Line: React.FC<Props> = (props) => {
  const [strokeColor, setStrokeColor] = useState(styles.grey);
  const [isClick, setIsClick] = useState(false);
  const selector = useCustomSelector((state) => state.mapSlice);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    if (selector.idClickedElement !== props.item.id) {
      setStrokeColor(styles.grey);
    } else {
      setStrokeColor(styles.red);
    }
  });

  const clickOnElement = () => {
    setIsClick(true);
    setStrokeColor(styles.red);
    dispatch(setElementClicked(props.item.id));
    dispatch(toggleSidebar(true));
  };

  return (
    <Polyline
      id={props.item.id}
      onMousemove={() => setStrokeColor(styles.red)}
      onClick={() => clickOnElement()}
      onMouseleave={() => !isClick && setStrokeColor(styles.grey)}
      geometry={props.item.geometry as number[][]}
      options={{
        strokeColor: strokeColor,
        strokeWidth: 8,
      }}
      properties={{
        hintContent: `<div style="padding:5px; font-size: 20px;">${props.item.hint}</div>`,
      }}
    />
  );
};

export default Line;
