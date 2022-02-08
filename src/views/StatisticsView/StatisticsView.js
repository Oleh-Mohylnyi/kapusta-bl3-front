import { Outlet } from "react-router-dom";
import DiagramMobile from "../../components/StatisticDiagram/DiagramMobile";
import DiagramTablet from "../../components/StatisticDiagram/DiagramTablet";
import DiagramContainer from "../../components/StatisticDiagram/DiagramContainer";
// import PageContainer from "../../components/PageContainer";
import TotalReport from "../../components/TotalReport/TotalReport";
import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";

export default function StatisticsView() {
  let width = window.innerWidth;
  return (
    <>
      {/* <PageContainer> */}
        <TotalReport />
        <Outlet />
        {width < 768 ? (
          <DiagramMobile />
        ) : (
          <DiagramContainer>
            <DiagramTablet />
          </DiagramContainer>
        )}
        <BackgroundImages />
      {/* </PageContainer> */}
    </>
  );
}
