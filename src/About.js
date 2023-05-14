import { AnimationOnScroll } from 'react-animation-on-scroll';
import Mini from './Components/Mini'
import me from './Components/images/important1.jpg'
import ScrollToTop from './Components/ScrollToTop';

const About = () => {

  return (
    <>
        <ScrollToTop/>
        <div className='about-all '>
          <span className='span'>About</span>
            <p className='pin'>A web developer with a strong eye for innovative design and a keen understanding of techniques geared
    towards optimum user experience</p>
        <section>
          <img src={me} alt="error" />
          <aside>
            <h2> Web Developer & Designer</h2>
            <span>
                A competent and  enthusiastic  Web Developer who, over time, has built up a diverse range of skills, qualities and attributes that guarantee best performance and quality.
            </span>
            <div className='info'>
              <p><span className='coin'>Phone:</span><span> +2348039827644</span></p>
              <p><span className='coin'>City:</span><span> Lagos,Nigeria</span></p>
              <p><span className='coin'>Degree:</span><span> Bsc</span></p>
              <p><span className='coin'>Email:</span><span> gabrielayoku@gmail.com</span></p>
              <p><span className='coin'>Freelance:</span><span> Available</span></p>
            </div>
            <p className='rigor'>
            As a frontend developer with expertise in React, I excel at building intuitive and dynamic user interfaces. My skills include creating reusable components, managing state effectively, and integrating with backend APIs. I have a strong understanding of HTML, CSS, and JavaScript, and I work collaboratively with designers and developers to deliver high-quality web applications that meet user needs.
            </p>
          </aside>
          </section>
          
        </div>
  
    <AnimationOnScroll animateOnce='true'  animateIn='is-visible'  animateOut='not-visible'>
      <Mini/>
    </AnimationOnScroll>
    </>
  )
}

export default About;