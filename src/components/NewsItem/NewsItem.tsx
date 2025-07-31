import React from 'react';
import styles from './NewsItem.module.css';

interface NewsItemProps {
  label: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ label }) => {
  return (
    <div className={styles.news_item}>
      <h3 className={styles.news_title}>{label}</h3>
          <img className={styles.news_thumbnail} src="/img/jpg/his10.jpg" alt="" />
          <h4 className={styles.news_item_title}>Заголовок статьи</h4>
          <p className={styles.news_description}>
           Читать целиком ...
          </p>
        </div>
      );
};

export default NewsItem;
