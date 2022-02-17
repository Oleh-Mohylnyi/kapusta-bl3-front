import { useState } from "react";
import SectionTransactions from "../SectionTransactions";
import s from "./TransactionsNav.module.scss";

const TransactionsNav = () => {

  const [toggle, setToggle] = useState(false);

  const toggleFalse = (e) => {
    setToggle(false);
  };

  const  toggleTrue = (e) => {
    setToggle(true);
  };

  return (
    <>
      <div className={s.navList}>
        <button onClick={toggleFalse} className={
             !toggle ? ` ${s.active}` : ` ${s.link}`
            }>
          <h2 className={ !toggle ? ` ${s.titleActive}` : ` ${s.titleLink}`}>Расход</h2>
        </button>

        <button onClick={toggleTrue} className={
             toggle ? ` ${s.active}` : ` ${s.link}`
            }>
          <h2 className={ toggle ? ` ${s.titleActive}` : ` ${s.titleLink}`}>Доход</h2>
        </button>
      </div>
      <SectionTransactions toggle={toggle}/>
    </>
  );
};

export default TransactionsNav;
