import React from 'react'; 
import styles from './pWeather.module.css'; 
 
interface PWeatherProps { 
    label:string 
} 
 
const PWeather: React.FC<PWeatherProps> = ({label}) => {
    return ( 
        <div className={styles.container}> 
            PWeather {label} 
        </div> 
    ); 
}; 
 
export default PWeather; 
