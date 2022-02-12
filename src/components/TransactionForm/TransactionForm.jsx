// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addNewContact } from '../../redux/phoneBook/contacts-thunks';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { IconContext } from "react-icons";
// import { BiCalculator } from "react-icons/bi";
import { RiCalculatorLine } from "react-icons/ri";
import Button from "../Button/Button";
import DatePickerForm from "./DatePickerForm";
import CustomSelect from './CustomSelect'

import styles from "./TransactionForm.module.scss";

const categoryList = [//надо передавать пропсом, в зависимости от маршрута где отображается
  { id: "1", name: "Транспорт" },
  { id: "2", name: "Продукты" },
  { id: "3", name: "Здоровье" },
  { id: "4", name: "Алкоголь" },
]


function TransactionForm({currency}) {
  const screenWidth = useWindowDimensions();
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // // const dispatch = useDispatch();
  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newContact = { name, number};
    // dispatch(addNewContact(newContact));
    // resetFormInputs();
  };

  const resetFormInputs = () => {
    console.log("clear button click");
  };

  return (
    <>
      <form className={styles.transactionForm} onSubmit={handleSubmit}>
        <div className={styles.transactionInputsContainer}>
        <DatePickerForm />
         <div className={styles.transactionInputsContainer}>
           
          <input
            className={`${styles.transactionInput} ${styles.productDescriptionInput}`}
            type="text"
            name="description"
            required
              placeholder="Описание"
              autoComplete='off'
          />
            {/* <div> */}
            {/* <div className={styles.productCategoryContainer}> */}
              {/* кастомный выпадающий списом*/}
              <CustomSelect
                optionsList={categoryList}
                placeholderText={"Категория товара"} />
          {/* </div> */}
          <div className={styles.productSumContainer}>
            {/* необходимо добавить NumPad https://www.npmjs.com/package/react-numpad */}
              <input
              className={styles.productSumInput}
              // className={`${styles.transactionInput} ${styles.productSumInput}`}
              type="text"
              name="productSum"
              required
                placeholder="00.00"
                autoComplete='off'
            />
            {screenWidth < 768 && (
              <span className={styles.productSumLabel}>
                {currency}
              </span>
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
          <Button type={"submit"} title={"Add"} />
          <Button
            type={"button"}
            title={"Clear"}
            handleClick={resetFormInputs}
          />
        </div>
      </form>

      {/* <label>
          <p>Name</p>
          <input
            className="input"
            type="text"
            name="name"
            // value={name}            
            required
            // onChange={handleChange}
            placeholder="Enter new contact name"
          />
        </label>
        <label>
          <p>Number</p>
          <input
            className="input"
            type="tel"
            name="number"
            // value={number}            
            required
            // onChange={handleChange}
            placeholder="Enter new contact number"
          />
        </label> */}
    </>
  );
}
export default TransactionForm;
