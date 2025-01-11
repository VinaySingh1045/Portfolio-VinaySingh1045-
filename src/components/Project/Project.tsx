import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://drive.google.com/file/d/1lbz6Hh8ewAv6zlk_xgqpx_lEY9NqvEWV/view?usp=sharing" target="_blank" rel="noreferrer" >
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Code</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              </a>
              <div className="project-links">
                <a href="https://github.com/VinaySingh1045/Strontium" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://strontium.freewebhostmost.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Strontium, The Spotify Clone</h3>
              <p> Developed Strontium, a Spotify-inspired music streaming application using HTML, CSS, and JavaScript. The app features a visually appealing and responsive design, ensuring a seamless user experience across various devices. It includes a functional music player and playlist display.. </p>
            </div>
            <footer> <ul className="tech-list"> <li>JavaScript</li> <li>HTML</li> <li>CSS</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://drive.google.com/file/d/1ef5_37EOmvR229ExLy7Y4u5f2Nc6M_LJ/view?usp=sharing" target="_blank" rel="noreferrer">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Code</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              </a>
              <div className="project-links">
                <a href="https://github.com/VinaySingh1045/HireHub" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://hirehub-two.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>HireHub: Job Seeking Website</h3>
              <p>
                HireHub is a modern job-seeking platform where users can browse job listings, apply for jobs, and track the status of their applications. It aims to simplify the job application process and provide a seamless experience for both job seekers and employers.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Nodejs</li>
                <li>Reactjs</li>
                <li>Tailwind CSS</li>
                <li>Shadcn UI</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://drive.google.com/file/d/1sMClR2adckZBhgDQ7bnLKf6CsJ6fsOWm/view?usp=sharing" target="_blank" rel="noreferrer">

                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <title>Code</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
              <div className="project-links">
                <a href="https://github.com/VinaySingh1045/Contact-App" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://contact-app-phi-six.vercel.app/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Contact Storing App</h3>
              <p>
                This contact app built with ReactJS and Redux allows users to effortlessly add, manage, and view their contact list. With data securely stored in localStorage, users can access their personalized contact list anytime.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Reactjs</li>
                <li>Redux-Toolkit</li>
                <li>Tailwind CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://drive.google.com/file/d/1At6tX0_XwnM8OcIueL7UTjG0FvIXexlO/view?usp=sharing" target="_blank" rel="noreferrer">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Code</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </a>
              <div className="project-links">
                <a href="https://github.com/VinaySingh1045/OTT-Platform" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://ott-platform-delta.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>OTT Platform: Movie Watching WebSite</h3>
              <p>Developed a feature-rich OTT platform using Next.js, Tailwind CSS, and MongoDB, showcasing a dynamic and responsive user interface. Integrated API calls to fetch and display content seamlessly, ensuring a smooth user experience.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Nexjs</li>
                <li>Tailwind</li>
                <li>Api Fetch</li>
                <li>Mongodb</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://drive.google.com/file/d/1QPgzv7K_TL9LmGrPd9juTucWOe2Zogji/view?usp=sharing" target="_blank" rel="noreferrer">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <title>Code</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
              <div className="project-links">
                <a href="https://github.com/VinaySingh1045/Blog-App" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://blog-app-one-indol.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Blog App</h3>
              <p>Designed and developed a Blog Application using ReactJS, Appwrite, TinyMCE, and Tailwind CSS. The application allows users to create and post content, leveraging TinyMCE for a rich text editing experience. Users can log in to view and interact with posts from other users, ensuring a seamless and engaging platform for content sharing. This project highlights expertise in front-end development, integration with backend services.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJs</li>
                <li>AppWrite</li>
                <li>TinyMCE</li>
                <li>Tailwind</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://drive.google.com/file/d/1AlKZeQTvg0vWwUJPFAg6jq54eh1tCuhF/view?usp=sharing" target="_blank" rel="noreferrer" >
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <title>Code</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
              <div className="project-links">
                <a href="https://github.com/VinaySingh1045/Password-Manager-" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://password-manager-k7ow.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Password Manager App</h3>
              <p>Developed a secure Password Manager application using ReactJS, Tailwind CSS, and MongoDB. The app enables users to save and manage their passwords efficiently, providing a user-friendly interface and responsive design. Integrated MongoDB for secure backend storage and utilized local storage for quick data access, demonstrating expertise in building full-stack applications with a focus on usability and security.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJs</li>
                <li>LocalStroage</li>
                <li>Tailwind</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}