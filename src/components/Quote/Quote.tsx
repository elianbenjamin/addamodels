import { useEffect, useRef, useState } from "react";
import { QuoteIcon } from "../../assets/icons";
import style from "./quote.module.scss";

const Quote = () => {
  const leftIconRef = useRef<HTMLDivElement>(null);
  const rightIconRef = useRef<HTMLDivElement>(null);
  const [leftIconAnimation, setLeftIconAnimation] = useState<boolean>(false);
  const [rightIconAnimation, setRightIconAnimation] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (leftIconRef.current && rightIconRef.current) {
        const leftIconDistance =
          leftIconRef.current.getBoundingClientRect().top;
        if (leftIconDistance <= window.innerHeight) {
          setLeftIconAnimation(true);
          setRightIconAnimation(true);
        }
      }
    });
  }, []);

  return (
    <div className={style.Quote}>
      <div
        className={`${style.leftIconContainer} ${
          leftIconAnimation ? style.leftIconAnimation : ""
        }`}
        ref={leftIconRef}
      >
        <QuoteIcon />
      </div>
      
      <div className={style.textContainer}>
        <p className={leftIconAnimation ? style.textAnimation : ""}>
          PARA ESTILOS DE VIDA DINÁMICOS Y CREATIVOS, "ADDA MODELS" REDEFINE LOS
          CÓDIGOS DE VESTIMENTA, VOLVIENDO A POSICIONAR PIEZAS CLAVES PARA UN
          GUARDARROPAS GENDERLESS, DE UNA FORMA ESTIMULANTE Y CON PERSPECTIVAS
          DE EXPANSIÓN INTERNACIONAL.
        </p>
      </div>

      <div
        className={`${style.rightIconContainer} ${
          rightIconAnimation ? style.rightIconAnimation : ""
        }`}
        ref={rightIconRef}
      >
        <QuoteIcon />
      </div>
    </div>
  );
};

export default Quote;
