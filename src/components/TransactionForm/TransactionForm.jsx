import { useState } from "react";
// import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTransactionThunk } from "../../redux/transactions/transactionsThunks";
// import useWindowDimensions from "../../hooks/useWindowDimensions";
import { IconContext } from "react-icons";
// import { BiCalculator } from "react-icons/bi";
import { RiCalculatorLine } from "react-icons/ri";
import Button from "../Button/Button";
import DatePickerForm from "./DatePickerForm";
import CustomSelect from "./CustomSelect";

import styles from "./TransactionForm.module.scss";

import categoryList from "../../assets/categories.json";

function TransactionForm({ currency, type=true }) { // когда решу откуда и как придет 'type', убрать значение по умолчанию
  // const screenWidth = useWindowDimensions();
  const startDate = new Date();
  const typeToString = type?'income':'expenses'
  const filteredCategoryList = categoryList.filter((category) => category.type === typeToString)
  // const { pathname } = useLocation();
  // console.log("TransactionForm pathname", pathname);
  // console.log("TransactionForm findDatepickerAtribute", document.element.dataset.name);

  const dispatch = useDispatch();
  
  const [transactionDate, setTransactionDate] = useState(startDate);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(undefined);
  const [sum, setSum] = useState("");
  // const [isResetValue, setIsResetValue] = useState(false);

  // useEffect(()=>{
  //   (!date || !description || !category || !sum) && setIsResetValue(false)
  // },[date, description, category, sum])

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "description":
        setDescription(value);
        break;
      case "sum":
        setSum(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTransaction = {
      type,
      date: transactionDate.toDateString(),
      description,
      category,
      sum
    };
    console.log("TransactionForm submit", newTransaction);
    
    dispatch(addTransactionThunk(newTransaction));
    resetForm();
  };

  const resetForm = () => {
    console.log("clear button click");
    setDescription("");
    setSum("");
    setTransactionDate(new Date());
    setCategory(undefined);
  };

  // const resetInputsData = () => {
  //   console.log("clear button click");
  //   // resetTransactionFormState();
  //   // setIsResetValue(true);
  //   // resetDateValue()
  //   // resetCategoryValue()
  // };

  return (
    <>
      <form className={styles.transactionForm} onSubmit={handleSubmit}>
        <div className={styles.toRowContainer}>
          <DatePickerForm
            cbSetDate={setTransactionDate}
            date={transactionDate}/>
          <div className={styles.toRowContainer}>
            <input
              className={`${styles.transactionInput} ${styles.productDescriptionInput}`}
              type="text"
              name="description"
              value={description}              
              placeholder="Описание"
              autoComplete="off"
              onChange={handleChange}              
            />
            {/* <div> */}
            {/* <div className={styles.productCategoryContainer}> */}
            {/* кастомный выпадающий списом*/}
            <CustomSelect              
              inputValue={category}
              optionsList={filteredCategoryList}
              placeholderText={"Категория"}
              cbSetCategory={setCategory}
              required
            />
            {/* </div> */}
            <div className={styles.productSumContainer}>
              {/* вероятно необходимо добавить NumPad https://www.npmjs.com/package/react-numpad */}
              <input
                className={styles.productSumInput}
                // className={`${styles.transactionInput} ${styles.productSumInput}`}
                type="text"
                name="sum"
                value={sum}
                required
                placeholder="00.00"
                autoComplete="off"
                onChange={handleChange}
              />
              {/* {screenWidth < 768 && ( */}
              {window.screen.width < 768 && (
                <span className={styles.productSumLabel}>{currency}</span>
              )}
              <span className={styles.productSumIcon}>
                <IconContext.Provider
                  value={{ style: { height: "20px", width: "20px" } }}
                >
                  <RiCalculatorLine />
                </IconContext.Provider>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.formButtonsContainer}>
          <Button type={"submit"} title={"Добавить"} />
          <Button
            type={"button"}
            title={"Очистить"}
            handleClick={resetForm}
          />
        </div>
      </form>
    </>
  );
}
export default TransactionForm;
