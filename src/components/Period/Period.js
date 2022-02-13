import sprite from "../../images/sprite.svg";
import moment from "moment";
import "moment/locale/ru";
import s from "./Period.module.css";




function Period({
  handlePreviousPeriod,
  periodMonth,
  periodYear,
  handleNextPeriod}) {
  

return (
  <div className={s.container}>
    <p className={s.title}>Текущий период:</p>
    <div className={s.dateWrapper}>
      
        <button  type="button" onClick={handlePreviousPeriod} className={`${s.button} ${s.buttonLeft}`}>
        <svg width="6.146" height="13.785" className={`${s.icon} ${s.iconLeft}`}>
            <use href={`${sprite}#icon-arrow-left`}></use>
        </svg>
    </button>
      
    

    <p className={s.date}> {moment(periodMonth).format("MMMM")} {periodYear}</p>

    <button  type="button" onClick={handleNextPeriod} className={`${s.button} ${s.buttonRight}`}>
        <svg width="6.146" height="13.785" className={`${s.icon} ${s.iconRight}`}>
            <use href={`${sprite}#icon-arrow-right`}></use>
        </svg>
    </button>
    </div>
    
  </div>
);
}

export default Period;