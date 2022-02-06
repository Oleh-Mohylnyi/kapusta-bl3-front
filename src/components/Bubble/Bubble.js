import s from './Bubble.module.css';

const Bubble = ({onToggleBubble}) => {

    const handleClose = (e) => {
        if(e.currentTarget === e.target) {
            onToggleBubble()
        }

    }

    return (
        <div className={s.bubbleContainer} onClick={handleClose}>
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