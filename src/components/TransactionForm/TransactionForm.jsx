// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addNewContact } from '../../redux/phoneBook/contacts-thunks';
import { IconContext } from "react-icons";
// import { BiCalculator } from "react-icons/bi";
import { RiCalculatorLine } from "react-icons/ri";
import Button from "../Button/Button";
import DatePickerForm from "../DatePickerForm";
import styles from "./TransactionForm.module.scss";
// import SelectForm from '../../SelectForm/SelectForm'

function TransactionForm() {
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
       
        {/* <input
          className="input"
          type="date"
          name="date"
          required
          placeholder=""
        /> */}
        <div className={styles.transactionInputsContainer}>
        <DatePickerForm />
         <div className={styles.transactionInputsContainer}>
           
          <input
            className={`${styles.transactionInput} ${styles.productDescriptionInput}`}
            type="text"
            name="description"
            required
            placeholder="Описание"
          />
            <div className={styles.productCategoryContainer}>              
            <input
              className={`${styles.transactionInput} ${styles.productCategoryInput}`}
              type="text"
              name="productCategory"
              placeholder="Категория товара"
              />
              
            {/* должно быть выпадающим списком https://react-select.com/home*/}
            {/* <ul className={styles.productCategoryList}>
              <li className={styles.productCategoryItem}>Транспорт</li>
              <li className={styles.productCategoryItem}>Исскуство</li>
              <li className={styles.productCategoryItem}>Продукты</li>
            </ul> */}
            {/* <label class="label-country" for="custom-select">
          <input class="input input-country" type="text" id="country-choice" placeholder="Choose country" autocomplete="off">
          <div class="input-triangle"></div>
        <ul class="datalist-country hidden-list" id="datalist-country"> 
        </ul>
        </label> */}
          </div>
          <div className={styles.productSumContainer}>
            {/* https://www.npmjs.com/package/react-numpad */}
              <input
              className={styles.productSumInput}
              // className={`${styles.transactionInput} ${styles.productSumInput}`}
              type="text"
              name="productSum"
              required
              placeholder="00.00"
            />
            {window.screen.width < 768 && (
              <label
                className={styles.productSumLabel}
                htmlFor="productSum">
                {`UAH`}
              </label>
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
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
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
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            // onChange={handleChange}
            placeholder="Enter new contact number"
          />
        </label> */}
    </>
  );
}
export default TransactionForm;
