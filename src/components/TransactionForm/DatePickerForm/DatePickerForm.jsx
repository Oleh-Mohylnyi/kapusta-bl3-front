import React from "react";
import { forwardRef } from "react";
//https://learn-reactjs.ru/core/forwarding-refs
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import s from "./DatePickerForm.module.scss";
import styles from '../TransactionForm.module.scss'



const DatePickerForm = ({ cbSetDate, date }) => {

   const handleChange = (date) => {
     cbSetDate(date)
  };
  
  const CustomInput = forwardRef(({value, onClick }, ref) => (    
    <div className={s.customInput} onClick={onClick} ref={ref} data-dateinput>
      <div className={s.customInputIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M17.475 2.067h-1.312v-.321a.586.586 0 1 0-1.172 0v.321h-1.617v-.321a.586.586 0 1 0-1.172 0v.321h-1.617v-.321a.586.586 0 1 0-1.172 0v.321H7.796v-.321a.586.586 0 1 0-1.172 0v.321H5.007v-.321a.586.586 0 1 0-1.172 0v.321H2.523A2.528 2.528 0 0 0-.002 4.592v11.724a2.528 2.528 0 0 0 2.525 2.525h14.951a2.528 2.528 0 0 0 2.525-2.525V4.592a2.528 2.528 0 0 0-2.525-2.525zm1.353 14.249c0 .746-.607 1.353-1.353 1.353H2.524a1.355 1.355 0 0 1-1.353-1.353V6.733h17.656v9.583zm0-10.756H1.172v-.969c0-.746.607-1.353 1.353-1.353h1.312v.227a.586.586 0 1 0 1.172 0v-.227h1.617v.227a.586.586 0 1 0 1.172 0v-.227h1.617v.227a.586.586 0 1 0 1.172 0v-.227h1.617v.227a.586.586 0 1 0 1.172 0v-.227h1.617v.227a.586.586 0 1 0 1.172 0v-.227h1.312c.746 0 1.353.607 1.353 1.353v.969z" />
          <path d="M6.532 7.982H4.22a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586V8.568a.586.586 0 0 0-.586-.586zm-.586 2.392h-1.14v-1.22h1.14v1.22zM11.156 7.982H8.844a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586V8.568a.586.586 0 0 0-.586-.586zm-.586 2.392H9.43v-1.22h1.14v1.22zM15.78 7.982h-2.312a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586V8.568a.586.586 0 0 0-.586-.586zm-.586 2.392h-1.14v-1.22h1.14v1.22zM6.532 12.526H4.22a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586zm-.586 2.392h-1.14v-1.22h1.14v1.22zM11.156 12.526H8.844a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586zm-.586 2.392H9.43v-1.22h1.14v1.22zM15.78 12.526h-2.312a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586zm-.586 2.392h-1.14v-1.22h1.14v1.22z" />
        </svg>
      </div>
      {/* <input type='text' name='date' value={value} onChange={handleChange} /> */}
      {value}
    </div>
  ));
 
  return (
    <div className={styles.dateInputContainer}>      
      <DatePicker
        data-name="date"//вдруг нужно будет, не используется        
        selected={date}
        dateFormat="dd.MM.yyyy"
        maxDate={new Date()}
        onChange={handleChange}
        closeOnScroll={true}
        customInput={<CustomInput />}        
      />
    </div>
  );
};

export default DatePickerForm;
