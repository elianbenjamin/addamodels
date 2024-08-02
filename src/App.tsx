import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import School from "./Pages/School/School";
import Photos from "./Pages/Gallery/Gallery";
import { RefObject, useEffect, useRef } from "react";
import News from "./Pages/News/News";
import Footer from "./components/Footer/Footer";

function App() {
  const { pathname } = useLocation();
  const ref = useRef<{
    ref1: RefObject<HTMLDivElement>;
    ref2: RefObject<HTMLDivElement>;
  }>(null);
  const scroll = (target: "top" | "bottom") => {
    if (ref.current) {
      const { ref1, ref2 } = ref.current;
      if (target === "top") {
        ref1.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      } else {
        ref2.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <NavBar scroll={scroll} />

      <Routes>
        <Route path="/" element={<Home ref={ref} scroll={scroll} />} />
        <Route path="/school" element={<School />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/news" element={<News />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
