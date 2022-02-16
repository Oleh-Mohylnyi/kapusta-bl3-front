import { ReactComponent as GoogleIcon } from '../../images/google.svg'
import s from './GoogleAuth.module.scss'

export default function GoogleAuth() {
  return (
    <>
      {/* <a href="http://localhost:4000/api/auth/google"> */}
      <a href="https://kapusta-smart-finances.herokuapp.com/api/auth/google">
          <button type="button" className={s.buttonGoogle}>
          <GoogleIcon />
          <span className={s.textGoogle}>Google</span>
        </button>
      </a>
    </>
  )
}
