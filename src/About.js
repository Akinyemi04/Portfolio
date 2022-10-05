import { AnimationOnScroll } from 'react-animation-on-scroll';
import deep from './Components/images/deep.jpeg'
import Mini from './Components/Mini'


const About = () => {

    // let vari = window.requestAnimationFrame|| 
    // function(callback)
    // {
    // window.setTimeout(callback,1000/60) 
    // }
//   useEffect(()=>{
//   let elementtoshow = document.querySelectorAll('.show-on-scroll')
//   console.log(elementtoshow)

//   if(elementtoshow){
//   function loop(){
//     elementtoshow.forEach((element)=>{
//       if(isElementInViewport(element)){
//         element.classList.add('is-visible')
//       }
//       else{
//         element.classList.remove('is-visible')
//       }
//     })
//     vari(loop)
//   }
//   loop()
//   }
// })

//   function isElementInViewport (el) {
//     if (typeof jquery === "function" && el instanceof jquery) {
//         el = el[0];
//     }

//     var rect = el.getBoundingClientRect();

//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
//     );
// }

  return (
    <>
    
        <div className='about-all '>
          <span className='span'>About</span>
            <p className='pin'>A web developer with a strong eye for innovative design and a keen understanding of techniques geared
    towards optimum user experience</p>
        <section>
          <img src={deep} alt="error" />
          <aside>
            <h2> Web Developer & Designer</h2>
            <span>
            I am a positive, enthusiastic and competent Web Developer who, over time, has built up a diverse range of skills, qualities and attributes that guarantee best performance and quality.
            </span>
            <div className='info'>
              <p><span className='coin'>Phone:</span><span> +2348039827644</span></p>
              <p><span className='coin'>City:</span><span> Lagos,Nigeria</span></p>
              <p><span className='coin'>Degree:</span><span> Bsc</span></p>
              <p><span className='coin'>Email:</span><span> gabrielayoku@gmail.com</span></p>
              <p><span className='coin'>Freelance:</span><span> Available</span></p>
            </div>
            <p className='rigor'>
            I take my work as a Web Developer seriously and  ensure my skills are kept up to date within this rapidly changing industry. I will always put the  needs of every projects at the forefront of everything I do, and the work I carry out is  consistent to a first-class standard
            </p>
          </aside>
          </section>
          
        </div>
  
    <AnimationOnScroll  animateIn='is-visible'  animateOut='not-visible'>
      <Mini/>
    </AnimationOnScroll>
    </>
  )
}

export default About;