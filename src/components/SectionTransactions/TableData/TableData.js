import { CSSTransition, TransitionGroup } from "react-transition-group";
import React, { useState } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import s from "./TableData.module.scss";
import sMobile from "./MobileTableData.module.scss";

const TableData = ({
  dataTransactions = [],
  onChangeDel,
  isExpense = false,
}) => {
  const [setIdTransaction] = useState("");

  const onTakeIdForDel = (id) => {
    setIdTransaction(id);
  };

  const viewPort = useWindowDimensions();

  return (
    <>
      {viewPort.width >= 768 && (
        <div className={s.bodyTable} id={s.style2}>
          <table className={s.main}>
            <thead className={s.theadTable}>
              <tr>
                <th className={`${s.th} ${s.thData}`}>ДАТА</th>
                <th className={`${s.th} ${s.thData}`}>ОПИСАНИЕ</th>
                <th className={`${s.th} ${s.thData}`}>КАТЕГОРИЯ</th>
                <th className={`${s.th} ${s.thData}`}>СУММА</th>
                <th className={`${s.th} ${s.thData}`}></th>
              </tr>
            </thead>

            <tbody>
              {dataTransactions.map(
                ({ _id, date, description, category, amount }) => (
                  <tr className={s.td} key={_id}>
                    <td className={s.thData}>{date}</td>
                    <td className={s.tdDesc}>{description}</td>
                    <td className={s.thCateg}>{category}</td>
                    <td className={isExpense ? s.tdSumExpense : s.tdSum}>
                      {isExpense ? "- " : ""}
                      {amount}.00 грн.
                    </td>
                    <td className={s.thIcon}>
                      <button
                        className={s.deleteBtn}
                        onClick={() => onTakeIdForDel(_id)}
                      >
                        {/* <svg className={s.deleteBtnIcon}></svg> */}
                      </button>
                    </td>
                  </tr>
                )
              )}
              {/* style={{ overflowY: "auto" }} */}
              <tr className={s.td}>
                <td className={s.thData}>sddf</td>
                <td className={s.tdDesc}>sdfsg</td>
                <td className={s.thCateg}>aswefsg</td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}>313</td>
                <td className={s.deleteBtn}>
                  {/* <svg
                    className={s.deleteBtnIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.308 4.02333L15.9106 2.832C15.7592 2.37827 15.3361 2.07339 14.8579 2.07339H11.5177V0.985886C11.5177 0.442337 11.0758 0 10.5324 0H7.47348C6.93021 0 6.48815 0.442337 6.48815 0.985886V2.07339H3.14803C2.66971 2.07339 2.2466 2.37827 2.09526 2.832L1.69783 4.02333C1.60733 4.29456 1.6532 4.59489 1.82033 4.82684C1.98746 5.05879 2.25786 5.19736 2.54378 5.19736H2.9592L3.87354 16.5038C3.94152 17.3427 4.65343 18 5.49457 18H12.6968C13.5378 18 14.2499 17.3427 14.3177 16.5037L15.232 5.19736H15.4621C15.748 5.19736 16.0184 5.05879 16.1855 4.82698C16.3526 4.59503 16.3985 4.29456 16.308 4.02333ZM7.54284 1.05469H10.463V2.07339H7.54284V1.05469ZM13.2664 16.4187C13.2425 16.7141 12.9923 16.9453 12.6968 16.9453H5.49457C5.19904 16.9453 4.94883 16.7141 4.92493 16.4187L4.01732 5.19736H14.1739L13.2664 16.4187ZM2.76996 4.14267L3.09584 3.16571C3.10326 3.14319 3.12427 3.12808 3.14803 3.12808H14.8579C14.8817 3.12808 14.9026 3.14319 14.9101 3.16571L15.236 4.14267H2.76996Z"
                      fill="#52555F"
                    />
                    <path
                      d="M11.5845 16.3811C11.5938 16.3816 11.6031 16.3818 11.6124 16.3818C11.891 16.3818 12.1239 16.1634 12.1385 15.8819L12.6337 6.37568C12.6488 6.08482 12.4252 5.83667 12.1345 5.82156C11.843 5.80604 11.5956 6.02989 11.5804 6.32075L11.0853 15.827C11.0702 16.1178 11.2936 16.366 11.5845 16.3811Z"
                      fill="#52555F"
                    />
                    <path
                      d="M5.89105 15.8835C5.90643 16.1646 6.13906 16.3821 6.41715 16.3821C6.42677 16.3821 6.43665 16.3819 6.4464 16.3813C6.73713 16.3655 6.96001 16.117 6.94422 15.8261L6.42553 6.31991C6.40974 6.02905 6.16117 5.80616 5.87031 5.82209C5.57959 5.83789 5.3567 6.08645 5.37249 6.37731L5.89105 15.8835Z"
                      fill="#52555F"
                    />
                    <path
                      d="M9.00891 16.3822C9.30019 16.3822 9.53625 16.1461 9.53625 15.8548V6.34863C9.53625 6.05736 9.30019 5.82129 9.00891 5.82129C8.71764 5.82129 8.48157 6.05736 8.48157 6.34863V15.8548C8.48157 16.1461 8.71764 16.3822 9.00891 16.3822Z"
                      fill="#52555F"
                    />
                  </svg> */}
                </td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
              <tr className={s.td}>
                <td className={s.thData}></td>
                <td className={s.tdDesc}></td>
                <td className={s.thCateg}></td>
                <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
                <td className={s.thIcon}></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {viewPort.width < 768 && (
        <div>
          <TransitionGroup component="ul" className={sMobile.listTransactions}>
            {dataTransactions.map(
              ({ _id, date, description, category, amount }) => (
                <CSSTransition
                  key={_id}
                  timeout={500}
                  classNames="item"
                  mountOnEnter
                  unmountOnExit
                >
                  <li className={sMobile.itemTransactions} key={_id}>
                    <div className={sMobile.leftColum}>
                      <p className={sMobile.elem}>
                        <span>{description}</span>
                      </p>
                      <p className={sMobile.data}>
                        <span>{date}</span>
                        <span>{category}</span>
                      </p>
                    </div>
                    <div className={sMobile.rigthColum}>
                      <p
                        className={
                          sMobile[
                            isExpense ? "totalDecrement" : "totalIncrement"
                          ]
                        }
                      >
                        {isExpense ? "- " : ""}
                        {amount}.00 грн.
                      </p>
                      <button
                        onClick={() => onTakeIdForDel(_id)}
                        className={sMobile.deleteBtn}
                      ></button>
                    </div>
                  </li>
                </CSSTransition>
              )
            )}
          </TransitionGroup>
        </div>
      )}
    </>
  );
};

export default TableData;
