import s from "./Button.module.css";

export default function Button () { 
    const balance = 0;
    const initialBalace = balance=== 0;

    return (
        <>
        {initialBalace ? (
            <button className={s.balanceButton}>Подтвердить</button>
        ) : (
            <button className={s.balanceButton} disabled>Подтвердить</button>
        )}
        </>
       
    )
}