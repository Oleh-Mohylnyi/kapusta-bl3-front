import React, {useState, useEffect} from 'react';
// import { useSelector, useDispatch } from "react-redux";
import Bubble from '../../Bubble/Bubble';
import s from './Balance.module.css';
import {getBalance} from "../../../redux/reports/reportsSelectors";
import {fetchBalanceThunk} from "../../../redux/reports/reportsThunk";
import {updateBalanceThunk} from "../../../redux/reports/reportsThunk";
import { useDispatch, useSelector } from "react-redux";

export default function Balance (){
    
    const balance = useSelector(getBalance);
    const dispatch = useDispatch();
    
    const [currentBalance, setCurrentBalance] = useState(Number(balance).toFixed(2));
    
    
    
    
    const inputChange = (e) => { 
       setCurrentBalance(e.target.value);
    };
    
    
    
    const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(updateBalanceThunk({ balance: currentBalance }),
       [ balance]
       )
       
    }
    
    useEffect(() => {
       dispatch(fetchBalanceThunk())
    setCurrentBalance(balance);
           }, [balance, dispatch]);

   


    


    return (
        <div>
            <form onSubmit={handleSubmit} className={s.balanceForm}> 
        
        {balance === 0 ? (

            <div className={s.inputWrapper}>
            <label htmlFor='balance' className={s.balanceLabel}>
                
            <input 
            type="number"
            name="balance"
            placeholder={"00.00 UAH"}
            autoComplete="off"
            onChange={inputChange}
            className={s.balanceInput}
            value={Number(currentBalance)}
            // value={balance}
            />
            
      
            
            </label>
                    <Bubble/>{/* ВЕРНУТЬ */}
                    
            </div>
        ) : (
            <div className={s.activeBalanceContainer}>
                
                <div className={s.activeBalanceWrapper}>
            <p className={`${s.balanceInput} ${s.balanceInputText}`}>{Number(currentBalance)}.00 UAH</p>
            
            </div>
            </div>
            
        )
    
    } 


</form>
        
        </div>
    )
}