import "../Components/portfolio.css";
import country from "./images/country.png";
import url from "./images/url.png";
import ip from "./images/ip_address.png";
import form from "./images/multi-form.png";
import jobber from "./images/jobberman.png";
import ecommerce from "./images/e-commerce-2.png";
import lendsqr from "./images/lendsqr.png";
import designo from "./images/designo.png";
import acadapower from "./images/acadapower.png";
import enny from "./images/enny.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import { useDispatch } from "react-redux";
import { animate } from "./store";
import { useSelector } from "react-redux";
import kbs from './images/kb-detailing.png'

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
      <p className="content">
        Projects which i have worked on can be viewed below to better access the
        webapp please click the buttons underneath them and You'll be redirected
        to the webapp
      </p>
      <nav>
        <span onClick={accept}>Personal </span>
        <span onClick={accept}>Collaborative</span>
      </nav>
      {active !== "Collaborative" ? (
        <main>
          <section
            data-aos="zoom-in"
            data-aos-delay={width > 500 ? "100" : "100"}
          >
            <img src={designo} alt="" />
            <a
              target="_blank"
              href="https://master--funny-piroshki-ecbd9a.netlify.app/"
            >
              Designo
            </a>
          </section>
          <section
            data-aos="zoom-in"
            data-aos-delay={width > 500 ? "250" : "0"}
          >
            <img src={lendsqr} alt="" />
            <a
              target="_blank"
              href="https://akinyemi-gabriel-lendsqr-fe-test.netlify.app/"
            >
              Lendsqr
            </a>
          </section>
          <section
            data-aos="zoom-in"
            data-aos-delay={width > 500 ? "400" : "0"}
          >
            <img src={ecommerce} alt="" />
            <a target="_blank" href="https://elegant-commercial.netlify.app/">
              E-commerce
            </a>
          </section>
          <section
            data-aos="zoom-in"
            data-aos-delay={width > 500 ? "550" : "0"}
          >
            <img src={jobber} alt="" />
            <a target="_blank" href="https://jobblee.netlify.app/">
              Jobber Man
            </a>
          </section>
          <section
            data-aos="zoom-in"
            data-aos-delay={width > 500 ? "100" : "0"}
          >
            <img src={form} alt="" />
            <a target="_blank" href="https://form-livex1.netlify.app/">
              Gamer Sign-up
            </a>
          </section>
          <section
            data-aos="zoom-in"
            data-aos-delay={width > 500 ? "250" : "0"}
          >
            <img src={ip} alt="" />
            <a target="_blank" href="https://ip-trackerx1.netlify.app/">
              IP Tracker
            </a>
          </section>
          <section
            data-aos="zoom-in"
            data-aos-delay={width > 500 ? "250" : "0"}
          >
            <img src={url} alt="" />
            <a target="_blank" href="https://url-shortenerx1x.netlify.app/">
              Url Shortener
            </a>
          </section>
          <section
            data-aos="zoom-in"
            data-aos-delay={width > 500 ? "100" : "0"}
          >
            <img src={country} alt="country-finder" />
            <a target="_blank" href="https://countryroll.netlify.app/">
              Country-roll
            </a>
          </section>
        </main>
      ) : (
        <main>
          <section
            data-aos="zoom-in"
            data-aos-delay={width > 500 ? "100" : "0"}
          >
            <img src={acadapower} alt="acada power" />
            <a target="_blank" href="https://acadapower.com/">
              Acada Power
            </a>
          </section>
          <section             data-aos="zoom-in"
            data-aos-delay={width > 500 ? "100" : "0"}>
              <img src={kbs} alt="" />
              <a target='_blank' href="https://kbsdetailing.com/">kb's Detailing</a>

          </section>
          <section
            data-aos="zoom-in"
            data-aos-delay={width > 500 ? "100" : "0"}
          >
            <img src={enny} alt="enny" />
            <a target="_blank" href="http://eniolaawosika.com/">
              Ennyz
            </a>
          </section>
          
        </main>
      )}
    </div>
  );
};

export default Portfolio;
