import '../Components/portfolio.css'
import twitter from './images/twitter.png'
import netflix from './images/netflix.png'
import calculator from './images/calculaator.png'
import commerce from './images/e-commerce.png'
import country from './images/country.png'
import game from './images/Game.png'
import url from './images/url.png'
import ip from './images/ip_address.png'
import bank from './images/easybank.png'
import form from './images/multi-form.png'
import countdown from './images/countdown.png'
import jobber from './images/jobberman.png'
import ecommerce from './images/e-commerce-2.png'
import home_page from './images/room-page.png'
import lendsqr from './images/lendsqr.png'
import designo from './images/designo.png'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import ScrollToTop from './ScrollToTop'
const Portfolio = () => {
  const width = window.screen.availWidth
  useEffect(()=>{
    Aos.init(
      {
        offset:(window.screen.availHeight * .01)
      }
    )
  },[])
  return (
    <div className='portfo'>
      <ScrollToTop/>
      <h1>PORTFOLIO</h1>
      <p className='content'>Projects  which i have worked on can be viewed below to better access the webapp  please click the buttons underneath them  and You'll be redirected to the webapp</p>
      <span>App</span>
      <main>
      <section data-aos='zoom-in' data-aos-delay={width > 500 ? '100':'100'}>
          <img src={designo} alt="" />
          <a target="_blank" href="https://master--funny-piroshki-ecbd9a.netlify.app/">Designo</a>
        </section>
        <section data-aos='zoom-in' data-aos-delay={width > 500 ? '250':'0'}>
          <img src={lendsqr} alt="" />
          <a target="_blank" href="https://akinyemi-gabriel-lendsqr-fe-test.netlify.app/">Lendsqr</a>
        </section>
      <section data-aos='zoom-in' data-aos-delay={width > 500 ? '400':'0'}>
          <img src={ecommerce} alt="" />
          <a target="_blank" href="https://elegant-commercial.netlify.app/">E-commerce</a>
          </section>
        <section data-aos='zoom-in' data-aos-delay={width > 500 ? '550':'0'}>
          <img src={jobber} alt="" />
          <a target="_blank" href="https://jobblee.netlify.app/">Jobber Man</a>
          </section>
        <section data-aos='zoom-in' data-aos-delay={width > 500 ? '100':'0'}>
          <img src={form} alt="" />
          <a target="_blank" href="https://form-livex1.netlify.app/">Gamer Sign-up</a>
        </section>
        <section data-aos='zoom-in' data-aos-delay={width > 500 ? '250':'0'}>
          <img src={ip} alt="" />
          <a target="_blank" href="https://ip-trackerx1.netlify.app/">IP Tracker</a>
          </section>
        <section data-aos='zoom-in' data-aos-delay={width > 500 ? '100':'0'}>
          <img src={twitter} alt="twitter.webpage" />
          <a target="_blank" href="https://twitter-clone-67536.web.app/">Twitter-Clone</a>
        </section>
        <section data-aos='zoom-in' data-aos-delay={width > 500 ? '250':'0'}>
          <img src={countdown} alt="" />
          <a target="_blank" href="https://count-down01.netlify.app/">Countdown Timer</a>
        </section>
        <section data-aos='zoom-in' data-aos-delay={width > 500 ? '100':'0'}>
          <img src={url} alt="" />
          <a target="_blank" href="https://url-shortenerx1x.netlify.app/">Url Shortener</a>
        </section>
        <section data-aos='zoom-in' data-aos-delay={width > 500 ? '250':'0'}>
          <img src={home_page} alt="" />
          <a target="_blank" href="https://home-suite.netlify.app/">Home-Royal</a>
        </section>
        <section data-aos='zoom-in' data-aos-delay={width > 500 ? '100':'0'}>
            <img src={game} alt="" />
            <a target="_blank" href="https://rock-paper-scissorx.netlify.app/">Rock-Paper-Scissors</a>
        </section>
        <section data-aos='zoom-in' data-aos-delay={width > 500 ? '250':'0'}>
          <img src={country} alt="country-finder" />
          <a target="_blank" href="https://countryroll.netlify.app/">Country-roll</a>
        </section>
        <section data-aos='zoom-in' data-aos-delay={width > 500 ? '100':'0'}>
          <img src={bank} alt="" />
          <a target="_blank" href="https://easy-bankx1.netlify.app/">EasyBank Landing page</a>
        </section>
        <section data-aos='zoom-in' data-aos-delay={width > 500 ? '250':'0'}>
         <img src={netflix} alt="netflix" />
          <a  target="_blank" href='https://netflix-0a.netlify.app/'>Netflix-Clone</a>
        </section>
        <section data-aos='zoom-in' data-aos-delay={width > 500 ? '100':'0'}>
          <img src={calculator} alt="calculator" />
          <a target="_blank" href="https://calculatorx1x.netlify.app/">Calculator</a>
        </section>
        <section data-aos='zoom-in' data-aos-delay={width > 500 ? '250':'0'}>
          <img src={commerce} alt="commerce" />
          <a target="_blank" href="https://e-commercial01x.netlify.app/">E-commerce</a>
        </section>
        
      </main>
    </div>
  )
}

export default Portfolio;