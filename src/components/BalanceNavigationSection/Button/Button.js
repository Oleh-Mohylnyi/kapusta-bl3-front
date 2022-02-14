import s from "./Button.module.css";

export default function Button ({onHandleSubmit, balance}) { 
    
    const initialBalance = balance=== 0;

    return (
        <>
        {initialBalance ? (
            <button type="submit" onSubmit={onHandleSubmit} className={s.balanceButton}>Подтвердить</button>
        ) : (
            <button  type="submit" onSubmit={onHandleSubmit} className={s.balanceButton}>Подтвердить</button>
        )}
        </>
       
    )
}