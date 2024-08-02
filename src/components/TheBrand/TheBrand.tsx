import { useEffect, useRef, useState } from "react";
import style from "./theBrand.module.scss";

const TheBrand = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [imageAnimation, setImageAnimation] = useState<boolean>(false);
  const [titleAnimation, setTitleAnimation] = useState<boolean>(false);
  const [responsive, setResponsive] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (imageRef.current && titleRef.current) {
        const imageDistance = imageRef.current.getBoundingClientRect().top;
        const titleDistance = titleRef.current.getBoundingClientRect().top;
        if (imageDistance <= window.innerHeight) setImageAnimation(true);
        if (titleDistance <= window.innerHeight) setTitleAnimation(true);
      }
    });
    const handleResize = () => {
      if (window.innerWidth <= 890) setResponsive(true);
      else setResponsive(false);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  const titleContainer = (
    <div className={style.titleContainer}>
      <h1 className={titleAnimation ? style.titleAnimation : ""} ref={titleRef}>
        LA MARCA
      </h1>
      <h3 className={imageAnimation ? style.contentAnimation : ""}>
        ¿QUIENES SOMOS?
      </h3>
    </div>
  );

  return (
    <div className={style.TheBrand}>
      <section className={style.imgContainer}>
        {responsive && titleContainer}

        <div
          className={`${style["imgContainer-main"]} ${
            imageAnimation ? style.imgAnimation : ""
          }`}
          ref={imageRef}
        ></div>
      </section>
      <section className={style.infoContainer}>
        {!responsive && titleContainer}

        <p className={imageAnimation ? style.contentAnimation : ""}>
          FUNDADA EN EL 2024, ADDA MODELS ES UNA MARCA QUE SE CARACTERIZA POR SU
          DIVERSIDAD E INCLUSION, ADEMÁS DEL ESTILO IRREVERENTE E ICÓNICO. SU
          PERSONALIDAD REPRESENTA A PERSONAS DE ALMA EFERVESCENTE QUE BUSCAN
          MARCAR LA DIFERENCIA EN SU DÍA A DÍA.
        </p>
        <p className={imageAnimation ? style.contentAnimation : ""}>
          DETRÁS DE LA MARCA HAY UN EQUIPO DE PROFESIONALES Y CREATIVOS DE
          ESPÍRITU LIBRE, APASIONADOS Y COMPROMETIDOS CON LA CALIDAD Y EL AMOR
          POR LOS DETALLES. VOCACIÓN Y DEDICACIÓN PURA POR TRABAJAR EN EL MUNDO
          DE LA MODA.
        </p>
      </section>
    </div>
  );
};

export default TheBrand;
