import s from './Diagram.module.css'
const DiagramContainer = ({children}) => {
  return (
    <div className={s.container}>
      {children}
    </div>
  );
};
export default DiagramContainer
