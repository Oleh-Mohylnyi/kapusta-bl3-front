import DiagramTablet from "./DiagramTablet";
import s from './Diagram.module.css'
const DiagramContainer = () => {
  return (
    <div className={s.containerTablet}>
      <DiagramTablet />
    </div>
  );
};
export default DiagramContainer
