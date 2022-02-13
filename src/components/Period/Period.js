import sprite from "../../images/sprite.svg";
import moment from "moment";
import "moment/locale/ru";
import s from "./Period.module.css";
import { useState } from 'react';


function Period() {
  const date = new Date();
  // eslint-disable-next-line no-unused-vars
  const [periodDate, setPeriodDate] = useState(moment(date));
  const [periodMonth, setPeriodMonth] = useState(moment(date).format('MM'));
  const [periodYear, setPeriodYear] = useState(moment(date).format('YYYY'));
  const nextMonth = () => periodDate.add(1, 'month').format('MM');
  
  const previousMonth = () => periodDate.subtract(1, 'month').format('MM');
  const previousYear = () => periodDate.subtract('year').format('YYYY');
  const nextYear = () => periodDate.add('year').format('YYYY');
 


const indexOfMonth = (periodMonth) => {
  periodMonth.forEach((month, idx) =>
   periodMonth.indexOf(month) === idx);
   
}

  const handlePreviousPeriod = () => {
      setPeriodMonth(previousMonth()); 
      indexOfMonth  && setPeriodYear(previousYear());
      
  };

   const handleNextPeriod = () => {
      setPeriodMonth(nextMonth());
     indexOfMonth && setPeriodYear(nextYear());
      
  };





return (
  <div className={s.container}>
    <p className={s.title}>Текущий период:</p>
    <div className={s.dateWrapper}>
      
        <button  type="button" onClick={handlePreviousPeriod} className={`${s.button} ${s.buttonLeft}`}>
        <svg width="8.21" height="18.24" className={`${s.icon} ${s.iconLeft}`}>
            <use href={`${sprite}#icon-arrow-left`}></use>
        </svg>
    </button>
      
    

    <p className={s.date}> {moment(periodMonth).format("MMMM")} {periodYear}</p>

    <button  type="button" onClick={handleNextPeriod} className={`${s.button} ${s.buttonRight}`}>
        <svg width="8.21" height="18.24" className={`${s.icon} ${s.iconRight}`}>
            <use href={`${sprite}#icon-arrow-right`}></use>
        </svg>
    </button>
    </div>
    
  </div>
);
}

export default Period;