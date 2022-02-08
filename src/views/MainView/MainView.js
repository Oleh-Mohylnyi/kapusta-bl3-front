// import PageContainer from "../../components/PageContainer";
import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
import SectionTransactions from "../../components/SectionTransactions";
import TableData from "./../../components/SectionTransactions/TableData/TableData";
import Summary from "./../../components/Summary/Summary";
import TransactionForm from "../../components/TransactionForm";

export default function MainView() {
  return (
    <>
      <BackgroundImages />
      
      <SectionTransactions />
      <TransactionForm/>
      <TableData />
      <Summary />
    </>
  );
}
