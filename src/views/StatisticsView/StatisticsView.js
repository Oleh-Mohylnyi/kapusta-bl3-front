import DiagramMobile from "../../components/StatisticDiagram/DiagramMobile";
import DiagramContainer from "../../components/StatisticDiagram/DiagramContainer"
// import Report from "../../components/Report/Report";
import PageContainer from '../../components/PageContainer'
import BackgroundImages from '../../components/BackgroundLayouts/PrivatePageBg'

export default function StatisticsView() {
let width = window.innerWidth;
    return (
      <PageContainer>
        {/* <Report /> */}
        {width < 768 ? <DiagramMobile /> : <DiagramContainer />}
        <BackgroundImages />
      </PageContainer>
    )
}
