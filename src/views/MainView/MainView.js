import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
import ComposeSection from "../../components/SectionTransactions/ComposeSection";
import BalanceNavigation from "../../components/Navigation/BalanceNavigation/BalanceNavigation";
import TransactionsNav from "../../components/SectionTransactions/TransactionsNav";

export default function MainView() {
  return (
    <>
      <BackgroundImages />
      <BalanceNavigation/>
      <TransactionsNav />
      <ComposeSection />
    </>
  );
}
