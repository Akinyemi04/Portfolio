import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';

const Resume = () => {
  return (
    <div className='resumex'>
      <article>
        <h1> Resume</h1>
        <p className='pin'></p>
      </article>
    <main>
      <div className='one'>
      <p className='head'>SUMMARY</p>
      <section>
        <Brightness1OutlinedIcon className='circle'/>
        <HorizontalRuleIcon className='icon'/>
        <p className='next-head'>AKINYEMI GABRIEL</p>
         <p className='content'>
          innovative and deadline driven front-end developer with hands on experience of designing and developing  responsive user interface and a smooth and entertaining user experience
         </p>
         <ul>
          <li>
            Ifako-Ijaiye,Lagos,Nigeria
          </li>
          <li>(+234)80-398-276-44</li>
          <li>gabrielayoku@gmail.com</li>
         </ul>
      </section>
      </div>
      <div className='two'>
      <p className='head'>EDUCATION</p>
      <section>
        <Brightness1OutlinedIcon className='circle'/>
        <HorizontalRuleIcon className='icon'/>
        <p className='next-head'>B.SC IN SURVEY AND GEOMATICS</p>
        <aside className='aside'>2018 - Till Date </aside>
        <p className="content"> University Of Lagos,Nigeria</p>
        <ul>
          <li>Currently taking a  5 year course  at the faculty of Engineering</li>
          <li>While studying  i've  taken some courses in neighbouring faculty and departments 
            <ul>
              <li>Systems Department</li>
              <li>Computer Science</li>
            </ul>
              to better understand the candiesof coding
          </li>

        </ul>
        <p> </p>

      </section>

      </div>
      <div className='three'>
        <p className="head">EXPERIENCE</p>
      <section>
        <Brightness1OutlinedIcon className='circle'/>
        <HorizontalRuleIcon className='icon'/>
        <p className="next-head">FRONT-END DEVELOPER</p>
        <aside className="aside">2022 - Till Date</aside>
        <p className="content">FreeLance</p>
        <ul>
          <li>Twitter-clone</li>
          <li>Netflix-xlone</li>
          <li>E-commerce</li>
          <li>Calculator</li>
        </ul>

      </section>
      </div>
      <div className='four'>
      <section >
        <Brightness1OutlinedIcon className='circle'/>
        <HorizontalRuleIcon className='icon'/>
        <p className="next-head">FreeCode-Camp</p>
        <aside className="aside">12/2021 - 04/2022</aside>
        <p className="content">Certificates</p>
        <ul>
          <li>Responsive Web Design</li>
          <li>Front-end Development Libraries</li>
          <li>React-Redux</li>
          
        </ul>

      </section>
      </div>

    </main>
    </div>
  )
}

export default Resume;