import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import twitter from '../../assets/twitter.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <div className="logo">
        <span>{"<Vinay"}</span>
        <span>{" Singh/>"}</span>
      </div>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" /> and with
          <span>❤️</span>
        </p>
      </div>
      <div className="social-media">
        <a
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
        </a>
        <a
          href="https://www.instagram.com/vinaysingh9886/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
