import s from './button.module.scss';

export default function button({ title, handleClick, styleType, type }) {
    const classStyle = () => {
        if (styleType === "norm") { return s.norm }
        if (styleType === "bright") { return s.bright }
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

