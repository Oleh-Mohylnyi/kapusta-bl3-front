import {React} from 'react';
// import { useSelector, useDispatch } from "react-redux";
import Bubble from '../../Bubble/Bubble';
import s from './Balance.module.css';



export default function Balance ({onInputChange, balance, onHandleSubmit}){
    
    // const balance = 5000;
    // const [balance, setBalance] = useState("");
    // const dispatch = useDispatch();
   
   
    
    

    const initialZeroBalance = balance === 0;

   


    


    return (
        <div>
            <form onSubmit={onHandleSubmit} className={s.balanceForm}> 
        
        {initialZeroBalance ? (

            <div className={s.inputWrapper}>
            <label htmlFor='balance' className={s.balanceLabel}>
                
            <input 
            type="text"
            name="balance"
            placeholder="00.00 UAH"
            autoComplete="off"
            onChange={onInputChange}
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