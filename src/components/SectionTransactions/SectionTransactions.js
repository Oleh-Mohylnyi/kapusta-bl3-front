import React from "react";
import Summary from "../Summary";
import TableData from "./TableData";
import TransactionsNav from "./TransactionsNav";
import TransactionForm from "../TransactionForm";
import s from "./SectionTransactions.module.scss";
import styles from "./ComposeSection/ComposeSection.module.scss";
// import { PropTypes } from "prop-types";
// import { fetchTransactionsThunk } from "../../redux/transactions/transactionsThunks"
// import { useEffect } from "react";
// import { useDispatch } from 'react-redux';

const SectionTransactions = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchTransactionsThunk())    
  // },[dispatch])

  return (
    <section>
      <TransactionsNav />
      <div className={s.sectionContainer}>
        <TransactionForm currency="UAH" />
        <div className={styles.wrapperTables}>
          <TableData currency="UAH"/>
          <Summary />
        </div>
      </div>
    </section>
  );
};

// SectionTransactions.propTypes = {
//   children: PropTypes.node,
// };

export default SectionTransactions;
