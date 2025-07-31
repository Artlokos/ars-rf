import React from 'react';
import styles from './Auth.module.css';
import { Link } from 'react-router-dom';

interface AuthProps {
  // label:string
}

const Auth: React.FC<AuthProps> = () =>  {
  
    return (
        <div className={styles.auth}>
          <Link to="/login">Войти</Link>
          <Link to="/register">Регистрация</Link>
        </div>

    );
  };

export default Auth;
