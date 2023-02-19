//React Library
import React from 'react'

//Images
import dogLogo from './assets/dog.jpg'
import twitterLogo from './assets/twitter.png'
import igLogo from './assets/ig.png'
import githubLogo from './assets/github.png'

//Css
import './App.css'

//Jsx
import {Content} from "./Content";
import { Footer } from "./Footer";
function App() {

  return (
    <div className="App">
      <img src={dogLogo} className="logo dog" alt="Dog logo" />

      <Content/>

      <Footer/>

    </div>
  )
}

export default App
