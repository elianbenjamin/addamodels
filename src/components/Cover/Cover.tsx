import { ForwardedRef, forwardRef, useEffect, useRef, useState } from "react";
import style from "./cover.module.scss";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Cover = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const coverContainer = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [titleAnimation, setTitleAnimation] = useState<boolean>(false);
  const [subtitleAnimation, setSubtitleAnimation] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (titleRef.current && subtitleRef.current) {
        const titleDistance = titleRef.current.getBoundingClientRect().top;
        const subtitleDistance =
          subtitleRef.current.getBoundingClientRect().top;
        if (window.innerHeight <= titleDistance) setTitleAnimation(true);
        if (window.innerHeight <= subtitleDistance) setSubtitleAnimation(true);
      }
    });
  }, []);

  return (
    <div className={style.Cover} ref={coverContainer}>
      <section className={style.MainContainer} ref={ref}>
        <h1
          ref={titleRef}
          className={titleAnimation ? style.titleAnimation : ""}
        >
          ADDA MODELS
        </h1>
        <p
          ref={subtitleRef}
          className={subtitleAnimation ? style.subtitleAnimation : ""}
        >
          ESCUELA Y AGENCIA DE MODELOS PROMOTORES
        </p>
      </section>
    </div>
  );
});

export default Cover;
