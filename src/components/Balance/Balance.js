import React from 'react';
import Bubble from '../Bubble/Bubble';
import s from './Balance.module.css';



export default function Balance (){
    
    // const balance = 0;
    
    const inputChange = (e) => { 
    }

    const handleSubmit = (e) => {
        
    }

    // const initialZeroBalance = balance === 0;


    


    return (
        <div>
            <form onSubmit={handleSubmit} className={s.balanceForm}> 
        <h3 className={s.balanceTitle}>Баланс:</h3>
        {/* {initialZeroBalance ? ( */}

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
             <Bubble/>
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