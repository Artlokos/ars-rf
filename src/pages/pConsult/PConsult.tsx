import React from 'react'; 
import styles from './pConsult.module.css'; 
 
interface PConsultProps { 
    label:string 
} 
 
const PConsult: React.FC<PConsultProps> = ({label}) => { 
    return ( 
        <div className={styles.container}> 
            PConsult {label} 
        </div> 
    ); 
}; 
 
export default PConsult; 
