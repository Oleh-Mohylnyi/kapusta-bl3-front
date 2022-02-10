// import { Outlet } from "react-router-dom";
import Diagram from "../../components/StatisticDiagram/Diagram";
import DiagramContainer from "../../components/StatisticDiagram/DiagramContainer";
import TotalReport from "../../components/TotalReport/TotalReport";
import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
<<<<<<< Updated upstream

=======
import Report from "../../components/Report/Report";
import Balance from "../../components/Balance";
import BackToMain from '../../components/BackToMain';
>>>>>>> Stashed changes
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
      {/* <Outlet /> */}
      <Report />
      <DiagramContainer>
        <Diagram mobile={mobile()} />
      </DiagramContainer>
      <BackgroundImages />
    </>
  );
}
