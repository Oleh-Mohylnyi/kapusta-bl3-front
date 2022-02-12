import SectionTransactions from "../../SectionTransactions/SectionTransactions";
import Summary from "../../Summary/Summary";
import TableData from "../../SectionTransactions/TableData/TableData";
import TransactionForm from "../../TransactionForm";
import s from "./ComposeSection.module.scss";

const ExpensePage = () => {
  return (
    // <div> //НЕ НУЖЕН?
      <SectionTransactions>
        <TransactionForm currency={'UAH'}/>
        <div className={s.wrapperTables}>
          <TableData isExpense={true} />
          <Summary />
        </div>
      </SectionTransactions>
    // </div> //НЕ НУЖЕН?
  );
};

export default ExpensePage;
