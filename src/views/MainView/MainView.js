import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
import SectionTransactions from "../../components/SectionTransactions";
import TableData from "./../../components/SectionTransactions/TableData/TableData";
import Summary from "./../../components/Summary/Summary";
import TransactionForm from "../../components/TransactionForm";
import ComposeSection from "../../components/SectionTransactions/ComposeSection";
import BalanceNavigation from "../../components/Navigation/BalanceNavigation/BalanceNavigation";
import TransactionsNav from "../../components/SectionTransactions/TransactionsNav";

export default function MainView() {
  return (
    <>
      <BackgroundImages />      
      <SectionTransactions />
      <TransactionForm/>
      <TableData />
      <Summary />
      <BalanceNavigation/>
      <TransactionsNav />
      <ComposeSection />
    </>
  );
}
