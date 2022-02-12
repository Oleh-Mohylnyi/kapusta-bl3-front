import React from "react";
// import SectionTransactions from "../../SectionTransactions/SectionTransactions";
import Summary from "./Summary/Summary";
import TableData from "./TableData";
import TransactionForm from "../TransactionForm";

import s from "./SectionTransactions.module.scss";
// import { PropTypes } from "prop-types";

const SectionTransactions = () => {
  return (
    <div className={s.section}>
      <TransactionForm currency={"UAH"} />
      <div className={s.wrapperTables}>
        <TableData isExpense={true} />
        <Summary />
      </div>
    </div>
  );
};

// SectionTransactions.propTypes = {
//   children: PropTypes.node,
// };

export default SectionTransactions;
