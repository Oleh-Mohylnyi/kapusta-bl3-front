import { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
// import { useDispatch } from "react-redux";
// import * as userActions from "";
import { PropTypes } from "prop-types";
import s from "./DatePickerForm.module.scss";

const DatePickerForm = ({ piker }) => {
  // const dispatch = useDispatch();

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className={s.input} onClick={onClick} ref={ref}>
      <div className={s.wrapperSvg}>
        {/* <svg
          width="20"
          height="20"
                    xmlns=""
        >
          <path
            
            
          />
          <path
            
            
          />
        </svg> */}
      </div>
      {value}
    </div>
  ));

  return (
    <>
      <div className={s.wrapper}>
        {piker && (
          <ReactDatePicker
            selected={piker}
            dateFormat="dd.MM.y"
            maxDate={new Date()}
            // onChange={(date) =>
            //   dispatch(userActions.changeCurrentDay(date.getTime()))
            // }
            customInput={<ExampleCustomInput />}
                      />
        )}
      </div>
    </>
  );
};

DatePickerForm.propTypes = {
  piker: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DatePickerForm;