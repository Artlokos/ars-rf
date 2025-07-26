import './App.css'

function App() {

  return (
    <>
 <header>
        <div className="container">
            <div className="header-top">
                <div className="logo">vl.ru</div>
                <div className="auth">
                    <a href="#">Войти</a>
                    <a href="#">Регистрация</a>
                </div>
            </div>
            
            <div className="search">
                <input type="text" placeholder="Поиск во Владивостоке"/>
            </div>
            
            <nav>
                <ul>
                    <li><a href="#">Новости</a></li>
                    <li><a href="#">Афиша</a></li>
                    <li><a href="#">Справочник</a></li>
                    <li><a href="#">Погода</a></li>
                    <li><a href="#">Карты</a></li>
                    <li><a href="#">Ещё</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
    <main className="container">
        <div className="main-news">
            <div className="featured-news">
                <h2>Главная новость</h2>
                <p>Текст главной новости Владивостока...</p>
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
        </div>
    </main>
    
    <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-column">
                    <h3>Разделы</h3>
                    <ul>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Афиша</a></li>
                        <li><a href="#">Справочник</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Компания</h3>
                    <ul>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Реклама</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Соцсети</h3>
                    <ul>
                        <li><a href="#">VK</a></li>
                        <li><a href="#">Telegram</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default App
