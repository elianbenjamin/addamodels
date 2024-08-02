import style from "./moodboard.module.scss";
import img from "../../assets/images/moodboard-img.jpg";
import { useEffect, useRef, useState } from "react";

const Moodboard = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (imgRef.current) {
        const distance = imgRef.current.getBoundingClientRect().top;
        if (distance <= window.innerHeight) setAnimation(true);
      }
    });
  }, []);

  return (
    <div className={style.Moodboard}>
      <h1 className={animation ? style.titleAnimation : ""}>MOODBOARD</h1>
      <div className={style.contentContainer}>
        <div
          className={`${style.imgContainer} ${
            animation ? style.imgAnimation : ""
          }`}
          ref={imgRef}
        >
          <img src={img} />
        </div>

        <div className={style.infoContainer}>
          <p className={animation ? style.textAnimation : ""}>
            NUESTRO VALOR DIFERENCIAL RADICA EN LA INCLUCION Y LA DIVERSIDAD DE
            ROSTROS, CUERPOS Y GENEROS. INSPIRADOS EN DIVERSOS ESCENARIOS.{" "}
            <br /> ASÍ COMO TAMBIÉN LAS TENDENCIAS QUE MARCAN EL RITMO
            VERTIGINOSO DE LA MODA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Moodboard;
