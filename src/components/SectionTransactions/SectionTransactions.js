import React from "react";
import Summary from "../Summary";
import TableData from "./TableData";
// import TransactionsNav from "./TransactionsNav";
import TransactionForm from "../TransactionForm";
// import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "./ComposeSection/ComposeSection.module.scss";
import s from "./SectionTransactions.module.scss";

// import styles from "./ComposeSection/ComposeSection.module.scss";
// import { PropTypes } from "prop-types";
import {
  getMonthlyIncomesThunk,
  getMonthlyExpensesThunk,
} from "../../redux/reports/reportsThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import moment from "moment";
import "moment/locale/ru";
// import { createLogger } from "redux-logger";

const SectionTransactions = () => {
  const dispatch = useDispatch();
  const monthlyExpenses = useSelector((state) => state.reports.monthlyIncome);
  const monthlyIncomes = useSelector((state) => state.reports.monthlyExpenses);

  useEffect(() => {
    dispatch(getMonthlyIncomesThunk());
    dispatch(getMonthlyExpensesThunk());
  }, [dispatch]);
  //список предществующих месяцев
  let months = [0, 1, 2, 3, 4, 5];
  let prevMonthList = [];
  const previousMonth = () => {
    for (let i = 0; i < months.length; i++) {
      months[i] = moment().subtract(i, "months").format("MMMM");
      prevMonthList.push(months[i]);
    }
  };
  previousMonth();

  let monthlyExpensesData = [];
  let monthlyIncomeData = [];

  const getMonthlyData = (dataObj, arr, months) => {
    if (Object.keys(dataObj).length !== 0) {
      return months.forEach((mon) => {
        let el = {
          month: mon,
          value: 0,
        };
        Object.keys(dataObj).forEach((key) => {
          const dateStr = dataObj[key]._id.month;
          const month = moment(dateStr, "MM").format("MMMM");
          if (mon === month) {
            el.value = dataObj[key].totalValue;
          }
        });
        arr.push(el);
      });
    }
    months.forEach((mon) => {
      let el = {
        month: mon,
        value: 0,
      };
      arr.push(el);
    });
  };

  getMonthlyData(monthlyExpenses, monthlyExpensesData, months);
  getMonthlyData(monthlyIncomes, monthlyIncomeData, months);
  return (
    <section className={s.transactionsSection}>
      {/* <TransactionsNav /> */}
      <div className={s.sectionContainer}>
        <TransactionForm currency="UAH" />

        <div className={styles.wrapperTables}>
          <TableData currency="UAH" />
          <Summary incomes={monthlyIncomeData} expenses={monthlyExpensesData} />
        </div>
      </div>
    </section>
  );
};

export default SectionTransactions;
