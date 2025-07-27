import Login from "../../components/Login/Login.tsx";
import styles from "./Index.module.css";

export default function Index() {
    return (
        <>
            <h1 className={styles["welcome"]}></h1>;
                <Login/>
        </>
    )
}