import style from "./gallery.module.scss";
import imagePaths from "../../assets/images/gallery-images";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Photos = () => {
  return (
    <div className={style.Photos}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 500: 2, 750: 3, 1100: 4, 1500: 5 }}
        className={style.Masonry}
      >
        <Masonry gutter="5px">
          {Object.keys(imagePaths).map((key) => (
            <img key={key} src={imagePaths[key]} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Photos;
