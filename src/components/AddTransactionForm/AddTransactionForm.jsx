// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addNewContact } from '../../redux/phoneBook/contacts-thunks';
import Button from '../Button/Button.js'
import styles from './AddTransactionForm.module.scss';

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

  const handleSubmit = e => {
    e.preventDefault();
    // const newContact = { name, number};
    // dispatch(addNewContact(newContact));
    // resetFormInputs();
  };

  // const resetFormInputs = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        
        <input className="input" type="date" name="date" required placeholder='' />    {/* сделать отдельным компоненстом */}
      <div>
        <input className="input" type="text" name="" required placeholder='Описание'/>
        <div>
            <input className={`input `} type="select" name="date" placeholder='Категория товара' /> { /* должно быть выпадающим списком*/}
            <ul className={styles.categoryList}>

            </ul>            
             {/* <label class="label-country" for="custom-select">
          <input class="input input-country" type="text" id="country-choice" placeholder="Choose country" autocomplete="off">
          <div class="input-triangle"></div>
        <ul class="datalist-country hidden-list" id="datalist-country"> 
        </ul>
        </label> */}
        </div>
        <input className="input" type="number" name="date" required placeholder=''/>
      </div>
        
        <div>
        <button className="button" type="submit">
          Add
          </button>
          <button className="button" type="button">
          Clear
          </button>
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

