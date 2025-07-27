import React from 'react'; 
import styles from './pNews.module.css'; 
 
interface PNewsProps { 
    label:string;
} 
 
const PNews: React.FC<PNewsProps> = ({label}) =>{
    return ( 
        <div className={styles.container}> 
            PNews Component + {label}
        </div> 
    ); 
}; 
 
export default PNews; 
