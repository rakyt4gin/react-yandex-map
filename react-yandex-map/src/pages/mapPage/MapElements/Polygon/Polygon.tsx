import { useEffect, useState } from 'react';
import { Polygon } from 'react-yandex-maps';
import { useCustomDispatch, useCustomSelector } from '../../../../customHooks/customHooks';
import { setElementClicked, toggleSidebar } from '../../../../store/mapSlice';
import styles from '../../../../assets/styles/styles';
import { dbType } from '../../../../store/db';

type Props = {
  item: dbType;
};

const PolygonElement: React.FC<Props> = (props) => {
  const [strokeColor, setStrokeColor] = useState(styles.grey);
  const [fillColor, setfillColor] = useState(styles.turquoise);
  const [isClick, setIsClick] = useState(false);
  const selector = useCustomSelector((state) => state.mapSlice);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    if (selector.idClickedElement !== props.item.id) {
      setfillColor(styles.turquoise);
    } else {
      setfillColor(styles.red);
    }
  });

  const clickOnElement = () => {
    setIsClick(true);
    // setStrokeColor(styles.red);
    setfillColor(styles.red);
    dispatch(setElementClicked(props.item.id));
    dispatch(toggleSidebar(true));
  };

  return (
    <Polygon
      id={props.item.id}
      onClick={() => clickOnElement()}
      geometry={props.item.geometry as number[][][]}
      interactivityModel="default#transparent"
      options={{
        strokeColor: strokeColor,
        fillColor: fillColor,
        strokeWidth: 2,
      }}
      properties={{
        hintContent: `<div style="padding:5px; font-size: 20px;">${props.item.hint}</div>`,
      }}
    />
  );
};

export default PolygonElement;
