import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
import ScrollToTop from "./ScrollToTop";

const Resume = () => {
  return (
    <div className="resumex">
      <ScrollToTop />
      <article>
        <h1> Resume</h1>
        <p className="pin"></p>
      </article>
      <main>
        <div className="one">
          <p className="head">SUMMARY</p>
          <section>
            <Brightness1OutlinedIcon className="circle" />
            <HorizontalRuleIcon className="icon" />
            <p className="next-head">AKINYEMI GABRIEL</p>
            <p className="content">
              innovative and deadline driven front-end developer with hands on
              experience of designing and developing responsive user interface
              and a smooth and entertaining user experience
            </p>
            <ul>
              <li>Ifako-Ijaiye,Lagos,Nigeria</li>
              <li>(+234)80-398-276-44</li>
              <li>gabrielayoku@gmail.com</li>
            </ul>
          </section>
        </div>
        <div className="two">
          <p className="head">EDUCATION</p>
          <section>
            <Brightness1OutlinedIcon className="circle" />
            <HorizontalRuleIcon className="icon" />
            <p className="next-head">B.SC IN SURVEY AND GEOMATICS</p>
            <aside className="aside">2018 - Till Date </aside>
            <p className="content"> University Of Lagos,Nigeria</p>
            <ul>
              <li>
                Currently taking a 5 year course at the faculty of Engineering
              </li>
              <li>
                While studying i've taken some courses in neighbouring faculty
                and departments
                <ul>
                  <li>Systems Department</li>
                  <li>Computer Science</li>
                </ul>
                to better understand the candies of coding
              </li>
            </ul>
            <p> </p>
          </section>
        </div>
        <div className="three">
          <p className="head">EXPERIENCE</p>
          <section>
            <Brightness1OutlinedIcon className="circle" />
            <HorizontalRuleIcon className="icon" />
            <p className="next-head">FULL STACK DEVELOPER</p>
            <aside className="aside">02/2023 - 04/23</aside>
            <p className="content">Delph</p>
            <ul>
              <li>
                Created several api's for user authentication and third parties
                integration for full network flow
              </li>
              <li>Built fully functional and responsive websites </li>
            </ul>
            <p className="next-head">FRONT-END DEVELOPER</p>
            <aside className="aside"> 08/ 23 - 09/ 2023</aside>
            <p className="content">Acada-Power</p>
            <ul>
              <li>
                successfully designed and implemented a captivating landing page
                with seamless integration, showcasing my proficiency in creating
                visually appealing and functional user interfaces. This
                achievement involved skillfully blending aesthetic elements with
                technical prowess to deliver a user-friendly and engaging
                experience
              </li>
            </ul>
            <p className="next-head">FRONT-END DEVELOPER</p>
            <aside className="aside">09/23 </aside>
            <p className="content"> Ennyz</p>
            <ul>
              <li>
                I collaborated with a designer to bring his vision to life,
                crafting an exceptional portfolio that resonated with their
                artistic vision. Through meticulous coding and attention to
                detail, I ensured the seamless integration of design elements,
                resulting in a visually stunning and highly functional portfolio
                that met the designer's expectations and garnered their genuine
                appreciation.
              </li>
            </ul>
            <p className="next-head">FRONT-END DEVELOPER</p>
            <aside className="aside">10/2023- 12/23</aside>
            <p className="content">Rimynder</p>
            <ul>
              <li>
                My role involves translating design concepts into fully
                functional and aesthetically pleasing user interfaces. Through
                consistent collaboration and iterative development, I've played
                a key part in shaping and enhancing the project's front-end
                experience.
              </li>
            </ul>
          </section>
        </div>
        <div className="four">
          <section>
            <Brightness1OutlinedIcon className="circle" />
            <HorizontalRuleIcon className="icon" />
            <p className="next-head">FreeCode-Camp</p>
            <aside className="aside">12/2021 - 04/2022</aside>
            <p className="content">Certificates</p>
            <ul>
              <li>Responsive Web Design</li>
              <li>Front-end Development Libraries</li>
              <li>React-Redux</li>
              <li>Advance Python</li>
              <li>SQL</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Resume;
