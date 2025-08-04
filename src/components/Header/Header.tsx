import React from 'react';
import styles from './Header.module.css';
import Auth from '../Auth';
import Logo from '../Logo/Logo';

type HeaderProps = {
  label: string;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Logo label='ARS-TIMES' slogan='Пульс этого города'/>
      <Auth />
    </header>
  );
};

export default Header;
