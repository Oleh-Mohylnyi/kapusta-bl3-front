import React, {useState, useEffect} from 'react';
// import { useSelector, useDispatch } from "react-redux";
import Bubble from '../../Bubble/Bubble';
import s from './Balance.module.css';
import {getBalance} from "../../../redux/reports/reportsSelectors";
import {fetchBalanceThunk} from "../../../redux/reports/reportsThunk";
import {updateBalanceThunk} from "../../../redux/reports/reportsThunk";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';




export default function Balance ({currency, setNotVisible}){
    
    const balance = useSelector(getBalance);
    const dispatch = useDispatch();
    
    let [currentBalance, setCurrentBalance] = useState(Number(balance).toFixed(2));
    
    
    const inputChange = (e) => { 
        setCurrentBalance(e.target.value);
      };
    
    
    
    const handleSubmit = (e) => {
        
       e.preventDefault();
       
      
       dispatch(updateBalanceThunk({ balance: currentBalance }),
       [ balance]
       )
       toast.success("Ваш баланс успешно обновлен!")
      
    }
    
    useEffect(() => {
       dispatch(fetchBalanceThunk())
    setCurrentBalance(Number(balance).toFixed(2));
    
           }, [balance, dispatch]);


            
          

    
const zeroBalance = balance === 0 || currentBalance === 0;

    return (
<div>
{setNotVisible ? (
    <div>
               
    <div>
        <form onSubmit={handleSubmit} className={s.balanceForm}>
            <div className={s.inputWrapper}>
                <label htmlFor='balance' className={s.balanceLabel}>
                    <input
                        type="text"
                        name="balance"
                        placeholder={"00.00 UAH"}
                        autoComplete="off"
                        className={`${s.balanceInputSecond} ${s.balanceInput}`}
                        value={currentBalance}
                        // currency={currency} 
                        disabled
                        
                        
                        />
                         <span className={s.currency2}>UAH</span>
                </label>
                
            </div>
        </form>
       
    </div>

</div>
) : (
    <div>
    <form onSubmit={handleSubmit} className={s.balanceForm}>
        <div className={s.inputWrapper}>
            <label htmlFor='balance' className={s.balanceLabel}>
                <input
                    type="text"
                    name="balance"
                    placeholder={"00.00 UAH"}
                    autoComplete="off"
                    onChange={inputChange}
                    className={s.balanceInput}
                    value={currentBalance}
                   
                    // currency={currency}
                   
                   
                     />
                    <span className={s.currency}>{currency}</span>
            </label>
            <button type="submit" onClick={handleSubmit} className={s.balanceButton}>Подтвердить</button>
           {zeroBalance && <Bubble />}
            
        </div>
    </form>
</div>
)}

</div>
   

    )
}