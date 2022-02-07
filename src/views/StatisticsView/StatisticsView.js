import DiagramMobile from "../../components/StatisticDiagram/DiagramMobile";
import DiagramTablet from "../../components/StatisticDiagram/DiagramTablet";
import DiagramContainer from "../../components/StatisticDiagram/DiagramContainer";
import Report from "../../components/Report/Report/Report";

import PageContainer from '../../components/PageContainer'
import TotalReport from "../../components/TotalReport/TotalReport";
import BackgroundImages from '../../components/BackgroundLayouts/PrivatePageBg'

export default function StatisticsView() {
  let width = window.innerWidth;
  return (
    <>
      <PageContainer>

        <TotalReport/>
        <Report />
        {width < 768 ? (
          <DiagramMobile />
        ) : (
          <DiagramContainer>
            <DiagramTablet />
          </DiagramContainer>
        )}
        <BackgroundImages />
      </PageContainer>
    </>
  );
}
