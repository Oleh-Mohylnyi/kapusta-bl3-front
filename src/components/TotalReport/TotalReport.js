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
            <h3 className={s.title}>Расходы:</h3>
            <span className={s.costs}>- {totalExpenses} грн</span>
          </div>
        </li>
        <li className={s.item}>
          <div className={s.item__content}>
            <h3 className={s.title}>Доходы:</h3>
            <span className={s.incomes}>+{totalIncomes}грн</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default TotalReport;
