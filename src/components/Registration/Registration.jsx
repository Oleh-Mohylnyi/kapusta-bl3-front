import { ReactComponent as GoogleIcon } from '../../images/google.svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register, login } from '../../redux/auth/operations'
// import Button from '../Button/Button'
import s from './Registration.module.scss'

export default function Registration() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'email':
        setEmail(value)
        break

      case 'password':
        setPassword(value)
        break

      default:
        return
    }
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    const user = { email, password }
    dispatch(login(user))
  }

  const handleSubmitRegistration = (e) => {
    e.preventDefault()
    const user = { email, password }
    dispatch(register(user))
    // reset()
  }

  // const reset = () => {
  //   setEmail('')
  //   setPassword('')
  // }

  return (
    <div className={s.registrationForm}>
      <form className={s.form}>
        <p className={s.title}>
          Вы можете авторизоваться с помощью Google Account:
        </p>
        <button type="submit" className={s.buttonGoogle}>
          <GoogleIcon />
          <span className={s.textGoogle}>Google</span>
        </button>
        <p className={s.text}>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>

        <label className={s.label}>Электронная почта:</label>
        <input
          onChange={handleChange}
          className={s.input}
          value={email}
          type="email"
          name="email"
          placeholder="your@email.com"
        ></input>

        <label className={s.label}>Пароль:</label>
        <input
          onChange={handleChange}
          className={s.input}
          value={password}
          type="password"
          name="password"
          placeholder="Пароль"
          pattern="[0-9]{8,}"
          title="Пароль должен состоять минимум из 8 цифр"
        ></input>
        <div className={s.containerButton}>
          {/* <Button title={'ВОЙТИ'} type={'submit'} onClick={handleSubmitLogin} />
          <Button
            title={'РЕГИСТРАЦИЯ'}
            type={'submit'}
            onClick={handleSubmitRegistration}
            
          /> */}
          <button
            type="submit"
            className={s.button}
            onClick={handleSubmitLogin}
          >
            ВОЙТИ{' '}
          </button>
          <button
            type="submit"
            className={s.button}
            onClick={handleSubmitRegistration}
          >
            РЕГИСТРАЦИЯ{' '}
          </button>
        </div>
      </form>
    </div>
  )
}
