import React, { useState } from "react";
import styled from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ["Mangoes", "Apples", "Oranges"];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Main>
      <h1>Custom Select/dropdown</h1>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Mangoes"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}


// import React, { useState } from 'react';
// import Select from 'react-select';
// import s from "./SelectForm.module.scss";

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

// const customStyles = {
//   menu: (provided, state) => ({
//     ...provided,
//    width: state.selectProps.width,
//     borderBottom: '1px dotted pink',
//     // color: 'grey',
//     backgroundColor: 'grey',
//     padding: 20,




//   //   display: 'block',
//   // backgroundColor: 'transparent',
//   // border: '2px solid #ffffff',
//   // width: 282,
//   // padding: '13px 0 13px 20px',

//   // // fontFamily: var(--font-family); //вероятно перенести в общак?
//   // fontStyle: 'normal', //вероятно перенести в общак?
//   // fontWeight: 400, //вероятно перенести в общак?
//   // fontSize: 12, //вероятно перенести в общак?
//   // lineHeight: 1.167, //вероятно перенести в общак?
//   // color: var(--additional-text-color);
//   // letter-spacing: 0.02em; //вероятно перенести в общак?
 
//   }),
//    container: base => ({
//     ...base,
//      display: 'block',
//      border: '2px solid #ffffff',
//   width: 282,
//   padding: '13px 0 13px 20px',
//   }),

//   control: (_, { selectProps: { width }}) => ({
//     width: width
//   }),
//   placeholder: base => ({
//     ...base,
//     color: 'blue',
//     fontWeight: 400,
//     fontSize: 12,
//   }),
//   singleValue: (provided, state) => {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = 'opacity 300ms';

//     return { ...provided, opacity, transition };
//   }
// }
// // const styles = {
  
// // }

// export default function SelectForm() {
//   const [selectedOption, setSelectedOption] = useState('category');

//   return (
//     <>
//       <Select
//         // defaultValue={selectedOption}
//         onChange={setSelectedOption}
//         options={options}
//         styles={customStyles}
//         // width='200px'
//       menuColor='red'
//         placeholder='Категория'
//         // className={s.productCategoryInput}
//         searchable
//         required
//         maxMenuHeight={50}
//         menuShouldBlockScroll={true}
//         noOptionsMessage={()=>'set another category'}
//       />
//     </>
//   );
// }