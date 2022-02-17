import React from "react";
import Summary from "../Summary";
import TableData from "./TableData";
import TransactionForm from "../TransactionForm";

import styles from "./ComposeSection/ComposeSection.module.scss";
import s from "./SectionTransactions.module.scss";


import {
  getMonthlyIncomesThunk,
  getMonthlyExpensesThunk,
} from "../../redux/reports/reportsThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import "moment/locale/ru";


const SectionTransactions = ({ toggle }) => {
  const dispatch = useDispatch();
  const monthlyExpenses = useSelector((state) => state.reports.monthlyExpenses);
  const monthlyIncome = useSelector((state) => state.reports.monthlyIncome);

  useEffect(() => {
    dispatch(getMonthlyIncomesThunk());
    dispatch(getMonthlyExpensesThunk());
  
  }, [dispatch ]);
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
  getMonthlyData(monthlyIncome, monthlyIncomeData, months);
  return (
    <section className={s.transactionsSection}>      
      <div className={s.sectionContainer}>
        <TransactionForm currency="UAH" type={toggle}/>
        <div className={styles.wrapperTables}>
          <TableData currency="UAH" currentType={toggle} />
          <Summary data={toggle ? monthlyIncomeData : monthlyExpensesData} />          
        </div>
      </div>
    </section>
  );
};

export default SectionTransactions;
