import s from './button.module.scss';

export default function button({ title, handleClick, styleType, type }) {
    const classStyle = () => {
        if (styleType === "blue") { return s.blue }
        if (styleType === "red") { return s.red }
    }

    return (
        <button
            type={type}
            className={classStyle()}
            onClick={handleClick()}>
        {title}
        </button>
    )
} 

