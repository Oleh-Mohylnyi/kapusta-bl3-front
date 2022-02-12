import useWResize from "../../../hooks/useWindowDimensions";
import s from "./TableData.module.scss";
import sMobile from "./TableDataMobile.module.scss";
// import SimpleBar from 'simplebar-react';
// import 'simplebar/dist/simplebar.min.css';
// <SimpleBar style={{ maxHeight: 300 }}></SimpleBar>

const TableData = ({
  dataTransactions = [],

  isExpense = false,
}) => {
  const viewPort = useWResize();

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
                  ({ _id, date, description, category, amount }) => (
                    <tr className={s.td} key={_id}>
                      <td className={s.thData}>{date}</td>
                      <td className={s.tdDesc}>{description}</td>
                      <td className={s.thCateg}>{category}</td>
                      <td className={isExpense ? s.tdSumExpense : s.tdSum}>
                        {isExpense ? " - " : ""}
                        {amount}.00 грн.
                      </td>
                      <td className={s.thIcon}>
                        <button className={s.deleteBtn}></button>
                      </td>
                    </tr>
                  )
                )}

                <tr className={s.td}>
                  <td className={s.thData}>10.02.2022</td>
                  <td className={s.tdDesc}>Метро</td>
                  <td className={s.thCateg}>Транспорт</td>
                  <td className={isExpense ? s.tdSumExpense : s.tdSum}>
                    -30,00 грн
                  </td>
                  <td className={s.thIcon}>
                    <button className={sMobile.deleteBtn}></button>
                  </td>
                </tr>

                <tr className={s.td}>
                  <td className={s.thData}>10.02.2022</td>
                  <td className={s.tdDesc}>Метро</td>
                  <td className={s.thCateg}>Транспорт</td>
                  <td className={isExpense ? s.tdSumExpense : s.tdSum}>
                    -30,00 грн
                  </td>
                  <td className={s.thIcon}>
                    <button className={sMobile.deleteBtn}></button>
                  </td>
                </tr>

                <tr className={s.td}>
                  <td className={s.thData}>10.02.2022</td>
                  <td className={s.tdDesc}>Метро</td>
                  <td className={s.thCateg}>Транспорт</td>
                  <td className={isExpense ? s.tdSumExpense : s.tdSum}>
                    -30,00 грн
                  </td>
                  <td className={s.thIcon}>
                    <button className={sMobile.deleteBtn}></button>
                  </td>
                </tr>

                <tr className={s.td}>
                  <td className={s.thData}>10.02.2022</td>
                  <td className={s.tdDesc}>Метро</td>
                  <td className={s.thCateg}>Транспорт</td>
                  <td className={isExpense ? s.tdSumExpense : s.tdSum}>
                    -30,00 грн
                  </td>
                  <td className={s.thIcon}>
                    <button className={sMobile.deleteBtn}></button>
                  </td>
                </tr>

                <tr className={s.td}>
                  <td className={s.thData}>10.02.2022</td>
                  <td className={s.tdDesc}>Метро</td>
                  <td className={s.thCateg}>Транспорт</td>
                  <td className={isExpense ? s.tdSumExpense : s.tdSum}>
                    -30,00 грн
                  </td>
                  <td className={s.thIcon}>
                    <button className={sMobile.deleteBtn}></button>
                  </td>
                </tr>

                <tr className={s.td}>
                  <td className={s.thData}>10.02.2022</td>
                  <td className={s.tdDesc}>Метро</td>
                  <td className={s.thCateg}>Транспорт</td>
                  <td className={isExpense ? s.tdSumExpense : s.tdSum}>
                    -30,00 грн
                  </td>
                  <td className={s.thIcon}>
                    <button className={sMobile.deleteBtn}></button>
                  </td>
                </tr>

                <tr className={s.td}>
                  <td className={s.thData}>10.02.2022</td>
                  <td className={s.tdDesc}>Метро</td>
                  <td className={s.thCateg}>Транспорт</td>
                  <td className={isExpense ? s.tdSumExpense : s.tdSum}>
                    -30,00 грн
                  </td>
                  <td className={s.thIcon}>
                    <button className={sMobile.deleteBtn}></button>
                  </td>
                </tr>

                <tr className={s.td}>
                  <td className={s.thData}>10.02.2022</td>
                  <td className={s.tdDesc}>Метро</td>
                  <td className={s.thCateg}>Транспорт</td>
                  <td className={isExpense ? s.tdSumExpense : s.tdSum}>
                    -30,00 грн
                  </td>
                  <td className={s.thIcon}>
                    <button className={sMobile.deleteBtn}></button>
                  </td>
                </tr>

                <tr className={s.td}>
                  <td className={s.thData}>10.02.2022</td>
                  <td className={s.tdDesc}>Метро</td>
                  <td className={s.thCateg}>Транспорт</td>
                  <td className={isExpense ? s.tdSumExpense : s.tdSum}>
                    -30,00 грн
                  </td>
                  <td className={s.thIcon}>
                    <button className={sMobile.deleteBtn}></button>
                  </td>
                </tr>

                <tr className={s.td}>
                  <td className={s.thData}>10.02.2022</td>
                  <td className={s.tdDesc}>Метро</td>
                  <td className={s.thCateg}>Транспорт</td>
                  <td className={isExpense ? s.tdSumExpense : s.tdSum}>
                    -30,00 грн
                  </td>
                  <td className={s.thIcon}>
                    <button className={sMobile.deleteBtn}></button>
                  </td>
                </tr>

                <tr className={s.td}>
                  <td className={s.thData}>10.02.2022</td>
                  <td className={s.tdDesc}>Метро</td>
                  <td className={s.thCateg}>Транспорт</td>
                  <td className={isExpense ? s.tdSumExpense : s.tdSum}>
                    -30,00 грн
                  </td>
                  <td className={s.thIcon}>
                    <button className={sMobile.deleteBtn}></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {viewPort.width < 768 && (
        <div>
          {dataTransactions.map(
            ({ _id, date, description, category, amount }) => (
              <li className={sMobile.itemTransactions} key={_id}>
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
                      sMobile[isExpense ? "totalDecrement" : "totalIncrement"]
                    }
                  >
                    {isExpense ? "- " : ""}
                    {amount}.00 грн.
                  </p>
                  <button className={sMobile.deleteBtn}></button>
                </div>
              </li>
            )
          )}
          <ul className={sMobile.listTransactions}>
            <li className={sMobile.itemTransactions}>
              <div className={sMobile.leftColum}>
                <p className={sMobile.elem}>
                  <span>Метро</span>
                </p>
                <p className={sMobile.data}>
                  <span>10.02.2022</span>
                  <span>Транспорт</span>
                </p>
              </div>
              <div className={sMobile.rigthColum}>
                <p
                  className={
                    sMobile[isExpense ? "totalDecrement" : "totalIncrement"]
                  }
                >
                  -30.00 грн
                </p>
                <button className={sMobile.deleteBtn}></button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default TableData;
