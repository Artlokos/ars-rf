import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import Search from './components/Search/Search';
// import PNews from './pages/pNews';

function App() {
  return (
    <>
      <Router>
        <Header label="ArsTimes" />
        <Search />
        <Navbar
          items={[
            { name: 'Новости', path: '/news' },
            { name: 'Афиша', path: '/posters' },
            { name: 'Справочник', path: '/consult' },
            { name: 'Погода', path: '/weather' },
            { name: 'Места', path: '/places' },
          ]}
        />

        <AppRouter />
      </Router>

      <main>
        {/* <PNews label="Главная новость" /> */}

        {/* <div className="main-news">
          <div className="featured-news">
            <h2>Главная новость</h2>
            <p>Текст главной новости Арсеньева...</p>
          </div>
          <div className="side-news">
            <h3>Важные новости</h3>
            <ul>
              <li>Новость 1</li>
              <li>Новость 2</li>
              <li>Новость 3</li>
            </ul>
          </div>
        </div>

        <h2 className="section-title">Последние новости</h2>
        <div className="news-list">
          <div className="news-item">
            <h3>Заголовок новости 1</h3>
            <p>Краткое описание...</p>
          </div>
          <div className="news-item">
            <h3>Заголовок новости 2</h3>
            <p>Краткое описание...</p>
          </div>
          <div className="news-item">
            <h3>Заголовок новости 3</h3>
            <p>Краткое описание...</p>
          </div>
        </div>

        <h2 className="section-title">Афиша</h2>
        <div className="news-list">
          <div className="news-item">
            <h3>Мероприятие 1</h3>
            <p>Дата и место...</p>
          </div>
          <div className="news-item">
            <h3>Мероприятие 2</h3>
            <p>Дата и место...</p>
          </div>
          <div className="news-item">
            <h3>Мероприятие 3</h3>
            <p>Дата и место...</p>
          </div>
        </div>*/}
      </main>
    </>
  );
}

export default App;
