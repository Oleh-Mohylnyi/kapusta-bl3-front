import s from './Bubble.module.css';

const Bubble = () => {

   
       
        return (
        <div className={s.bubbleContainer}>
            <div className={s.textWrapper}>
             <p className={s.text1}>
            Привет! Для начала работы внеси текущий баланс своего счета!
            </p>
            <p className={s.text2}>  
            Ты не можешь тратить деньги пока
их у тебя нет :)

            </p>
            </div>

           
        </div>
    )
};


export default Bubble;