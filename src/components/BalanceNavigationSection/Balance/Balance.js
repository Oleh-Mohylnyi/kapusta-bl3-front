<<<<<<< HEAD:src/components/Balance/Balance.js
import React from 'react';
// import Bubble from '../Bubble/Bubble';
=======
import {React} from 'react';
// import { useSelector, useDispatch } from "react-redux";
import Bubble from '../../Bubble/Bubble';
>>>>>>> main:src/components/BalanceNavigationSection/Balance/Balance.js
import s from './Balance.module.css';



export default function Balance (){
    
    const balance = 5000;
    // const [balance, setBalance] = useState("");
    // const dispatch = useDispatch();
   
   
    
    const inputChange = (e) => { 
        // setBalance(e.target.value);
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        // dispatch(operations.addBalance({ balance }));
    }

    const initialZeroBalance = balance === 0;

   


    


    return (
        <div>
            <form onSubmit={handleSubmit} className={s.balanceForm}> 
        
        {initialZeroBalance ? (

            <div className={s.inputWrapper}>
            <label htmlFor='balance' className={s.balanceLabel}>
                
            <input 
            type="text"
            name="balance"
            placeholder="00.00 UAH"
            autoComplete="off"
            onChange={inputChange}
            className={s.balanceInput}/>
      
            
            </label>
                    {/* <Bubble/> */}{/* ВЕРНУТЬ */}
                    
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