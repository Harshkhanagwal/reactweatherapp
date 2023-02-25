import React from 'react'
import Header from '../components/Header'
import Detailcard from '../components/Detailcard'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <>
            <div className="main-bx main">
                <div className="innerbx container">
                    <Header />
                    <Detailcard />
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Home