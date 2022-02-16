import {Link} from 'react-router-dom';
import s from './StatisticsLink.module.css';
import sprite from '../../../images/sprite.svg';
import { useLocation } from 'react-router-dom';


export default function StatisticsLink () {
    const location = useLocation();

return(
    <div className={s.linkWrapper}>
        <Link to={`/statistics`} state={location}  className={s.link}>
            <p className={s.linkText}>Перейти к отчетам</p>
           {/* <img src={reportIcon} alt="report-icon" className={s.icon}/> */}
<svg width="14" height="14" className={s.icon}>
    <use href={`${sprite}#icon-vector`}></use>
</svg>

            </Link>

    </div>
)
}