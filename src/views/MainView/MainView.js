import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
import ComposeSection from "../../components/SectionTransactions/ComposeSection";
import TransactionsNav from "../../components/SectionTransactions/TransactionsNav";

export default function MainView() {
  return (
    <>
      <BackgroundImages />
      <TransactionsNav />
      <ComposeSection />
    </>
  );
}
