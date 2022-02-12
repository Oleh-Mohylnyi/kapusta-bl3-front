// import { Outlet } from "react-router-dom";
import Diagram from "../../components/StatisticDiagram/Diagram";
import DiagramContainer from "../../components/StatisticDiagram/DiagramContainer";
import TotalReport from "../../components/TotalReport/TotalReport";
import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
import Report from "../../components/Report/Report/Report";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MobileStatisticsNavigation from "../../components/MobileStatisticsNavigation";
import TabletDesktopStatisticsNavigation from "../../components/TabletDesktopStatisticsNavigation/TabletDesktopStatisticsNavigation";
import s from "./StatisticsView.module.css";

// import { useDispatch } from "react-redux";
// import { useEffect } from "react";

// import {
//   getMonthlyIncomeThunk,
//   getMonthlyExpensesThunk,
//   fetchBalanceThunk,
//   getIncomeThunk,
//   getExpensesThunk,
// } from "../../redux/reports/reportsThunk";
// import { addTransactionThunk } from "../../redux/transactions/transactionsThunks";

export default function StatisticsView() {

  //  const dispatch = useDispatch();
  // const body = { type: true, sum: 2000, category: "Доп." };
  // useEffect(() => {
  //   dispatch(addTransactionThunk(body));
  // }, []);
  // useEffect(() => {
  //   dispatch(fetchBalanceThunk());
  // }, []); 
  //   useEffect(() => {
  //     dispatch(getMonthlyIncomeThunk())
  //   }, []);
  //   useEffect(() => {
  //     dispatch(getMonthlyExpensesThunk())
  //   }, [])
  // useEffect(() => {
  //   dispatch(getIncomeThunk())
  // }, [])
  // useEffect(() => {
  //   dispatch(getExpensesThunk())
  // })
  
  
  const size = useWindowDimensions();
  const { width } = size;
  const mobile = () => {
    if (width < 768) {
      return true;
    }
    return false;
  };

  const mobileView = width <= 767.98;
  return (
    <>
      <div className={s.balanceWrapper}>
        {mobileView ? (
          <MobileStatisticsNavigation />
        ) : (
          <TabletDesktopStatisticsNavigation />
        )}
      </div>

      <TotalReport />
      <Report />
      <DiagramContainer>
        <Diagram mobile={mobile()} />
      </DiagramContainer>
      <BackgroundImages />
    </>
  );
}
