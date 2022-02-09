import { Outlet } from "react-router-dom";
import Diagram from "../../components/StatisticDiagram/Diagram";
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
  return (
    <>
      <TotalReport />
      <Outlet />
      <DiagramContainer>
        <Diagram mobile={mobile()}/>
      </DiagramContainer>      
      <BackgroundImages />
    </>
  );
}
