import style from "./navBar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/adda.svg";
import { CloseIcon, MenuIcon } from "../../assets/icons";

interface Props {
  scroll: (target: "top" | "bottom") => void;
}

export const NavBar = (props: Props) => {
  const { pathname } = useLocation();
  const { scroll } = props;
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [responsive, setResponsive] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };
    const handleResize = () => {
      if (window.innerWidth <= 750) setResponsive(true);
      else setResponsive(false);
    };

    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`${style.NavBar} ${
        isScrolled || pathname !== "/" ? style.navBar_active : ""
      }`}
    >
      {responsive &&
        (!menuOpen ? (
          <MenuIcon onClick={() => setMenuOpen(true)} />
        ) : (
          <CloseIcon onClick={() => setMenuOpen(false)} />
        ))}

      <ul
        className={`${style.buttons} ${
          responsive ? style.buttonsResponsive : ""
        } ${
          responsive && (isScrolled || pathname !== "/")
            ? style.navBar_active
            : ""
        } ${menuOpen ? style.buttonsResponsive_open : ""}`}
      >
        <li
          className={pathname === "/" && isScrolled ? style.active : ""}
          onClick={() => {
            setTimeout(() => {
              scroll("bottom");
            }, 0);
            setMenuOpen(false);
          }}
        >
          <Link to={"/"}>QUIENES SOMOS</Link>
        </li>
        <li
          className={pathname === "/school" ? style.active : ""}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/school">ESCUELA</Link>
        </li>
        <li
          className={pathname === "/photos" ? style.active : ""}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/photos">FOTOS</Link>
        </li>
        <li
          className={pathname === "/news" ? style.active : ""}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/news">NOVEDADES</Link>
        </li>
      </ul>

      <div
        className={style.titleContainer}
        onClick={() => {
          setTimeout(() => {
            scroll("top");
          }, 0);
        }}
      >
        <h3>ADDA MODELS</h3>

        <div className={style.logoContainer}>
          <img src={logo} alt="logo"></img>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
