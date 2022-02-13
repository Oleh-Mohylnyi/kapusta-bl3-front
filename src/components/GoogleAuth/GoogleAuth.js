import { ReactComponent as GoogleIcon } from '../../images/google.svg'
import s from './GoogleAuth.module.scss'

// const BASE_URL = 'https://kapusta-smart-finances.herokuapp.com/';
// const BASE_URL = 'http://localhost:4000'

export default function GoogleAuth() {
  return (
    <>
      <a href="https://kapusta-smart-finances.herokuapp.com/api/auth/google">
          <button type="button" className={s.buttonGoogle}>
          <GoogleIcon />
          <span className={s.textGoogle}>Google</span>
        </button>
      </a>
    </>
  )
}
