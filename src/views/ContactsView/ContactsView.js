import { useFetchPhonebookQuery } from '../../redux/contacts/slice'
import Loader from "react-loader-spinner";
import Filter from '../../components/Filter';
import List from '../../components/List'
import { useState } from 'react';
import Modal from '../../components/Modal/Modal'
import Button from '../../components/Button/Button'
import s from './contactsView.module.scss'
export default function ContactsView() {

        const [editCheckbox, setEditCheckbox] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const { data: contacts, isFetching } = useFetchPhonebookQuery();

    const toggleModal = () => {
        setShowModal(!showModal);
    }
    
    let classNameCheckbox = 'checkboxEdit';
        if (editCheckbox) {
        classNameCheckbox += ' checkboxEditActive'
    };


    return (
    <>
        {isFetching && <Loader type="ThreeDots" color="blue" height={80} width={80} />}
    
        {contacts && contacts.length > 0
            ? (<div className={s.container}>
                <div>
                    <div className={s.controlBar}>

                        <Button 
                        title="Add contact"
                        handleClick={() => toggleModal}
                        styleType="blue" 
                        type="button"/>

                        <label className={classNameCheckbox}>
                        Edit
                        <input
                            type="checkbox"
                            className={s.hidden}
                            checked={editCheckbox}
                            onChange={() => setEditCheckbox(!editCheckbox)}
                        />
                        </label>
                    </div>
                </div>
                    
                <Filter />
                <List
                    contacts={contacts}
                    statusCheckbox={editCheckbox}/>
            </div>)
            : (<p>no contacts at the moment</p>)
            }
        {showModal && <Modal
          closeModal={toggleModal} />}
    </>
)
}