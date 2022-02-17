import React from "react";
import Balance from "../Balance";
import StatisticsLink from "../StatisticsLink";
import BalanceTitle from "../BalanceTitle";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import s from "./BalanceNavigation.module.css";

export default function BalanceNavigation() {
  const windowSize = useWindowDimensions();
  const desktopAndTabletView = windowSize.width >= 768;

  return (
    <>
      {desktopAndTabletView ? (
        <>
          <div className={s.wrapper}>
            <BalanceTitle />
            <Balance currency="UAH" />
            <StatisticsLink />
          </div>
        </>
      ) : (
        <>
          <div className={s.mobileWrapper}>
            <StatisticsLink />
            <BalanceTitle />
            <div className={s.formWrapper}>
              <Balance currency="UAH" />
            </div>
          </div>
        </>
      )}
    </>
  );
}
