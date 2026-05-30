import React, { useState } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav style={{ backgroundColor: "#2c3e50" }} className='navbar'>
            <Link to="/" className='navbar-brand'>🏗️ BuildWise</Link>

            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/concrete">Concrete</Link>
                <Link to="/paint">Paint</Link>
                <Link to="/area">Area</Link>
                <Link to="/materials">Materials</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <button className='hamburger' onClick={() => setOpen(!open)}>
                {open ? '✕' : '☰'}
            </button>

            {open && (
                <div className='mobile-menu'>
                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/concrete" onClick={() => setOpen(false)}>Concrete</Link>
                    <Link to="/paint" onClick={() => setOpen(false)}>Paint</Link>
                    <Link to="/area" onClick={() => setOpen(false)}>Area</Link>
                    <Link to="/materials" onClick={() => setOpen(false)}>Materials</Link>
                    <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar