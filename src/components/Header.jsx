import React from 'react'
import '../style/header.css'
const Header = () => {
  return (
    <header className='header container'>
        <nav>
            <div className="logo-area">
                <span className="logo">WeatherApp</span>
            </div>
            <div className="icon-area">
                <a href="hhttps://github.com/Harshkhanagwal/reactweatherapp">
                    <img src="/images/git.png" alt="git hub link" />
                </a>
            </div>
        </nav>
    </header>
  )
}

export default Header