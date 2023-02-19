import dogLogo from './assets/dog.jpg'
import emailLogo from './assets/email.png'
import linkedinLogo from './assets/linkedin.png'
import twitterLogo from './assets/twitter.png'
import igLogo from './assets/ig.png'
import githubLogo from './assets/github.png'

import './App.css'


function App() {

  return (
    <div className="App">
      <img src={dogLogo} className="logo dog" alt="Dog logo" />

      <div className="content">
          <div className="header">
              <h2>Hakeem Abdul-Razak</h2>
              <h5>Web Developer</h5>

                <div className="buttonContent">
                    <a target="_blank" href="https://www.linkedin.com/in/hakeemabdul-razak/">
                      <button className="email">  
                         <img src={emailLogo} className="emailLogo" alt="Email logo" />
                          <p>Email</p>
                        
                        </button>

                     </a>

                     <a target="_blank" href="https://www.linkedin.com/in/hakeemabdul-razak/">
                        <button className="LinkedIn">
                              <img src={linkedinLogo } className="LinkedInLogo" alt="Email logo" />
                              <p> LinkedIn</p>
                          </button>
                     </a>

                </div>
            </div>
            

          <div className="About">
            <h1>About</h1>
             <p>I am a web developer & mechatronics engineeer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          </div>

          <div className="Interests">
              <h1>Interests</h1>
              <p> Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>

      </div>

      <footer>
          <img src={twitterLogo} className="footerLogo" alt="Twitter Image" />
          <img src={igLogo} className="footerLogo" alt="Ig Image" />
          <img src={githubLogo} className="footerLogo" alt="Github Image" />
      </footer>

    </div>
  )
}

export default App
