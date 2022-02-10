import SectionTransactions from "../../SectionTransactions/SectionTransactions";
import Summary from "../../Summary/Summary";
import TransactionForm from "../../TransactionForm/TransactionForm";
import TableData from "../ComposeSection/ComposeSection.js";
// import useWResize from "../../../hooks/useWindowDimensions";
import s from "./ComposeSection.module.scss";
// const ExpensePage = () => {
//   const viewPort = useWResize();
//   return (
//     <div>
//       <SectionTransactions>
//         {viewPort.width >= 768 && <TransactionForm />}
//         <div className={s.wrapperTables}>
//           <TableData
//           // isExpense={true}
//           // dataTransactions={filterForDate() || []}
//           // onChangeDel={onDelExpenseDataApi}
//           />
//           <Summary />
//         </div>
//       </SectionTransactions>
//     </div>
//   );
// };
// export default ExpensePage;

const ExpensePage = () => {
  return (
    <div>
      <SectionTransactions>
        <TransactionForm />
        <div className={s.wrapperTables}>
          <TableData isExpense={true} />
          <Summary />
        </div>
      </SectionTransactions>
    </div>
  );
};

export default ExpensePage;

// return (
//     <div>
//       <SectionTransactions>
//         {viewPort.width >= 768 && <AddDataForm />}
//         <div className={s.wrapperTables}>
//           <TableData
//             isExpense={true}
//             dataTransactions={filterForDate() || []}
//             onChangeDel={onDelExpenseDataApi}
//           />
//           <Summary monthsStats={expenseMonthsStats} />
//         </div>
//       </SectionTransactions>
//     </div>
//   );
// };
// export default ExpensePage;
