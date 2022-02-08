import s from "./ViewsContainer.module.css";
function ViewsContainer({ children }){
    return (
        <div className={s.container}>
            {children}
        </div>
    )
};
export default ViewsContainer;