import s from "./TotalReport.module.css";

const TotalReport = ({ incomes, expenses }) => {
  
  const totalValue = (arr) => { 
const result = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.totalValueCategory;
}, 0)
    return result
  };

  const totalIncomes = totalValue(incomes);
  const totalExpenses = totalValue(expenses);
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.item__content}>
            <p className={s.title}>Доходы:</p>
            <p className={s.incomes}>+{totalIncomes} UAH</p>
          </div>
        </li>
        <li className={s.item}>
          <div className={s.item__content}>
            <p className={s.title}>Paсходы:</p>
            <p className={s.costs}>- {totalExpenses} UAH</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default TotalReport;
