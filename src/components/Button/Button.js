import s from './button.module.scss'

export default function button({ title, handleClick, type }) {
  return (
    <button
      type={type}
      className={s.button}
      // onClick={handleClick()}
    >
      {title}
    </button>
  )
}
