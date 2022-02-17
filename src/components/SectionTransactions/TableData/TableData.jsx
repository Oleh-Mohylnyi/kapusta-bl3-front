import { useState } from "react";
import useWResize from "../../../hooks/useWindowDimensions";
import s from "./TableData.module.scss";
import sMobile from "./TableDataMobile.module.scss";
import Modal from "../../../components/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { getTransactions } from "../../../redux/transactions/transactionsSelectors";
import { deleteTransactionThunk } from "../../../redux/transactions/transactionsThunks";
import {
  getMonthlyIncomesThunk,
  getMonthlyExpensesThunk,
  fetchBalanceThunk,
} from "../../../redux/reports/reportsThunk";

const TableData = ({ currency, currentType = true }) => {
  const viewPort = useWResize();
  const dataTransactions = useSelector(getTransactions);
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const dispatch = useDispatch();

   const handleRemove = (e) => {
    toggleModal()
    setCurrentId(e.target.id);
  }

  console.log(dataTransactions)

  const handleRemoveTransaction = (id) => {
    dispatch(deleteTransactionThunk(id));
    dispatch(getMonthlyIncomesThunk());
    dispatch(getMonthlyExpensesThunk());
    dispatch(fetchBalanceThunk());
    toggleModal()
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const dataConverter = (date) => {
    const allDate = date.slice(0, 10);
    const year = allDate.slice(0, 4);
    const month = allDate.slice(-5, -3);
    const day = allDate.slice(-2);
    const newDate = `${day}.${month}.${year}`;

    return newDate;
  };
    return (
    <>
      {viewPort.width >= 768 && (
        <div className={s.scroll_table} id={s.style2}>
          <table className={s.main}>
            <thead className={s.theadTable}>
              <tr>
                <th className={`${s.th} ${s.thData}`}>ДАТА</th>
                <th className={`${s.th} ${s.thData}`}>ОПИСАНИЕ</th>
                <th className={`${s.th} ${s.thData}`}>КАТЕГОРИЯ</th>
                <th className={`${s.th} ${s.thData}`}>СУММА</th>
                <th className={`${s.th} ${s.thData}`}></th>
              </tr>
            </thead>
          </table>
          <div className={s.scroll_table__body}>
            <table>
              <tbody>
                {dataTransactions
                  .filter(({ type }) => type === currentType).sort(({createdAt})=>createdAt.b-createdAt.a)
                  .map(({ id, type, date, description, category, sum }) => (
                    <tr className={s.td} key={id}>
                      <td className={s.thData}>{dataConverter(date)}</td>                      
                      <td className={s.tdDesc}>{description}</td>
                      <td className={s.thCateg}>{category}</td>
                      <td className={type ? s.tdSum : s.tdSumExpense}>
                        {type ? "" : "-"} {sum}
                      </td>
                      <td className={s.thIcon}>
                        <button
                          className={s.deleteBtn}
                          onClick={handleRemove}
                          id={id}
                        ></button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {viewPort.width < 768 && (
        <div>
          <ul className={sMobile.listTransactions}>
            {dataTransactions.map(
              ({ id, type, date, description, category, sum }) => (
                <li className={sMobile.itemTransactions} key={id}>
                  <div className={sMobile.leftColum}>
                    <p className={sMobile.elem}>
                      <span>{description}</span>
                    </p>
                    <p className={sMobile.data}>
                      <span>{date}</span>
                      <span>{category}</span>
                    </p>
                  </div>
                  <div className={sMobile.rigthColum}>
                    <p
                      className={
                        sMobile[type ? "totalIncrement" : "totalDecrement"]
                      }
                    >
                      {type ? "" : "- "}
                      {sum}
                    </p>
                    <button
                      className={sMobile.deleteBtn}
                      onClick={handleRemove}
                      id={id}
                    ></button>
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
      {showModal && (
        <Modal onClose={toggleModal} okClick={()=>{handleRemoveTransaction(currentId)}}>
          <p className={s.textModal}>Вы уверены?</p>
        </Modal>
      )}
    </>
  );
};

export default TableData;
