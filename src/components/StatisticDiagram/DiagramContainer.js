import s from './Diagram.module.scss'
const DiagramContainer = ({children}) => {
  return (
    <div className={s.container}>
      {children}
    </div>
  );
};
export default DiagramContainer
