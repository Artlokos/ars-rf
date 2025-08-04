// features/news/NewsFeed.tsx
import { useSelector, useDispatch } from 'react-redux';
import { deleteNews } from './newsSlice';
import type { RootState } from '../../store/store';

const NewsFeed = () => {
  const news = useSelector((state: RootState) => state.news.items);
  const dispatch = useDispatch();

  return (
    <div className="news-feed">
      <h2>Новостная лента</h2>
      {news.length === 0 ? (
        <p>Новостей пока нет</p>
      ) : (
        <ul>
          {news.map(item => (
            <li key={item.id} className="news-item">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <small>{new Date(item.date).toLocaleDateString()}</small>
              <button onClick={() => dispatch(deleteNews(item.id))}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsFeed;