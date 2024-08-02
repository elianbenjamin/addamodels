import { DownloadIcon } from "../../assets/icons";
import style from "./services.module.scss";
import pdf from "../../assets/SERVICIOS-DE-PROMOTOR.pdf";

const Services = () => {
  return (
    <div className={style.Promoting}>
      <h3 className={style.title}>SERVICIOS</h3>

      <div className={style.content}>
        <h3 className={style.contentTitle}>PROMOTORIA DE EVENTOS</h3>

        <div className={style.description}>
          <p>
            Transforma tu visión en realidad con nuestros expertos promotores de
            eventos. Desde la planificación hasta la ejecución, nos encargamos
            de cada detalle para garantizar el éxito de tu evento.
          </p>
        </div>

        <a download="SERVICIOS DE PROMOTOR" href={pdf}>
          Ver más...
          <DownloadIcon />
        </a>
      </div>
    </div>
  );
};

export default Services;
