import Registration from '../../components/Registration'
import BackgroundImages from '../../components/BackgroundLayouts/PublicPageBg'
// import PageContainer from "../../components/PageContainer";
import Title from '../../components/Title'
import s from './HomeView.module.scss'

export default function HomeView() {
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
