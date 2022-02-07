import s from "./TableData.module.scss";

const TableData = ({ isExpense = false }) => {
  return (
    <>
      {
        <div className={s.bodyTable} id={s.style2}>
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
            <tbody>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    </>
  );
};

export default TableData;
