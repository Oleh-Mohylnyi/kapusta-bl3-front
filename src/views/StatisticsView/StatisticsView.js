// import { Outlet } from "react-router-dom";
import Diagram from "../../components/StatisticDiagram/Diagram";
import DiagramContainer from "../../components/StatisticDiagram/DiagramContainer";
import TotalReport from "../../components/TotalReport/TotalReport";
import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageStatsBg";
import Report from "../../components/Report/Report/Report";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MobileStatisticsNavigation from "../../components/MobileStatisticsNavigation";
import TabletDesktopStatisticsNavigation from "../../components/TabletDesktopStatisticsNavigation/TabletDesktopStatisticsNavigation";
import s from "./StatisticsView.module.css";
import { useState } from "react";
import moment from "moment";
import "moment/locale/ru";
// import {getMonthlyExpensesThunk, getMonthlyIncomesThunk} from "../../redux/reports/reportsThunk";

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

  // ====added by Y.S.=====
  const date = new Date();
  // eslint-disable-next-line no-unused-vars
  const [periodDate, setPeriodDate] = useState(moment(date));
  const [periodMonth, setPeriodMonth] = useState(moment(date).format("MM"));
  const [periodYear, setPeriodYear] = useState(moment(date).format("YYYY"));
  const nextMonth = () => periodDate.add(1, "month").format("MM");

  const previousMonth = () => periodDate.subtract(1, "month").format("MM");
  const previousYear = () => periodDate.subtract("year").format("YYYY");
  const nextYear = () => periodDate.add("year").format("YYYY");

  const indexOfMonth = (periodMonth) => {
    periodMonth.forEach((month, idx) => periodMonth.indexOf(month) === idx);
  };

  const handlePreviousPeriod = () => {
    setPeriodMonth(previousMonth());
    indexOfMonth && setPeriodYear(previousYear());
  };

  const handleNextPeriod = () => {
    setPeriodMonth(nextMonth());
    indexOfMonth && setPeriodYear(nextYear());
  };
  // =====

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
          <MobileStatisticsNavigation
            handlePreviousPeriod={handlePreviousPeriod}
            periodMonth={periodMonth}
            periodYear={periodYear}
            handleNextPeriod={handleNextPeriod}
          />
        ) : (
          <TabletDesktopStatisticsNavigation
            handlePreviousPeriod={handlePreviousPeriod}
            periodMonth={periodMonth}
            periodYear={periodYear}
            handleNextPeriod={handleNextPeriod}
          />
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
