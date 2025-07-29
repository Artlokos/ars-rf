import React from 'react'; 
import styles from './pNews.module.css';
import NewsItem from '../../components/NewsItem';

 
interface PNewsProps { 
    label:string;
    // newslist:React.ReactElement<typeof NewsItem>[];
    newslist: string[];
} 
 
const PNews: React.FC<PNewsProps> = ({label,newslist}) =>{
    return (
        <>
        <h2>{label}</h2> 
        <div className={styles.container}>
            {newslist.map((item,index)=>(
                <React.Fragment key={index}>
                    <NewsItem key={index} label={item}/>
                </React.Fragment>
            )
            )}
        </div>
        </>
    ); 
}; 
 
export default PNews; 
