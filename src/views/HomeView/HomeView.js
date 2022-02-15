import Registration from '../../components/Registration'
import BackgroundImages from '../../components/BackgroundLayouts/PublicPageBg'
// import PageContainer from "../../components/PageContainer";
import Title from '../../components/Title'
import s from './HomeView.module.scss'

import { useDispatch } from 'react-redux'
import { authOperations } from '../../redux/auth/index'
// import { userFromGoogleAuth } from '../../redux/auth/operations'

export default function HomeView() {
  const dispatch = useDispatch()

  const token = new URLSearchParams(document.location.search).get('token')
  // const email = new URLSearchParams(document.location.search).get('email')
  if (token) {
    dispatch(authOperations.userFromGoogleAuth(token))
  }

  return (
    <>
      <div className={s.container}>
        <Title />
        <Registration />
      </div>
      <BackgroundImages />
    </>
  )
}
