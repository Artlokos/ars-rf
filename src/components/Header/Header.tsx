import React from 'react'; 
import styles from './Header.module.css'; 
 

type HeaderProps = {
    label:string;
};
 
 
const Header: React.FC<HeaderProps> = ({label}) => {
return (
    <header className={styles.header}>
        {label}
    </header>
) 
}
    
export default Header;