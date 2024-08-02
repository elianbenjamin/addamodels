import Career from "../../components/Career/Career";
import Courses from "../../components/Courses/Courses";
import Services from "../../components/Services/Services";
import style from "./school.module.scss";

const School = () => {
  return (
    <div className={style.School}>
      <h1 className={style.title}>CURSOS DISPONIBLES:</h1>

      <div className={style.cards}>
        <Career />

        <Courses />

        <Services />
      </div>
    </div>
  );
};

export default School;
