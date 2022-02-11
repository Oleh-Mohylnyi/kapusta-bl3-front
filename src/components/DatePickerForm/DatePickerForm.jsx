import { forwardRef } from "react"; //https://learn-reactjs.ru/core/forwarding-refs
// import ReactDatePicker from "react-datepicker";

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import { useDispatch } from "react-redux";
// import * as userActions from "";
// import { PropTypes } from "prop-types";
import s from "./DatePickerForm.module.scss";

// ------pervious----
// const DatePickerForm = ({ piker }) => {
//   // const dispatch = useDispatch();

//   const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
//     <div className={s.input} onClick={onClick} ref={ref}>
//       <div className={s.wrapperSvg}>
//         {/* <svg
//           width="20"
//           height="20"
//                     xmlns=""
//         >
//           <path

//           />
//           <path

//           />
//         </svg> */}
//       </div>
//       {value}
//     </div>
//   ));

//   return (
//     <>
//       <div className={s.wrapper}>
//         {piker && (
//           <ReactDatePicker
//             selected={piker}
//             dateFormat="dd.MM.y"
//             maxDate={new Date()}
//             // onChange={(date) =>
//             //   dispatch(userActions.changeCurrentDay(date.getTime()))
//             // }
//             customInput={<ExampleCustomInput />}
//                       />
//         )}
//       </div>
//     </>
//   );
// };

const DatePickerForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  //  const handleChange = e => {
  //   const { name, value } = e.target;
  //     name==='date' && setStartDate(value)

  // };

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className={s.input} onClick={onClick} ref={ref}>
      <div className={s.wrapperSvg}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M17.475 2.067h-1.312v-.321a.586.586 0 1 0-1.172 0v.321h-1.617v-.321a.586.586 0 1 0-1.172 0v.321h-1.617v-.321a.586.586 0 1 0-1.172 0v.321H7.796v-.321a.586.586 0 1 0-1.172 0v.321H5.007v-.321a.586.586 0 1 0-1.172 0v.321H2.523A2.528 2.528 0 0 0-.002 4.592v11.724a2.528 2.528 0 0 0 2.525 2.525h14.951a2.528 2.528 0 0 0 2.525-2.525V4.592a2.528 2.528 0 0 0-2.525-2.525zm1.353 14.249c0 .746-.607 1.353-1.353 1.353H2.524a1.355 1.355 0 0 1-1.353-1.353V6.733h17.656v9.583zm0-10.756H1.172v-.969c0-.746.607-1.353 1.353-1.353h1.312v.227a.586.586 0 1 0 1.172 0v-.227h1.617v.227a.586.586 0 1 0 1.172 0v-.227h1.617v.227a.586.586 0 1 0 1.172 0v-.227h1.617v.227a.586.586 0 1 0 1.172 0v-.227h1.617v.227a.586.586 0 1 0 1.172 0v-.227h1.312c.746 0 1.353.607 1.353 1.353v.969z" />
          <path d="M6.532 7.982H4.22a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586V8.568a.586.586 0 0 0-.586-.586zm-.586 2.392h-1.14v-1.22h1.14v1.22zM11.156 7.982H8.844a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586V8.568a.586.586 0 0 0-.586-.586zm-.586 2.392H9.43v-1.22h1.14v1.22zM15.78 7.982h-2.312a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586V8.568a.586.586 0 0 0-.586-.586zm-.586 2.392h-1.14v-1.22h1.14v1.22zM6.532 12.526H4.22a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586zm-.586 2.392h-1.14v-1.22h1.14v1.22zM11.156 12.526H8.844a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586zm-.586 2.392H9.43v-1.22h1.14v1.22zM15.78 12.526h-2.312a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586zm-.586 2.392h-1.14v-1.22h1.14v1.22z" />
        </svg>
      </div>
      {/* <input type='text' name='date' value={value} onChange={handleChange} /> */}
      {value}
    </div>
  ));
  //     const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
  //   <button className="example-custom-input" onClick={onClick} ref={ref}>
  //     {value}
  //   </button>
  // ));

  return (
    <div className={s.wrapper}>
      {/* <div style={{display: 'block', width:'104px', height:'40px'}}>     */}
      <DatePicker
        selected={startDate}
        dateFormat="dd.MM.yyyy"
        maxDate={new Date()}
        // onKeyDown=
        onChange={(date) => setStartDate(date)}
        closeOnScroll={true}
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};


// DatePickerForm.propTypes = {
//   piker: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

export default DatePickerForm;

// <span class="datepicker-toggle">
//   <span class="datepicker-toggle-button"></span>
//   <input type="date" class="datepicker-input">
// </span>
