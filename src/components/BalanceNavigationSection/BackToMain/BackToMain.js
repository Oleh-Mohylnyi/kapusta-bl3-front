// import {Link} from "react-router-dom";
import sprite from '../../../images/sprite.svg';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import s from "./BackToMain.module.css"


export default function BackToMain ({goBackClick}) {
    const windowSize = useWindowDimensions();
   
     const mobileView = windowSize.width < 767.98;
   





return (

    <div>
{mobileView ? (

    <button type="button" onClick={goBackClick} className={s.button}>
<svg width="18" height="12" className={s.icon}>
    <use href={`${sprite}#icon-arrow-back`}></use>
</svg>

    </button>
    
) : (

<button type="button" onClick={goBackClick} className={`${s.secondButton} ${s.button}`}>
<svg width="18" height="12" className={s.buttonIcon}>
    <use href={`${sprite}#icon-arrow-back`}></use>
</svg>
<p className={s.buttonText}>Вернуться на главную</p>
    </button>

)

}

    </div>
    
)

}