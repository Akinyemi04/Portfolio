import "../Components/portfolio.css";
// import country from "./images/country.png";
// import url from "./images/url.png";
// import ip from "./images/ip_address.png";
// import form from "./images/multi-form.png";
// import jobber from "./images/jobberman.png";
// import ecommerce from "./images/e-commerce-2.png";
// import lendsqr from "./images/lendsqr.png";
// import designo from "./images/designo.png";
import acadapower from "./images/acadapower.png";
import enny from "./images/enny.png";
import zen from "./images/zenarchery.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import { useDispatch } from "react-redux";
import { animate } from "./store";
import { useSelector } from "react-redux";
import kbs from "./images/kb-detailing.png";
import foundation from "./images/foundation.png";

const Portfolio = () => {
  const width = window.screen.availWidth;
  const dispatch = useDispatch();
  const active = useSelector((val) => {
    return val.animate.active_portfolio;
  });
  useEffect(() => {
    Aos.init({
      offset: window.screen.availHeight * 0.01,
    });
  }, []);
  function accept(e) {
    dispatch(animate.changeActivePortfolio(e.target.innerHTML));
  }
  return (
    <div className="portfo">
      <ScrollToTop />
      <h1>PORTFOLIO</h1>
      {/* <p className="content">
        Projects which i have worked on can be viewed below to better access the
        webapp please click the buttons underneath them
      </p> */}

      <main>
        <section data-aos="zoom-in" data-aos-delay={width > 500 ? "100" : "0"}>
          <img src={zen} alt="acada power" />
          <a target="_blank" href="https://zenarchery.club/">
            Zen Archery
          </a>
        </section>
        <section data-aos="zoom-in" data-aos-delay={width > 500 ? "100" : "0"}>
          <img src={acadapower} alt="acada power" />
          <a target="_blank" href="https://acadapower.com/">
            Acada Power
          </a>
        </section>
        <section data-aos="zoom-in" data-aos-delay={width > 500 ? "100" : "0"}>
          <img src={kbs} alt="" />
          <a target="_blank" href="https://kbsdetailing.com/">
            kb's Detailing
          </a>
        </section>
        <section data-aos="zoom-in" data-aos-delay={width > 500 ? "100" : "0"}>
          <img src={enny} alt="enny" />
          <a target="_blank" href="http://eniolaawosika.com/">
            Ennyz
          </a>
        </section>
        <section data-aos="zoom-in" data-aos-delay={width > 500 ? "100" : "0"}>
          <img src={foundation} alt="fafoundation" />
          <a target="_blank" href="https://fafoundation-8uzl.vercel.app/">
            FAfoundation
          </a>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
