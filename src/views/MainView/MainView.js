import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
// import SectionTransactions from "../../components/SectionTransactions";
// import TableData from "./../../components/SectionTransactions/TableData/TableData";
// import Summary from "./../../components/Summary/Summary";
import BalanceNavigation from "../../components/BalanceNavigationSection/BalanceNavigation";
import { useEffect } from "react";
import TransactionsNav from "../../components/SectionTransactions/TransactionsNav";
import { fetchTransactionsThunk } from "../../redux/transactions/transactionsThunks";
import { useDispatch } from "react-redux";
import { useState } from "react";
// import Modal from "../../components/Modal/Modal";

export default function MainView() {
  const [toggle, setToggle] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  // const [productId, setProductId]= useState('')

  //  const toggleModal = () => {
  //   setShowModal(!showModal);    
  // };

  useEffect(() => {
    dispatch(fetchTransactionsThunk());
  }, [dispatch]);

  const switcher = (val) => {
    //switch from expenses to income
    setToggle(toggle);
  };
  return (
    <>
      {/* <SectionTransactions /> */} {/* УДАЛИТЬ?? */}
      {/*<TableData />*/} {/* УДАЛИТЬ?? */}
      {/* <Summary /> */} {/* УДАЛИТЬ?? */}
      <BalanceNavigation />
      <TransactionsNav onClick={switcher} />
      {/* <SectionTransactions /> */}
      <BackgroundImages />
       {/* {showModal && (
        <Modal onClose={toggleModal} onLogout={handleRemoveTransaction(getId)}>
          <p className={s.textModal}>Вы уверены?</p>
        </Modal>
      )} */}
    </>
  );
}
