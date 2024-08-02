import style from "./misionVisionValues.module.scss";
import visionImg from "../../assets/images/vision-img.jpg";
import misionImg from "../../assets/images/mision-img.jpg";
import valuesImg from "../../assets/images/values-img.jpg";
import { useEffect, useRef, useState } from "react";

const MisionVisionValues = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleAnimation, setTitleAnimation] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (titleRef.current) {
        const titleDistance = titleRef.current.getBoundingClientRect().top;
        if (titleDistance <= window.innerHeight) setTitleAnimation(true);
      }
    });
  }, []);

  return (
    <div className={style.MisionVisionValues}>
      <section className={style.MisionContainer}>
        <h1
          className={titleAnimation ? style.titleAnimation : ""}
          ref={titleRef}
        >
          MISION
        </h1>
        <div
          className={`${style.sectionContent} ${
            titleAnimation ? style.contentAnimation : ""
          }`}
        >
          <div className={style.imgContainer}>
            <img src={misionImg} className={style.misionImg}/>
          </div>
          <h3>NOSOTROS</h3>
          <p>
            ADDA ES UNA ESCUELA INCLUSIVA, CON DIVERSIDAD. QUE NO TIENE
            ESTANDARES, NI ESTEREOTIPOS: NI TALLAS, NI GENERO, NI EDAD.
          </p>
        </div>
      </section>

      <section className={style.VisionContainer}>
        <h1 className={titleAnimation ? style.titleAnimation : ""}>VISION</h1>
        <div
          className={`${style.sectionContent} ${
            titleAnimation ? style.contentAnimation : ""
          }`}
        >
          <div className={style.imgContainer}>
            <img src={visionImg} className={style.visionImg}/>
          </div>
          <h3>FUTURO</h3>
          <p>
            QUEREMOS QUE NUESTRO AGENCIA SEA RECONOCIDA INTERNACIONALMENTE Y
            MARCAR UN PRECEDENTE EN EL MUNDO DE LA MODA, LAS PASARELAS EUROPEAS,
            DESARROLLANDO UNA PERSONALIDAD IRREPETIBLE.
          </p>
        </div>
      </section>

      <section className={style.ValuesContainer}>
        <h1 className={titleAnimation ? style.titleAnimation : ""}>VALORES</h1>

        <div
          className={`${style.sectionContent} ${
            titleAnimation ? style.contentAnimation : ""
          }`}
        >
          <div className={style.imgContainer} style={{alignContent: 'flex-start'}}>
            <img src={valuesImg} className={style.valuesImg}/>
          </div>

          <h3>VIBRAS</h3>
          <p>
            LIBERTAD, CREATIVIDAD, INCLUSIÓN Y OPTIMISMO. MOTIVAMOS LA LIBERTAD
            DE EXPRESIÓN ROMPIENDO PARADIGMAS. DESPLEGANDO LA CREATIVIDAD SIN
            BARRERAS CON LA MEJOR ENERGÍA.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MisionVisionValues;
