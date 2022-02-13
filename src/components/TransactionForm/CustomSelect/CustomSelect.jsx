import React, { useEffect, useState } from "react";
import sprite from "../../../images/sprite.svg";
import s from "./CustomSelect.module.scss";
import styles from "../TransactionForm.module.scss";

function CustomSelect({
  inputValue,
  cbSetCategory,
  optionsList,
  placeholderText,
  // containerStyle, //чтобы уневерсилизировать компонент, когда будет время чистки кода
  // inputStyle, //чтобы уневерсилизировать компонент, когда будет время чистки кода
  // listStyle, //чтобы уневерсилизировать компонент, когда будет время чистки кода
  // optionStyle //чтобы уневерсилизировать компонент, когда будет время чистки кода
}) {
  
  // const [inputValue, setInputValue] = useState(undefined);
  const [isListShown, setIsListShown] = useState(false);
  // const [placeholderValue, setPlaceholderValue] = useState(placeholderText); //если сделать ипут, может пригодится

  useEffect(() => {
    const handleClickOutside = (e) => {

      (!e.target.hasAttribute("data-input") &&
        !e.target.hasAttribute("data-option") &&
        !e.target.hasAttribute("data-icon")) &&
        setIsListShown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   !inputValue && cbSetCategory(inputValue);
  //   // eslint-disable-next-line
  // },[inputValue])

  const handleListDisplay = () => {
    setIsListShown(!isListShown);
  };

  const handleOptionClick = (e) => {
    // setInputValue(e.target.getAttribute("data-name"));
    cbSetCategory(e.target.getAttribute("data-name"))
    setIsListShown(false);
  };

  return (
    <div className={styles.productCategoryContainer}>
      <div
        className={
          isListShown
            ? `${styles.productCategoryInput} ${styles.active}`
            : styles.productCategoryInput
        }
        data-input
        onClick={handleListDisplay}
      >
        {inputValue ? inputValue : placeholderText}
        <svg className={s.icon} data-icon>
        {isListShown ? (
         
            <use href={`${sprite}#icon-select-arrow-up`} data-icon></use>
          
        ) : (
          
          <use href={`${sprite}#icon-select-arrow-down`} data-icon></use>
        )}
     </svg>
      </div>
   
      {/* <input
              className={`${styles.transactionInput} ${styles.productCategoryInput}`}
              type="text"
              name="productCategory"
              placeholder="Категория товара"
              /> */}
      <ul
        className={
          isListShown
            ? `${s.selectOptionsList}`
            : `${s.selectOptionsList} ${s.isHidden}`
        }
      >
        {optionsList.map((option) => {
          return (
            <li
              className={`${s.selectOptionsItem} option`}
              data-name={option.name}              
              key={option.id}
              onClick={handleOptionClick}
              data-option
            >
              {option.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CustomSelect;
