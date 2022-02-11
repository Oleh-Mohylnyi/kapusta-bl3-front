import s from "./BalanceTitle.module.css";

export default function BalanceTitle () {
    return (
        <h3 className={`${s.balanceTitle} ${s.balanceTitleMargin}`}>Баланс:</h3>
    )

}