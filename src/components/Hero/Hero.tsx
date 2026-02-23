import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/kid-doing-math-computer-screen-geometry-lesson_81894-9361-removebg-preview.png"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import twitter from '../../assets/twitter.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
import Resume from '../../assets/Vinay_Singh_Resume.pdf'

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px" />, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Vinay Singh</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Frontend Developer | React.js & MERN Stack</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Currently working at Toshal Infotech • Building scalable web applications </p>
        </ScrollAnimation>
        <div className="hero-buttons">
          <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
            <BrowserRouter>
              <a href={Resume} download className="button">
                Resume
              </a>
            </BrowserRouter>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
            <BrowserRouter>
              <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
            </BrowserRouter>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media"><a
            href="https://www.linkedin.com/in/vinay-singh-13a50a238/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
            <a
              href="https://github.com/VinaySingh1045"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://twitter.com/vinaysingh_1045"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="Whatsapp" />
            </a>
            <a
              href="https://t.me/VinaySingh1045"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="telegram" />
            </a></div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}