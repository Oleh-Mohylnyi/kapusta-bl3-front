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

// ----examples-----
// https://reactdatepicker.com/
// https://github.com/Hacker0x01/react-datepicker
// https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md
// with custom input:
// const DatePickerForm = () => {
// const [startDate, setStartDate] = useState(new Date());
// const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
// <button className="example-custom-input" onClick={onClick} ref={ref}>
// {value}
// </button>
// ));
// return (
// <DatePicker
// selected={startDate}
// onChange={(date) => setStartDate(date)}
// customInput={<ExampleCustomInput />}
// />
// );
// };

// custom date format
// () => {
// const [startDate, setStartDate] = useState(new Date());
// return (
// <DatePicker
// dateFormat="yyyy/MM/dd"
// selected={startDate}
// onChange={(date) => setStartDate(date)}
// />
// );
// };

// Disable datepicker
// () => {
// const [startDate, setStartDate] = useState(null);
// return (
// <DatePicker
// selected={startDate}
// onChange={(date) => setStartDate(date)}
// disabled
// placeholderText="This is disabled"
// />
// );
// };

// Read only datepicker
// () => {
// const [startDate, setStartDate] = useState(null);
// return (
// <DatePicker
// selected={startDate}
// onChange={(date) => setStartDate(date)}
// placeholderText="This is readOnly"
// readOnly
// />
// );
// };

// Exclude date intervals
// () => {
// const [startDate, setStartDate] = useState(new Date());
// return (
// <DatePicker
// selected={startDate}
// onChange={date => setStartDate(date)}
// excludeDateIntervals={[{start: subDays(new Date(), 5), end: addDays(new Date(), 5) }]}
// placeholderText="Select a date other than the interval from 5 days ago to 5 days in the future"
// />
// );
// };

// Button to show Inline version -возможно использовать для селекта
// () => {
// const [startDate, setStartDate] = useState(new Date());
// const [isOpen, setIsOpen] = useState(false);
// const handleChange = (e) => {
// setIsOpen(!isOpen);
// setStartDate(e);
// };
// const handleClick = (e) => {
// e.preventDefault();
// setIsOpen(!isOpen);
// };
// return (
// <>
// <button className="example-custom-input" onClick={handleClick}>
// {format(startDate, "dd-MM-yyyy")}
// </button>
// {isOpen && (
// <DatePicker selected={startDate} onChange={handleChange} inline />
// )}
// </>
// );
// };

//Max date
// () => {
// const [startDate, setStartDate] = useState(new Date());
// return (
// <DatePicker
// selected={startDate}
// onChange={(date) => setStartDate(date)}
// maxDate={addDays(new Date(), 5)}
// placeholderText="Select a date before 5 days in the future"
// />
// );
// };

// Month dropdown
// () => {
// const [startDate, setStartDate] = useState(new Date());
// return (
// <DatePicker
// selected={startDate}
// onChange={(date) => setStartDate(date)}
// showMonthDropdown
// />
// );
// };

// MonthYear dropdown
// () => {
// const [startDate, setStartDate] = useState(new Date());
// return (
// <DatePicker
// selected={startDate}
// onChange={(date) => setStartDate(date)}
// dateFormatCalendar={"MMM yyyy"}
// minDate={subMonths(new Date(), 6)}
// maxDate={addMonths(new Date(), 6)}
// showMonthYearDropdown
// />
// );
// };

// custom calendar class name
// () => {
// const [startDate, setStartDate] = useState(new Date());
// return (
// <DatePicker
// selected={startDate}
// onChange={(date) => setStartDate(date)}
// calendarClassName="rasta-stripes"
// />
// );
// };

// with styling calendar:
// () => {
// const [startDate, setStartDate] = useState(new Date());
// const MyContainer = ({ className, children }) => {
// return (
// <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
// <CalendarContainer className={className}>
// <div style={{ background: "#f0f0f0" }}>
// What is your favorite day?
// </div>
// <div style={{ position: "relative" }}>{children}</div>
// </CalendarContainer>
// </div>
// );
// };
// return (
// <DatePicker
// selected={startDate}
// onChange={(date) => setStartDate(date)}
// calendarContainer={MyContainer}
// />
// );
// };

// close with scroll:
// () => {
// const [startDate, setStartDate] = useState(new Date());
// return (
// <DatePicker
// closeOnScroll={true}
// selected={startDate}
// onChange={(date) => setStartDate(date)}
// />
// );
// };

// with Configure Popper Properties:
// () => {
// const [startDate, setStartDate] = useState(new Date());
// return (
// <DatePicker
// selected={startDate}
// onChange={(date) => setStartDate(date)}
// popperClassName="some-custom-class"
// popperPlacement="top-end"
// popperModifiers={[
// {
// name: "offset",
// options: {
// offset: [5, 10],
// },
// },
// {
// name: "preventOverflow",
// options: {
// rootBoundary: "viewport",
// tether: false,
// altAxis: true,
// },
// },
// ]}
// />
// );
// };

// with Custom header
// () => {
// const [startDate, setStartDate] = useState(new Date());
// const years = range(1990, getYear(new Date()) + 1, 1);
// const months = [
// "January",
// "February",
// "March",
// "April",
// "May",
// "June",
// "July",
// "August",
// "September",
// "October",
// "November",
// "December",
// ];
// return (
// <DatePicker
// renderCustomHeader={({
// date,
// changeYear,
// changeMonth,
// decreaseMonth,
// increaseMonth,
// prevMonthButtonDisabled,
// nextMonthButtonDisabled,
// }) => (
// <div
// style={{
//             margin: 10,
//             display: "flex",
//             justifyContent: "center",
//           }}
// >
// <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
// {"<"}
// </button>
// <select
// value={getYear(date)}
// onChange={({ target: { value } }) => changeYear(value)}
// >
// {years.map((option) => (
// <option key={option} value={option}>
// {option}
// </option>
// ))}
// </select>

// <select
// value={months[getMonth(date)]}
// onChange={({ target: { value } }) =>
// changeMonth(months.indexOf(value))
// }
// >
// {months.map((option) => (
// <option key={option} value={option}>
// {option}
// </option>
// ))}
// </select>

// <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
// {">"}
// </button>
// </div>
// )}
// selected={startDate}
// onChange={(date) => setStartDate(date)}
// />
// );
// };
// 2 month display
// () => {
// const [startDate, setStartDate] = useState(new Date());
// return (
// <DatePicker
// renderCustomHeader={({
// monthDate,
// customHeaderCount,
// decreaseMonth,
// increaseMonth,
// }) => (
// <div>
// <button
// aria-label="Previous Month"
// className={
// "react-datepicker**navigation react-datepicker**navigation--previous"
// }
// style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
// onClick={decreaseMonth}
// >
// <span
// className={
// "react-datepicker**navigation-icon react-datepicker**navigation-icon--previous"
// }
// >
// {"<"}
// </span>
// </button>
// <span className="react-datepicker__current-month">
// {monthDate.toLocaleString("en-US", {
// month: "long",
// year: "numeric",
// })}
// </span>
// <button
// aria-label="Next Month"
// className={
// "react-datepicker**navigation react-datepicker**navigation--next"
// }
// style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
// onClick={increaseMonth}
// >
// <span
// className={
// "react-datepicker**navigation-icon react-datepicker**navigation-icon--next"
// }
// >
// {">"}
// </span>
// </button>
// </div>
// )}
// selected={startDate}
// onChange={(date) => setStartDate(date)}
// monthsShown={2}
// />
// );
// };
