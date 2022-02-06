import {Link} from 'react-router-dom';
import s from './StatisticsLink.module.css';
import reportIcon from '../../images/icons/report-icon.svg';

export default function StatisticsLink () {
return(
    <div className={s.linkWrapper}>
        <Link to="/statistics" className={s.link}>
            <p className={s.linkText}>Перейти к отчетам</p>
           <img src={reportIcon} alt="report-icon" className={s.icon}/>


            </Link>

    </div>
)
}