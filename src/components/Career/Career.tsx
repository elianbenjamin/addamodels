import style from "./career.module.scss";
import pdf from "../../assets/ESCUELA-DE-MODELOS-Y-PROMOTORES.pdf";
import { DownloadIcon } from "../../assets/icons";

const Career = () => {
  return (
    <section className={style.Career}>
      <h3 className={style.title}>CARRERA</h3>

      <div className={style.content}>
        <h3 className={style.contentTitle}>MODELAJE PROFESIONAL</h3>

        <div className={style.description}>
          <div>
            <h3>-1º AÑO:</h3>
            <p> Formacion integral del modelo.</p>
          </div>
          <div>
            <h3>-2º AÑO:</h3>
            <p> tecnica y modelaje internacional</p>
          </div>
          <div>
            <h3>-3º AÑO:</h3>
            <p> perfeccionamieto.</p>
          </div>
        </div>

        <p>Marzo a Noviembre. Todos los sabados de 14 a 17hs</p>

        <a href={pdf} download="ESCUELA DE MODELOS Y PROMOTORES">
          Ver más...
          <DownloadIcon />
        </a>
      </div>
    </section>
  );
};

export default Career;
