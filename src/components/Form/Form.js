import React, { useState } from "react";
import s from './form.module.scss';
import { useAddContactMutation, useFetchPhonebookQuery } from "../../redux/contacts/slice";
import Button from "../Button/Button";
import { toast } from 'react-toastify';

export default function Form() {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const [addContact] = useAddContactMutation();
    const { data: contacts } = useFetchPhonebookQuery();


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value)
        };
        if (name === 'number') {
            setNumber(value)
        };
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        saveForm(name, number);
        setName('');
        setNumber('');
    };

    const saveForm = (name, number) => {
    
        const regNumber = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
        const regName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
        
        if (!contacts) {
            addContact({ name, number })
        } else {
            if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
                toast(`${name} is already in contacts`);
            } else {
                if (name === '' || number === '') {
                    toast(`Do not save contact without a name or number`);
                } else {
                    if (!regName.test(name)) {
                        toast("Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.");
                    } else {
                        if (!regNumber.test(number)) {
                            toast("Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +");
                        } else {
                            addContact({ name, number });
                            toast(`contact "${name}" added successfully`);
                        }
                    }
                }
            }
        }
    };

    return (
        <form className={s.form}>

            <label className={s.label}> Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    autoComplete="off"
                    onChange={handleChange}
                    value={name}
                    className={s.input}
                />
            </label>
            <br />
            <label className={s.label}> Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    autoComplete="off"
                    onChange={handleChange}
                    value={number}
                    className={s.input}
                />
            </label>
            <br />
            <div className={s.btnSubm}>
            <Button
                title="Add contact"
                handleClick={() => handleSubmit}
                styleType="blue"
                type="submit"/>
            </div>
            
        </form>
    );
}
