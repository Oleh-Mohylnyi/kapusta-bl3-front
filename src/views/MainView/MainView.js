import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
import SectionTransactions from "../../components/SectionTransactions";
// import TableData from "./../../components/SectionTransactions/TableData/TableData";
// import Summary from "./../../components/Summary/Summary";
import BalanceNavigation from "../../components/BalanceNavigationSection/BalanceNavigation";
import { useEffect } from "react";
// import TransactionsNav from "../../components/SectionTransactions/TransactionsNav";
import { fetchTransactionsThunk } from "../../redux/transactions/transactionsThunks";
import { useDispatch } from "react-redux";

export default function MainView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionsThunk());
  }, [dispatch]);

  return (
    <>
      {/* <SectionTransactions /> */} {/* УДАЛИТЬ?? */}
      {/*<TableData />*/} {/* УДАЛИТЬ?? */}
      {/* <Summary /> */} {/* УДАЛИТЬ?? */}
      <BalanceNavigation />
      {/* <TransactionsNav /> */}
      {/* перенес в SectionTransactions */}
      <SectionTransactions />
      <BackgroundImages />
    </>
  );
}
