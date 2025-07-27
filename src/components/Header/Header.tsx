import React from 'react';
import styles from './Header.module.css';

type HeaderProps = {
  label: string;
};

const Header: React.FC<HeaderProps> = ({ label }) => {
  return (
    <header className={styles.header}>
      <div className="header-top">
        <div className="logo"> {label} - пульс этого города</div>
        <div className="auth">
          <a href="#">Войти</a>
          <a href="#">Регистрация</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
