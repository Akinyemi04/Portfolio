import '../Components/portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfo'>
      <h1>PORTFOLIO</h1>
      <p className='content'>Projects  which i have worked on can be viewed below to better access the webapp  please click the buttons underneath them  and You'll be redirected to the webapp</p>
      <span>App</span>
      <main>
        <section>
          <iframe title='A twitter clone' src="https://twitter-clone-67536.web.app/" frameborder="0"></iframe>
          <a href="https://twitter-clone-67536.web.app/">Twitter-Clone</a>
        </section>
        <section>
          <iframe title='A Country Info App' src="https://countryroll.netlify.app/" frameborder="0"></iframe>
          <a href="https://countryroll.netlify.app/">Country-roll</a>
        </section>
        <section>
          <iframe title='Netflix Clone' src="https://netflix-0a.netlify.app/" frameborder="0"></iframe>
          <a  href='https://netflix-0a.netlify.app/'>Netflix-Clone</a>
        </section>
        <section>
          <iframe title='A Calculator' src="https://calculatorx1x.netlify.app/" frameborder="0"></iframe>
          <a href="https://calculatorx1x.netlify.app/">Calculator</a>
        </section>
        <section>
          <iframe title='An ecommerce website' src="https://e-commercial01x.netlify.app/" frameborder="0"></iframe>
          <a href="https://e-commercial01x.netlify.app/">E-commerce</a>
        </section>
        
      </main>
    </div>
  )
}

export default Portfolio;