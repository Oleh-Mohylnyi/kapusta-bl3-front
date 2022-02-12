
import s from "./Button.module.css";

export default function Button ({balance, handleSubmit}) { 
   
  
    




    const initialZeroBalace = balance=== 0;

    return (
        <>
        {initialZeroBalace ? (
            <button type="submit" className={s.balanceButton} onClick={handleSubmit}>Подтвердить</button>
        ) : (
            <button type="submit" className={s.balanceButton} disabled>Подтвердить</button>
        )}
        </>
       
    )
}