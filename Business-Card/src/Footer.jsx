//React Library
import React from 'react'

//Images
import twitterLogo from './assets/twitter.png'
import igLogo from './assets/ig.png'
import githubLogo from './assets/github.png'



function Footer(){
    return(
        <footer>
            <img src={twitterLogo} className="footerLogo" alt="Twitter Image" />
            <img src={igLogo} className="footerLogo" alt="Ig Image" />
            <img src={githubLogo} className="footerLogo" alt="Github Image" />
         </footer>
    )
}

export{
    Footer
}