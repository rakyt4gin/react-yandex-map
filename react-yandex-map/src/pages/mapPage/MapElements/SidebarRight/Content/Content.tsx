import { useCustomSelector } from '../../../../../customHooks/customHooks';
import styles from './Content.module.scss';
import ContentItem from './ContentItem/ContentItem';

type uniqueArrayType = {
  id: string;
  title: string;
};

const Content: React.FC = () => {
  const selector = useCustomSelector((state) => state.mapSlice);

  return (
    <div className={styles.content}>
      {selector.data.map((item) => {
        return (
          <ContentItem
            selectedItemId={selector.idClickedElement}
            key={JSON.stringify(item)}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default Content;
