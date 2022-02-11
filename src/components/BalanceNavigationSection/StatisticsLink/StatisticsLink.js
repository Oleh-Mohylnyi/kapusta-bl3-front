import {Link} from 'react-router-dom';
import s from './StatisticsLink.module.css';
import sprite from '../../../images/sprite.svg';

export default function StatisticsLink () {
return(
    <div className={s.linkWrapper}>
        <Link to="/statistics" className={s.link}>
            <p className={s.linkText}>Перейти к отчетам</p>
           {/* <img src={reportIcon} alt="report-icon" className={s.icon}/> */}
<svg width="14" height="14" className={s.icon}>
    <use href={`${sprite}#icon-vector`}></use>
</svg>

            </Link>

    </div>
)
}