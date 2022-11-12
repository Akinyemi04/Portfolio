import '../Components/portfolio.css'
import twitter from './images/twitter.png'
import netflix from './images/netflix.png'
import calculator from './images/calculaator.png'
import commerce from './images/e-commerce.png'
import country from './images/country.png'
import game from './images/Game.png'
import url from './images/url.png'
import ip from './images/ip_address.png'
const Portfolio = () => {
  return (
    <div className='portfo'>
      <h1>PORTFOLIO</h1>
      <p className='content'>Projects  which i have worked on can be viewed below to better access the webapp  please click the buttons underneath them  and You'll be redirected to the webapp</p>
      <span>App</span>
      <main>
        <section>
          <img src={ip} alt="" />
          <a href="https://ip-trackerx1.netlify.app/">IP Tracker</a>
          </section>
        <section>
          <img src={twitter} alt="twitter.webpage" />
          <a href="https://twitter-clone-67536.web.app/">Twitter-Clone</a>
        </section>
        <section>
          <img src={url} alt="" />
          <a href="https://url-shortenerx1x.netlify.app/">Url Shortener</a>
        </section>
        <section>
            <img src={game} alt="" />
            <a href="https://rock-paper-scissorx.netlify.app/">Rock-Paper-Scissors</a>
        </section>
        <section>
          <img src={country} alt="country-finder" />
          <a href="https://countryroll.netlify.app/">Country-roll</a>
        </section>
        <section>
         <img src={netflix} alt="netflix" />
          <a  href='https://netflix-0a.netlify.app/'>Netflix-Clone</a>
        </section>
        <section>
          <img src={calculator} alt="calculator" />
          <a href="https://calculatorx1x.netlify.app/">Calculator</a>
        </section>
        <section>
          <img src={commerce} alt="commerce" />
          <a href="https://e-commercial01x.netlify.app/">E-commerce</a>
        </section>
        
      </main>
    </div>
  )
}

export default Portfolio;