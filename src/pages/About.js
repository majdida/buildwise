import React from 'react'
import '../styles/About.css'

const About = () => {
    return (
        <div className='about-page'>
            <h2>About BuildWise</h2>

            <div className='about-card'>
                <h3>📌 Purpose of the Project</h3>
                <p>BuildWise is a web application that provides simple calculators to help estimate materials and measurements for construction projects.</p>
            </div>

            <div className='about-card'>
                <h3>👷 Who Can Use It?</h3>
                <p>Designed for contractors, civil engineers, architects, and homeowners who need quick estimates without complex software.</p>
            </div>

            <div className='about-card'>
                <h3>✅ Benefits</h3>
                <ul>
                    <li>Free to use — no signup required</li>
                    <li>Works on desktop and mobile</li>
                    <li>Instant results with simple inputs</li>
                    <li>Covers concrete, paint, area, and brick estimation</li>
                </ul>
            </div>
        </div>
    )
}

export default About