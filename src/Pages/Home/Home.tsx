import style from "./home.module.scss";
import Cover from "../../components/Cover/Cover";
import modelaje from "../../assets/modelaje.mov";
import { forwardRef, useImperativeHandle, useRef } from "react";
import TheBrand from "../../components/TheBrand/TheBrand";
import Quote from "../../components/Quote/Quote";
import MisionVisionValues from "../../components/MisionVisionValues/MisionVisionValues";
import Moodboard from "../../components/Moodboard/Moodboard";
import Target from "../../components/Target/Target";
import Catalogue from "../../components/Catalogue/Catalogue";
import { ArrowDownCircle, WhatsappIconBlack } from "../../assets/icons";

interface Props {
  scroll: (target: "top" | "bottom") => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = forwardRef((props: Props, ref) => {
  const { scroll } = props;

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useImperativeHandle(ref, () => ({
    ref1,
    ref2,
  }));

  return (
    <div className={style.Home}>
      <div className={style.videoContainer} ref={ref1}>
        <video src={modelaje} autoPlay loop muted />
        <ArrowDownCircle
          onClick={() => {
            setTimeout(() => {
              scroll("bottom");
            }, 0);
          }}
        />
      </div>

      <Cover ref={ref2} />
      <TheBrand />
      <Quote />
      <MisionVisionValues />
      <Moodboard />
      <Target />
      <Catalogue />
      <a
        className={style["whatsapp-container"]}
        href={`https://wa.me/3534137494?text=${encodeURIComponent("")}`}
        target="_blank"
      >
        <WhatsappIconBlack />
      </a>
    </div>
  );
});

export default Home;
