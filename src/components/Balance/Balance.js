import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import Bubble from '../Bubble/Bubble';

import s from './Balance.module.css';

export default function Balance (){
    // const balance = useSelector('');
    const balance = 0;
    const dispatch = useDispatch();
    const [number, setNumber] = useState("");
    const [closeBubble, setCloseBubble] = useState(true);

    const inputChange = (e) => {
        setNumber(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onToggle = () => {
        setCloseBubble(setCloseBubble => !setCloseBubble)

    }


    return (
        <div>
            <form onSubmit={handleSubmit} className={s.balanceForm}> 
        <h3 className={s.balanceTitle}>Баланс:</h3>
        {/* {balance === 0 ? ( */}

            <div className={s.inputWrapper}>
            <label htmlFor='balance' className={s.balanceLabel}>
                
            <input 
            type="text"
            name="balance"
            placeholder="00.00 UAH"
            autoComplete="off"
            onChange={inputChange}
            className={s.balanceInput}/>
      
            <button className={s.balanceButton}>Подтвердить</button>
            </label>
            {closeBubble && <Bubble onToggleBubble={onToggle}/>}
            </div>
        {/* ) : (
            <div className={s.activeBalanceWrapper}>
            <p className={s.balanceInput}>{`${balance}`} UAH</p>
            <button className={s.balanceButton} disabled>Подтвердить</button>
            </div>
            
        )
    
    } */}


</form>
        
        </div>
    
    )
}