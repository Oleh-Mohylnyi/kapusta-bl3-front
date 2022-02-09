import s from "./TotalReport.module.css";



const TotalReport = () => {
  //из редакса берем общие суммы доходов и расходов
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.item__content}>
            <h3 className={s.title}>Расходы:</h3>
            <span className={s.costs}>-18000.00 грн</span>
          </div>
        </li>
        <li className={s.item}>
          <div className={s.item__content}>
            <h3 className={s.title}>Доходы:</h3>
            <span className={s.incomes}>+50000.00 грн</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default TotalReport;
