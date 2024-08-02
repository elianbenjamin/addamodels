import {
  DownloadIcon
} from "../../assets/icons";
import pdf from "../../assets/CURSOS-Y-TALLERES.pdf";
import style from "./courses.module.scss";

const Courses = () => {
  return (
    <div className={style.Courses}>
      <h3 className={style.title}>CURSOS</h3>

      <div className={style.content}>
        <h3 className={style.contentTitle}>ONLINE Y PRESENCIAL</h3>

        <div className={style.description}>
          <h3>LOS DIFERENTES CURSOS OFRECIDOS SON:</h3>
          <p>
            -ORATORIA
            <br />
            -PROTOCOLO Y CEREMONIAL
            <br />
            -AUTOMAQUILLAJE
            <br />
            -PROMOTOR DE EVENTOS
            <br />
            -ASESORIA DE IMAGEN
            <br />
            -INGLES
          </p>
        </div>

        <a download="CURSOS Y TALLERES" href={pdf}>
          Ver más...
          <DownloadIcon />
        </a>
      </div>
    </div>
  );
};

export default Courses;
