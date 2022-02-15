import useWResize from "../../../hooks/useWindowDimensions";
import s from "./TableData.module.scss";
import sMobile from "./TableDataMobile.module.scss";
// import SimpleBar from 'simplebar-react';
// import 'simplebar/dist/simplebar.min.css';
// <SimpleBar style={{ maxHeight: 300 }}></SimpleBar>
// import dataTransactions from "../../../assets/transactionsData.json"
import { useSelector, useDispatch } from 'react-redux';
import {getTransactions} from '../../../redux/transactions/transactionsSelectors'
import {deleteTransactionThunk} from "../../../redux/transactions/transactionsThunks"

const TableData = ({currency}) => {
  const viewPort = useWResize();
  const dataTransactions = useSelector(getTransactions);
  const dispatch = useDispatch();

  const handleRemoveTransaction = (e) => {
    dispatch(deleteTransactionThunk(e.target.id))
  }
//   type(pin):false
// sum(pin):5000
// date(pin):"1970-01-01T00:00:00.029Z"
// category(pin):"Техника"
// description(pin):"TV"
// createdAt(pin):"2022-02-13T15:43:42.768Z"
// updatedAt(pin):"2022-02-13T15:43:42.768Z"
// id(pin):"6209272e4b9c7240eb529577"
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
                {dataTransactions.map(
                  ({ id, type, date, description, category, sum }) => (
                    <tr className={s.td} key={id}>
                      <td className={s.thData}>{date}</td>
                      {/* .${date.getMonth()+1}.${date.getFullYear()} */}
                      <td className={s.tdDesc}>{description}</td>
                      <td className={s.thCateg}>{category}</td>
                      <td className={type ? s.tdSum:s.tdSumExpense}>
                        {type ? '':"-"} {sum}.00 {currency}
                      </td>
                      <td className={s.thIcon}>
                        <button className={s.deleteBtn} onClick={handleRemoveTransaction} id={id}></button>
                      </td>
                    </tr>
                  )
                )}
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
                      sMobile[type ? "totalDecrement" : "totalIncrement"]
                    }
                  >
                    {type ? "- " : ""}
                    {sum}.00 {currency}
                  </p>
                  <button className={sMobile.deleteBtn} onClick={handleRemoveTransaction} id={id}></button>
                </div>
              </li>
             
            )
          )}
           </ul>
        </div>
      )}
    </>
  );
};

export default TableData;