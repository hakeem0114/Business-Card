//React Library
import React from 'react'

//Images
import emailLogo from './assets/email.png'
import linkedinLogo from './assets/linkedin.png'

function Content(){
    return(
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
    )
}

export{
    Content
}

