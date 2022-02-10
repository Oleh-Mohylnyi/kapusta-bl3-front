import {React} from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import Bubble from '../Bubble/Bubble';
import s from './Balance.module.css';



export default function Balance (){
    
    const balance = 5000;
    // const [balance, setBalance] = useState("");
    // const dispatch = useDispatch();
   
   
    
    // const inputChange = (e) => { 
    //     setBalance(e.target.value);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(operations.addBalance({ balance }));
    // }

    // const initialZeroBalance = balance === 0;

   


    


    return (
        // <div>
        //     <form onSubmit={handleSubmit} className={s.balanceForm}> 
        // <h3 className={s.balanceTitle}>Баланс:</h3>
        // {/* {initialZeroBalance ? ( */}

        //     <div className={s.inputWrapper}>
        //     <label htmlFor='balance' className={s.balanceLabel}>
                
        //     <input 
        //     type="text"
        //     name="balance"
        //     placeholder="00.00 UAH"
        //     autoComplete="off"
        //     onChange={inputChange}
        //     className={s.balanceInput}/>
      
        //     <button className={s.balanceButton}>Подтвердить</button>
        //     </label>
        //      <Bubble/>
        //     </div>
        // ) : (
            <div className={s.activeBalanceContainer}>
                <h3 className={`${s.balanceTitle} ${s.balanceTitleMargin}`}>Баланс:</h3>
                <div className={s.activeBalanceWrapper}>
            <p className={`${s.balanceInput} ${s.balanceInputText}`}>{`${balance}`}.00 UAH</p>
            {/* <button className={s.balanceButton} disabled>Подтвердить</button> */}
            </div>
            </div>
            
        // )
    
    // } 


// </form>
        
        // </div>
    )
}