import React from 'react'; 
import styles from './Footer.module.css'; 
 
interface FooterProps { 
   label:string;
} 
 
const Footer: React.FC<FooterProps> = ({label}) => {
    return ( 
        <div className={styles.container}> 
            Footer Component + {label}
            <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Разделы</h3>
              <ul>
                <li>
                  <a href="#">Новости</a>
                </li>
                <li>
                  <a href="#">Афиша</a>
                </li>
                <li>
                  <a href="#">Справочник</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Компания</h3>
              <ul>
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Реклама</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Соцсети</h3>
              <ul>
                <li>
                  <a href="#">VK</a>
                </li>
                <li>
                  <a href="#">Telegram</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
        </div> 
    ); 
}; 
 
export default Footer; 
