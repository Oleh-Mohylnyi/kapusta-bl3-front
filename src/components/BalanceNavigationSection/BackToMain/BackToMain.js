import {Link} from "react-router-dom";
import sprite from '../../../images/sprite.svg';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import s from "./BackToMain.module.css"

export default function BackToMain () {
    const windowSize = useWindowDimensions();
   
     const mobileView = windowSize.width < 767.98;

return (

    <div>
{mobileView ? (
    <Link to="/main" className={s.link}>

<svg width="18" height="12">
    <use href={`${sprite}#icon-arrow-back`}></use>
</svg>

</Link>
) : (
    <Link to="/main" className={s.secondLink}>

<svg width="18" height="12" className={s.icon}>
    <use href={`${sprite}#icon-arrow-back`}></use>
</svg>
<p className={s.linkText}>Вернуться на главную</p>

</Link>
)

}

    </div>
    
)

}