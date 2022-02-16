import React from "react";
import Summary from "../Summary";
import TableData from "./TableData";
import TransactionsNav from "./TransactionsNav";
import TransactionForm from "../TransactionForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import s from "./SectionTransactions.module.scss";

// import styles from "./ComposeSection/ComposeSection.module.scss";
// import { PropTypes } from "prop-types";
// import { fetchTransactionsThunk } from "../../redux/transactions/transactionsThunks"
// import { useEffect } from "react";
// import { useDispatch } from 'react-redux';

const SectionTransactions = () => {
  // const screenWidth = window.screen.width;
   const viewPort = useWindowDimensions();
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchTransactionsThunk())    
  // },[dispatch])

  return (
    <section className={s.transactionsSection}>
      {/* <TransactionsNav /> */}
      <div className={s.sectionContainer}>
        <TransactionForm currency="UAH" />
        <div className={s.wrapperTables}>
          <TableData currency="UAH"/>
         {viewPort.width >= 1280  && <Summary />}
        </div>
       
      </div>
       {viewPort.width < 1280  && <Summary />}
    </section>
  );
};

// SectionTransactions.propTypes = {
//   children: PropTypes.node,
// };

export default SectionTransactions;
