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
import { getDetailsThunk } from "../../redux/reports/reportsThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
// import Loader from 'react-loader-spinner'

export default function StatisticsView() {
  const dispatch = useDispatch();

  // ====added by Y.S.=====
  const date = new Date();
  // eslint-disable-next-line no-unused-vars
  const [periodDate, setPeriodDate] = useState(moment(date));
  const [periodMonth, setPeriodMonth] = useState(moment(date).format("MM"));
  const [periodYear, setPeriodYear] = useState(moment(date).format("YYYY"));
  const [toggle, setToggle] = useState(false); //switch from expenses to income === added by T.Y.
  // const isLoading = useSelector(state=>state.reports.isLoading)

  const size = useWindowDimensions();
  const { width } = size;
  const mobileView = width <= 767.98;

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
  // ===== added by T.Y.

  const queryPeriodMonth = useMemo(() => {
    if (periodMonth[0] === "0") {
      const queryMonth = periodMonth.split("");
      queryMonth.splice(0, 1);
      return queryMonth.join("");
    }
    return periodMonth;
  }, [periodMonth]);

  const period = useMemo(() => {
    return { year: periodYear, month: queryPeriodMonth };
  }, [periodYear, queryPeriodMonth]);

  useEffect(() => {
    //getDetails
    dispatch(getDetailsThunk(period));
  }, [period, dispatch]);

  const details = useSelector((state) => state.reports.details);

  let incomesArr = [];
  let expensesArr = [];
  const updateMonth = () => {
    if (periodMonth[0] === "0") {
      const queryMonth = periodMonth.split("");
      queryMonth.splice(0, 1);
      return queryMonth.join("");
    }
    return periodMonth;
  };
  const detailsSorter = () => {
    Object.keys(details).forEach((key) => {
      const month = details[key]._id.month;
      const queryMonth = Number(updateMonth());

      if (details[key]._id.type === true && month === queryMonth) {
        incomesArr.push(details[key]);
      } else if (details[key]._id.type === false && month === queryMonth) {
        expensesArr.push(details[key]);
      }
    });
  };
  detailsSorter();

  const data = (arr) => {
    if (arr.length > 0) {
      return arr.map((el) => {
        return { name: el._id.category, uv: el.totalValueCategory };
      });
    }
  };

  const switcher = (val) => {
    //switch from expenses to income
    setToggle(val);
  };
  const incomes = data(incomesArr);
  const expenses = data(expensesArr);

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

      <TotalReport incomes={incomesArr} expenses={expensesArr} />

      {/* {isLoading & <Loader type="ThreeDots" color="#ff751d" height={80} width={80} />} */}
      {incomes === void 0 || expenses === void 0 ? (
        <p className={s.notification}>ПО ЭТОМУ ПЕРИОДУ НЕТ ДАННЫХ</p>
      ) : (
        <>
          <Report onClick={switcher} dataArr={toggle ? incomes : expenses} />
          <DiagramContainer>
            <Diagram
              mobile={mobileView}
              dataArr={toggle ? incomes : expenses}
            />
          </DiagramContainer>
        </>
      )}

      {/* <DiagramContainer>
        <Diagram
          mobile={mobileView}
          dataArr={toggle ? incomes : expenses}
        />
      </DiagramContainer> */}
      <BackgroundImages />
    </>
  );
}
