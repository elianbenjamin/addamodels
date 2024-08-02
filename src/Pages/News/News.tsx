import style from "./news.module.scss";
import img from "../../assets/Desfile-bodega-villa-nueva.jpeg";
import { CalendarIcon, MapMarkerIcon } from "../../assets/icons";

const News = () => {
  return (
    <div className={style.News}>
      <article>
        <h1> !LA BODEGA EN PASARELA! </h1>

        <div className={style.dataContainer}>
          <h3>
            <CalendarIcon /> 4 de Agosto{" "}
          </h3>
          <p>|</p>
          <h3>
            <MapMarkerIcon />
            <a href="https://maps.app.goo.gl/coZdCwMaGVprMT3r5" target="_blank">
              La bodega, Villa Nueva
            </a>
          </h3>
        </div>

        <div className={style.imgContainer}>
          <img src={img} alt="Imagen de presentación" />
        </div>

        <p className={style.text}>
          Estamos emocionadas de anunciar el "Desfile en la Bodega de Villa
          Nueva", un evento imperdible para los amantes de la moda, el domingo 4
          de agosto a las 15:00 pm. Participarán más de 20 marcas reconocidas de
          la ciudad de Villa Maria. Diseñadores presentando colecciones de alta
          costura, pret a porter, informal, formal, mostrando todo lo último en
          tendencias
          <br />
          <br />
          La Bodega de Villa Nueva ofrecerá una experiencia única con su
          servicio de catering. Las entradas son limitadas y aún están a la
          venta. Para más información, visita nuestro sitio web o contáctanos en
          redes sociales. ¡Te esperamos!
        </p>
      </article>
    </div>
  );
};

export default News;
