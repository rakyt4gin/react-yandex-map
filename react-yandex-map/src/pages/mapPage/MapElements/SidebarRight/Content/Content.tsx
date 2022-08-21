import { useEffect, useState } from 'react';
import { useCustomSelector } from '../../../../../customHooks/customHooks';
import styles from './Content.module.scss';
import ContentItem from './ContentItem/ContentItem';
import ContentLoader from './ContentLoader/ContentLoader';

const Content: React.FC = () => {
  const selector = useCustomSelector((state) => state.mapSlice);
  const [isContentLoading, setContentLoading] = useState(true);
  const sortData = [...selector.data].sort((a, b) => (a.title > b.title ? 1 : -1));

  useEffect(() => {
    if (selector.isSidebarRightShow) {
      setTimeout(() => {
        setContentLoading(false);
      }, 1000);
    }
    return () => {
      setContentLoading(true);
    };
  }, [selector.isSidebarRightShow]);

  return (
    <>
      {selector.isSidebarRightShow &&
        (isContentLoading ? (
          <ContentLoader />
        ) : (
          <>
            <div className={styles.content_title}>Элементы карты</div>
            <div className={styles.content}>
              {sortData.map((item) => {
                return <ContentItem key={JSON.stringify(item)} item={item} />;
              })}
            </div>
          </>
        ))}
    </>
  );
};

export default Content;
