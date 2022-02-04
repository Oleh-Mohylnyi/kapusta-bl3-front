import React from "react";
import ListItem from "../ListItem/ListItem";
import s from './list.module.scss';
import { useSelector } from 'react-redux';



export default function List({ contacts, statusCheckbox }) {


    const filter = useSelector(state => state.contacts.filter);
    

    const filterContacts = (contacts, filter) => {
        if (contacts) {
            return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        } else {return []}
    }
    const filtredContacts = filterContacts(contacts, filter)
    
    
    const backgroundColorItem = contact =>
        filtredContacts.indexOf(contact) % 2 === 0
            ? { backgroundColor: 'transparent' }
            : { backgroundColor: 'white' };

    return (
        <div className={s.contactsList}>
            
            <ul className={s.list}>
                {filtredContacts &&
                    filtredContacts.map(contact =>
                        <ListItem
                            key={contact.id}
                            contact={contact}
                            backgroundColorItem={backgroundColorItem(contact)}
                            statusCheckbox={statusCheckbox}
                        />
                    )}
            </ul>
        </div>
    );
}


