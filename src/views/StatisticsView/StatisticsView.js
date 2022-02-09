import { Outlet } from "react-router-dom";
import DiagramMobile from "../../components/StatisticDiagram/DiagramMobile";
import DiagramTablet from "../../components/StatisticDiagram/DiagramTablet";
import DiagramContainer from "../../components/StatisticDiagram/DiagramContainer";
import TotalReport from "../../components/TotalReport/TotalReport";
import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
import useWindowDimensions from "../../hooks/useWindowDimensions";


export default function StatisticsView() {

  const size = useWindowDimensions();
  const { width } = size;
  const mobile = () => {
    if (width < 768) {
      return true;
    }
    return false;
  };
  console.log(mobile());
  return (
    <>
      <TotalReport />
      <Outlet />
      {mobile() ? (
        <DiagramMobile />
      ) : (
        <DiagramContainer>
          <DiagramTablet />
        </DiagramContainer>
      )}
      <BackgroundImages />
    </>
  );
}
