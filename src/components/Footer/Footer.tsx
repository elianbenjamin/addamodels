import style from "./footer.module.scss";
import footerImg from '../../assets/images/footer-img.png';

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.imgContainer}>
        <img src={footerImg} />
      </div>
      <div className={style.content}>
        <div className={style.titleContainer}>
          <h1>ADDA MODELS</h1>
          <h3>www.addamodels.com</h3>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55804.98203698187!2d-63.256256212022755!3d-32.39224786289938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cc5dc01622f949%3A0xbe0388097f3d5347!2sVilla%20Mar%C3%ADa%20Shopping!5e0!3m2!1ses-419!2sar!4v1718739161710!5m2!1ses-419!2sar"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        <div className={style.infoContainer}>
          <p>addamodelsvm@gmail.com</p>
          <p>@addamodelss</p>
          <p>(353) 15-413-7494</p>
          <p>RUTA 158 KM 155.5 SHOOPING VM</p>
          <p>VILLA MARIA, CORDOBA</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
