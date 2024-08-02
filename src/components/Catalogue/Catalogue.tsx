import style from "./catalogue.module.scss";
import tobiasSalomonImg from "../../assets/images/TobiasSalomon.jpg";
import michelBioleImg from "../../assets/images/MichelBiole.jpg";
import lucasGutierrezImg from "../../assets/images/LucasGutierrez.jpg";
import araceliYLudmilaNicolettiImg from "../../assets/images/AraceliYLudmilaNicoletti.jpg";
import camilaRodriguezImg from "../../assets/images/CamilaRodriguez.jpg";
import { useEffect, useRef, useState } from "react";

const Catalogue = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!titleRef.current) return;
      const distance = titleRef.current.getBoundingClientRect().top;
      if (distance <= window.innerHeight) setAnimation(true);
    });
  }, []);

  return (
    <div className={style.Catalogue}>
      <h1 ref={titleRef} className={animation ? style.titleAnimation : ""}>
        CATÁLOGO
      </h1>

      <div
        className={`${style.cards} ${animation ? style.cardsAnimation : ""}`}
      >
        <section>
          <div>
            <img src={tobiasSalomonImg} />
          </div>
          <p>TOBIAS SALOMON</p>
        </section>

        <section>
          <div>
            <img src={michelBioleImg} />
          </div>
          <p>MICHEL BIOLE</p>
        </section>

        <section>
          <div>
            <img src={lucasGutierrezImg} />
          </div>
          <p>LUCAS GUTIERREZ</p>
        </section>

        <section>
          <div>
            <img src={araceliYLudmilaNicolettiImg} />
          </div>
          <p>ARACELY Y LUDMILA NICOLETTI</p>
        </section>

        <section>
          <div>
            <img src={camilaRodriguezImg} />
          </div>

          <p>CAMILA RODRIGUEZ</p>
        </section>
      </div>
    </div>
  );
};

export default Catalogue;
