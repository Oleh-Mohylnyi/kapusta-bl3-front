// import { Outlet } from "react-router-dom";
import Diagram from "../../components/StatisticDiagram/Diagram";
import DiagramContainer from "../../components/StatisticDiagram/DiagramContainer";
import TotalReport from "../../components/TotalReport/TotalReport";
import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";


import Balance from "../../components/BalanceNavigationSection/Balance";
import BackToMain from "../../components/BalanceNavigationSection/BackToMain";
import Report from "../../components/Report/Report/Report";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import s from "./StatisticsView.module.css";
import BalanceTitle from "../../components/BalanceNavigationSection/BalanceTitle";
import Button from "../../components/BalanceNavigationSection/Button";

export default function StatisticsView() {

 


  const size = useWindowDimensions();
  const { width } = size;
  const mobile = () => {
    if (width < 768) {
      return true;
    }
    return false;
  };

  const desktopView = width >= 1280
  return (
    <>
    <div className={s.balanceWrapper}>
    <BackToMain/>
    <div className={s.desktopBalance}>
    <BalanceTitle/>
  <Balance />
  {desktopView && <Button/>}
  </div>
    
    </div>
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
