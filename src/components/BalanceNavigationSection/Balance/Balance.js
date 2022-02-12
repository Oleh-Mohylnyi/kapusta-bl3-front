import React from 'react';

import Bubble from '../../Bubble/Bubble';
import s from './Balance.module.css';


export default function Balance (){

const balance = 0;




    const inputChange = (e) => { 
        
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    const initialZeroBalance =  balance === 0;

   


    


    return (
        
        <div>
            <form  onSubmit={handleSubmit} className={s.balanceForm}> 
        
        {initialZeroBalance ? (

            <div className={s.inputWrapper}>
            <label htmlFor='balance' className={s.balanceLabel}>
                
            <input 
            type="text"
            name="balance"
            value={balance}
            placeholder="00.00 UAH"
            autoComplete="off"
            onChange={inputChange}
            className={s.balanceInput}/>
      
            
            </label>
             <Bubble/>
            </div>
        ) : (
            <div className={s.activeBalanceContainer}>
                
                <div className={s.activeBalanceWrapper}>
            <p className={`${s.balanceInput} ${s.balanceInputText}`}>{`${balance}`}.00 UAH</p>
            
            </div>
            </div>
            
        )
    
    } 


</form>
        
        </div>
    )
}