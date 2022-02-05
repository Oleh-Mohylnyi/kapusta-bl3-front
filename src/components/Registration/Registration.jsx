import { ReactComponent as GoogleIcon } from '../../images/google.svg'
import Button from '../Button/Button'
import s from './Registration.module.css';
export default function Registration() {
  return (
    <>
      <form className={s.form}>
        <p className={s.title}>
          Вы можете авторизоваться с помощью Google Account:
        </p>
        <button type="submit" className={s.buttonGoogle}>
        <GoogleIcon/>
         <span className={s.textGoogle}>Google</span> 
        </button>
        <p className={s.text}>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
        <label className={s.label}>Электронная почта:</label>
        <input
          className={s.input}
          type="email"
          name="email"
          placeholder="your@email.com"
        ></input>

        <label className={s.label}>Пароль:</label>
        <input
          className={s.input}
          type="password"
          name="password"
          placeholder="Пароль"
        ></input>
        <div className={s.containerButton}>
          <Button title={"ВОЙТИ"} type={"submit"}/>
          <Button title={"РЕГИСТРАЦИЯ"} type={"submit"}/>
        </div>
      </form>
    </>
  );
}
