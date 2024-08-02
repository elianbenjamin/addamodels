import style from "./target.module.scss";
import { useEffect, useRef, useState } from "react";

const Target = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState<boolean>(false);
  const [responsive, setResponsive] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!imgRef.current) return;
      const distance = imgRef.current.getBoundingClientRect().top;
      if (distance <= window.innerHeight) setAnimation(true);
    });

    const handleResize = () => {
      if (window.innerWidth <= 620) setResponsive(true);
      else setResponsive(false);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
  }, []);

  const title = (
    <h1 className={animation ? style.titleAnimation : ""}>PÚBLICO OBJETIVO</h1>
  );

  return (
    <div className={style.Target}>
      {responsive && title}

      <div
        className={`${style.imgContainer} ${
          animation ? style.imgAnimation : ""
        }`}
        ref={imgRef}
      ></div>
      <div className={style.infoContainer}>
        {!responsive && title}

        <div
          className={`${style.textContainer} ${
            animation ? style.textAnimation : ""
          }`}
        >
          <section>
            <h3>PERSONALIDADES:</h3>
            <p>CREATIVAS. EXPRESIVAS. AVENTURERAS</p>
          </section>
          <section>
            <h3>INTERESES:</h3>
            <p>DISEÑO. VIAJES. CULTURA</p>
          </section>
          <section>
            <h3>MOTIVACIONES:</h3>
            <p>INDEPENDENCIA. INDIVIDUALIDAD. VERSATILIDAD</p>
          </section>
          <section>
            <h3>ESTILO DE VIDA:</h3>
            <p>COSMOPOLITAN</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Target;
