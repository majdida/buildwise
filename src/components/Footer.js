import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            © {new Date().getFullYear()} BuildWise — Construction & Engineering Calculator
        </footer>
    )
}

export default Footer