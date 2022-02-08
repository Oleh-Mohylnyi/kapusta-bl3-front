import { Outlet } from "react-router-dom";
import DiagramMobile from "../../components/StatisticDiagram/DiagramMobile";
import DiagramTablet from "../../components/StatisticDiagram/DiagramTablet";
import DiagramContainer from "../../components/StatisticDiagram/DiagramContainer";
import TotalReport from "../../components/TotalReport/TotalReport";
import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
// import ViewsContainer from "../../components/ViewsContainer/ViewsContainer";

export default function StatisticsView() {
  let width = window.innerWidth;
  return (
    <>
      {/* <ViewsContainer> */}
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
      {/* </ViewsContainer> */}
    </>
  );
}
