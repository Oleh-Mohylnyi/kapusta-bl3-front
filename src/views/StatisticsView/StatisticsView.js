// import { Outlet } from "react-router-dom";
import Diagram from "../../components/StatisticDiagram/Diagram";
import DiagramContainer from "../../components/StatisticDiagram/DiagramContainer";
import TotalReport from "../../components/TotalReport/TotalReport";
import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";

import Balance from "../../components/Balance";
import BackToMain from '../../components/BackToMain';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import s from "./StatisticsView.module.css";


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
    <div className={s.balanceWrapper}>
    <BackToMain/>
  <Balance />
    
    </div>
      <TotalReport />
      {/* <Outlet /> */}
      <Report />
      <DiagramContainer>
        <Diagram mobile={mobile()}/>
      </DiagramContainer>      
      <BackgroundImages />
    </>
  );
}
