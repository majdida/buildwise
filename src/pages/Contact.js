import React, { useState } from 'react'
import '../styles/Contact.css'
import '../styles/Calculator.css'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Message Sent Successfully')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className='contact-page'>
            <h2>Contact Us</h2>
            <p className='subtitle'>Have a question? Send us a message.</p>
            <div className='contact-card'>

                <div className='form-group'>
                    <label>Name</label>
                    <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Your name' />
                </div>

                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='your@email.com' />
                </div>

                <div className='form-group'>
                    <label>Message</label>
                    <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Your message...' rows={5} style={{ resize: 'vertical' }} />
                </div>

                <button className='calc-btn' onClick={handleSubmit}>Send Message</button>
            </div>
        </div>
    )
}

export default Contact