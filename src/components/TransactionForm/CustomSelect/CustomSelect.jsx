import React, { useEffect, useState } from "react";
import s from "./CustomSelect.module.scss";
import styles from '../TransactionForm.module.scss'

function CustomSelect({
  optionsList,
  placeholderText,
  containerStyle,
  inputStyle,
  listStyle,
  optionStyle
}) {
  // const [selectOptionsList, setSelectOptionsList] = useState(optionsList);
  const [inputValue, setInputValue] = useState(undefined);
  const [isListShown, setIsListShown] = useState(false);
  // const [placeholderValue, setPlaceholderValue] = useState(placeholderText);

  useEffect(() => {
    const handleClickOutside = (e) => {
    console.log("clickOutside", e.target.classList);

    !e.target.classList.contains("input") &&
      !e.target.classList.contains("option") &&
      setIsListShown(false);

    // if (
    //   e.target.name !=="selectOption" &&
    //   e.target.name !== "input"
    // ) {return setIsListShown(false)
    // }
  };
    document.addEventListener("mousedown", handleClickOutside);
    
    return ()=> {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    
  }, []);

  // const handleClickOutside = (e) => {
  //   console.log("clickOutside", e.target.classList);

  //   !e.target.classList.contains("input") &&
  //     !e.target.classList.contains("option") &&
  //     setIsListShown(false);

  //   // if (
  //   //   e.target.name !=="selectOption" &&
  //   //   e.target.name !== "input"
  //   // ) {return setIsListShown(false)
  //   // }
  // };

  const handleListDisplay = () => {
    setIsListShown(!isListShown);
  };

  const handleOptionClick = (e) => {
    setInputValue(e.target.getAttribute("dataname"));
    setIsListShown(false);
  };

  return (
    <div className={styles.productCategoryContainer}>
      {/* <div className={s.customSelectContainer}> */}

     
      <div
        className={
          isListShown
            ? `${styles.productCategoryInput} ${s.active} input`
            : `${styles.productCategoryInput} input`
        }
        // className={
        //   isListShown
        //     ? `${s.selectedText} ${s.active} input`
        //     : `${s.selectedText} input`
        // }
        // id="input"
        onClick={handleListDisplay}
      >        
        {inputValue ? inputValue : placeholderText}
      </div>
         {/* <input
              className={`${styles.transactionInput} ${styles.productCategoryInput}`}
              type="text"
              name="productCategory"
              placeholder="Категория товара"
              /> */}
      {/* {isListShown && ( */}
        <ul className={isListShown ? `${s.selectOptionsList}`: `${s.selectOptionsList} ${s.isHidden}`}>
          {optionsList.map((option) => {
            return (
              <li
                className={`${s.selectOptionsItem} option`}
                // name="selectOption"
                dataname={option.name}
                key={option.id}
                onClick={handleOptionClick}
              >
                {option.name}
              </li>
            );
          })}
        </ul>
      {/* )} */}
    </div>
  );
}

// class CustomSelect extends React.Component {
//   constructor(props) {
//     super(props);

//     // @defaultSelectText => Show default text in select
//     // @showOptionList => Show / Hide List options
//     // @optionsList => List of options
//     this.state = {
//       defaultSelectText: "",
//       showOptionList: false,
//       optionsList: []
//     };
//   }

//   componentDidMount() {
//     // Add Event Listner to handle the click that happens outside
//     // the Custom Select Container
//     document.addEventListener("mousedown", this.handleClickOutside);
//     this.setState({
//       defaultSelectText: this.props.defaultText
//     });
//   }

//   componentWillUnmount() {
//     // Remove the event listner on component unmounting
//     document.removeEventListener("mousedown", this.handleClickOutside);
//   }

//   // This method handles the click that happens outside the
//   // select text and list area
//   handleClickOutside = e => {
//     if (
//       !e.target.classList.contains("custom-select-option") &&
//       !e.target.classList.contains("selected-text")
//     ) {
//       this.setState({
//         showOptionList: false
//       });
//     }
//   };

//   // This method handles the display of option list
//   handleListDisplay = () => {
//     this.setState(prevState => {
//       return {
//         showOptionList: !prevState.showOptionList
//       };
//     });
//   };

//   // This method handles the setting of name in select text area
//   // and list display on selection
//   handleOptionClick = e => {
//     this.setState({
//       defaultSelectText: e.target.getAttribute("data-name"),
//       showOptionList: false
//     });
//   };

//   render() {
//     const { optionsList } = this.props;
//     const { showOptionList, defaultSelectText } = this.state;
//     return (
//       <div className="custom-select-container">
//         <div
//           className={showOptionList ? "selected-text active" : "selected-text"}
//           onClick={this.handleListDisplay}
//         >
//           {defaultSelectText}
//         </div>
//         {showOptionList && (
//           <ul className="select-options">
//             {optionsList.map(option => {
//               return (
//                 <li
//                   className="custom-select-option"
//                   data-name={option.name}
//                   key={option.id}
//                   onClick={this.handleOptionClick}
//                 >
//                   {option.name}
//                 </li>
//               );
//             })}
//           </ul>
//         )}
//       </div>
//     );
//   }
// }

export default CustomSelect;
