import s from './Diagram.module.css'
const DiagramContainer = ({children}) => {
  return (
    <div className={s.containerTablet}>
      {children}
    </div>
  );
};
export default DiagramContainer
