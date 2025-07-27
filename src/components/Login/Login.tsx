import styles from "./Login.module.css";
import { useRef } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage.hook";


type IndexProps = {
    label:string;
};
 

const Login: React.RC<IndexProps> = ({label}) => {
  const [profiles, saveProfile] = useLocalStorage([]);
  const loginInput = useRef(null);
  const loginButton = useRef(null);

  const addNewProfile = profile => {
    saveProfile([...profiles.map(i => ({
      ...i
    })),{
      userName: profile.userName,
      isLoggines: false
    }]);
  };

  return (
    <>
      <form id="form-login" className={styles["login-form"]} onSubmit={addNewProfile}>
        <h2 className={styles["login-header"]}>{label}</h2>
        {/* <UniInput ref={loginInput} name="Login" placeholder="Ваше имя" /> */}
        <input
          type="text"
          ref={loginInput}
          placeholder="Ваше имя"
          required
          // onChange={e => setProfile(e.target.value)}
          className={styles["login-name"]}
        />
        <button type="submit" className={`${styles.login_button} ${styles.accent}`} ref={loginButton}>Войти в профиль</button>
      </form>
    </>
  );
}
export default Login;