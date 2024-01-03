import { AnimationOnScroll } from "react-animation-on-scroll";
import Mini from "./Components/Mini";
import me from "./Components/images/important1.jpg";
import ScrollToTop from "./Components/ScrollToTop";

const About = () => {
  return (
    <>
      <ScrollToTop />
      <div className="about-all ">
        <span className="span">About</span>
        <p className="pin">
          A web developer with a strong eye for innovative design and a keen
          understanding of techniques geared towards optimum user experience
        </p>
        <section>
          <img src={me} alt="error" />
          <aside>
            <h2> Web Developer & Designer</h2>
            <span>
              An adept and motivated Web Developer with a track record of honing
              a versatile skill set, characterized by a commitment to excellence
              and a relentless pursuit of quality.
            </span>
            <div className="info">
              <p>
                <span className="coin">Phone:</span>
                <span> +2348039827644</span>
              </p>
              <p>
                <span className="coin">City:</span>
                <span> Lagos,Nigeria</span>
              </p>
              <p>
                <span className="coin">Degree:</span>
                <span> Bsc</span>
              </p>
              <p>
                <span className="coin">Email:</span>
                <span> gabrielayoku@gmail.com</span>
              </p>
              <p>
                <span className="coin">Freelance:</span>
                <span> Available</span>
              </p>
            </div>
            <p className="rigor">
              As a seasoned front-end developer specializing in React, I
              demonstrate proficiency in crafting sophisticated and dynamic user
              interfaces. My expertise extends to architecting reusable
              components, adeptly managing state, and seamlessly integrating
              with backend APIs. Possessing a robust command of HTML, CSS, and
              JavaScript, I collaborate synergistically with cross-functional
              teams, including designers and developers, to deliver impeccably
              designed and high-performance web applications tailored to meet
              the exacting needs of users
            </p>
          </aside>
        </section>
      </div>

      <AnimationOnScroll
        animateOnce="true"
        animateIn="is-visible"
        animateOut="not-visible"
      >
        <Mini />
      </AnimationOnScroll>
    </>
  );
};

export default About;
