import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
// import SectionTransactions from "../../components/SectionTransactions";
// import TableData from "./../../components/SectionTransactions/TableData/TableData";
// import Summary from "./../../components/Summary/Summary";
import SectionTransactions from "../../components/SectionTransactions";
import BalanceNavigation from "../../components/BalanceNavigationSection/BalanceNavigation";
// import TransactionsNav from "../../components/SectionTransactions/TransactionsNav";

export default function MainView() {
  return (
    <>
      {/* <SectionTransactions /> */} {/* УДАЛИТЬ?? */}
      {/* <TableData /> */} {/* УДАЛИТЬ?? */}
      {/* <Summary /> */} {/* УДАЛИТЬ?? */}
      <BalanceNavigation />
      {/* <TransactionsNav /> */}
      {/* перенес в SectionTransactions */}
      <SectionTransactions />
      <BackgroundImages />
    </>
  );
}
