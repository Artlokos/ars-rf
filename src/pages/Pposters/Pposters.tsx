import React from 'react'; 
import styles from './Pposters.module.css'; 
 
interface PpostersProps { 
    label:string    
} 
 
const Pposters: React.FC<PpostersProps> = ({label}) =>{
    return ( 
        <div className={styles.container}> 
            Pposters Component + {label}
        </div> 
    ); 
}; 
 
export default Pposters; 