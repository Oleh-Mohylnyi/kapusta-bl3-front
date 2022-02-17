import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register, login } from '../../redux/auth/operations'
import GoogleAuth from '../GoogleAuth'
import { toast } from 'react-toastify'
import s from './Registration.module.scss'

export default function Registration() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('это обязательное поле')
  const [emailDirty, setEmailDirty] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [passwordError, setPasswordError] = useState('это обязательное поле')
  const [errorSymbol, setErrorSymbol] = useState('*')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmailDirty(value)
      case 'password':
        return setPasswordDirty(value)
      default:
        return
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email')
      setErrorSymbol('*')
      if (!e.target.value) {
        setEmailError('Это обязательное поле')
        setErrorSymbol('*')
      }
    } else {
      setEmailError('')
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 6) {
      setPasswordError('Пароль должен быть не меньше 6 символов')
      if (!e.target.value) {
        setPasswordError('Это обязательное поле!!!')
      }
    } else {
      setPasswordError('')
    }
  }


  const handleSubmitLogin = (e) => {
    e.preventDefault()
    const user = { email, password }
    dispatch(login(user))
  }

   const handleSubmitRegistration = (e) => {
    e.preventDefault()
    if (emailError ==='Некорректный email' || passwordError==='Пароль должен быть не меньше 6 символов') {
      toast.warning('Введите корректные данные для почты')
      return
    } else {
      const user = { email, password }
      dispatch(register(user))
    }
  }

  return (
    <div className={s.registrationForm}>
      <form className={s.form}>
        <p className={s.title}>
          Вы можете авторизоваться с помощью Google Account:
        </p>
        <GoogleAuth />
        <p className={s.text}>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
        <label className={s.formLabel}>
          <p className={s.label}>
            {emailDirty && emailError && (
              <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                {errorSymbol}{' '}
              </span>
            )}
            Электронная почта:
          </p>
          <input
            onBlur={handleChange}
            onChange={emailHandler}
            type="text"
            name="email"
            value={email}
            placeholder="Your@email.com"
            className={s.input}
            pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
            title="Email может, сoстоять из букв цифр и обязательного символа '@'"
          />
          {emailDirty && emailError && (
            <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
              {emailError}{' '}
            </div>
          )}
        </label>

        <label className={s.formLabel}>
          <p className={s.label}>
            {passwordDirty && passwordError && (
              <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                {errorSymbol}{' '}
              </span>
            )}
            Пароль:
          </p>
          <input
            onBlur={handleChange}
            onChange={passwordHandler}
            type="password"
            name="password"
            value={password}
            placeholder="Пароль"
            className={s.input}
            pattern="[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{6,}"
            title="Пароль может, сoстоять не меньше чем из шести букв цифр и символов '!@#$%^&*'"
          />
          {passwordDirty && passwordError && (
            <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
              {passwordError}{' '}
            </div>
          )}
        </label>

        <div className={s.containerButton}>
          <button
            type="submit"
            className={s.button}
            onClick={handleSubmitLogin}
          >
            ВОЙТИ{' '}
          </button>
          <button
            type="button"
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
