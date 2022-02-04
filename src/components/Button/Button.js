import s from './button.module.scss';

export default function button({ title, handleClick, styleType, type }) {
    // const classStyle = () => {
    //     if (styleType === "norm") { return s.norm }
    //     if (styleType === "bright") { return s.bright }
    // }
   
    return (
        <button
            type={type}
            className={s.button}
            // className={[s.button,classStyle()].join(' ')}
            // onClick={handleClick()}
            >
               
        {title}
        </button>
    )
} 

