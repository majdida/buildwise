import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
    return (
        <div>
            <div className='hero'>
                <div className='hero-bg' />
                <div className='hero-content'>
                    <h1>Welcome to BuildWise</h1>
                    <p>
                        A simple tool to help contractors, engineers, and homeowners
                        estimate materials and measurements.
                    </p>
                    <Link to="/concrete" className='hero-btn'>Get Started</Link>
                </div>
            </div>

            <div className='calculators-section'>
                <h2>Our Calculators</h2>
                <div className='cards-grid'>

                    <Link to="/concrete" className='calc-card-home'>
                        <div className='card-icon'>🏗️</div>
                        <h3>Concrete Volume</h3>
                        <p>Calculate how much concrete you need for a slab or wall.</p>
                        <div className='card-link'>Open →</div>
                    </Link>

                    <Link to="/paint" className='calc-card-home'>
                        <div className='card-icon'>🎨</div>
                        <h3>Paint Calculator</h3>
                        <p>Find out how many liters of paint a room needs.</p>
                        <div className='card-link'>Open →</div>
                    </Link>

                    <Link to="/area" className='calc-card-home'>
                        <div className='card-icon'>📐</div>
                        <h3>Room Area</h3>
                        <p>Calculate the floor area of any rectangular room.</p>
                        <div className='card-link'>Open →</div>
                    </Link>

                    <Link to="/materials" className='calc-card-home'>
                        <div className='card-icon'>🧱</div>
                        <h3>Material Estimator</h3>
                        <p>Estimate the number of bricks needed for a wall.</p>
                        <div className='card-link'>Open →</div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Home