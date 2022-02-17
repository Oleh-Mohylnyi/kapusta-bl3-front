import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
import BalanceNavigation from "../../components/BalanceNavigationSection/BalanceNavigation";
import { useEffect } from "react";
import TransactionsNav from "../../components/SectionTransactions/TransactionsNav";
import { fetchTransactionsThunk } from "../../redux/transactions/transactionsThunks";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function MainView() {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTransactionsThunk());
  }, [dispatch]);

  const switcher = (val) => {
    //switch from expenses to income
    setToggle(toggle);
  };
  return (
    <>
      <BalanceNavigation />
      <TransactionsNav onClick={switcher} />
      <BackgroundImages />    
    </>
  );
}
