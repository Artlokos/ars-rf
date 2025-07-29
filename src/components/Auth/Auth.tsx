import React from 'react';
import styles from './Auth.module.css';

interface AuthProps {
  // label:string
}

const Auth: React.FC<AuthProps> = () =>
  // {label}
  {
    return (

        <div className={styles.auth}>
          <a href="#">Войти</a>
          <a href="#">Регистрация</a>
        </div>

    );
  };

export default Auth;
