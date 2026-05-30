import React, { useState } from 'react'
import '../styles/Calculator.css'

const Area = () => {
    const [length, setLength] = useState('')
    const [width, setWidth] = useState('')
    const [result, setResult] = useState(null)

    const calculate = () => {
        const l = parseFloat(length)
        const w = parseFloat(width)
        if (!l || !w || l <= 0 || w <= 0) {
            alert('Please enter valid positive numbers.')
            return
        }
        setResult((l * w).toFixed(2))
    }

    return (
        <div className='calc-page'>
            <h2>📐 Room Area Calculator</h2>
            <p className='subtitle'>Formula: Area = Length × Width</p>
            <div className='calc-card'>

                <div className='form-group'>
                    <label>Length (m)</label>
                    <input type='number' min='0' value={length} onChange={e => setLength(e.target.value)} placeholder='Enter value' />
                </div>

                <div className='form-group'>
                    <label>Width (m)</label>
                    <input type='number' min='0' value={width} onChange={e => setWidth(e.target.value)} placeholder='Enter value' />
                </div>

                <button className='calc-btn' onClick={calculate}>Calculate</button>

                {result !== null && (
                    <div className='result-box'>
                        <p className='result-label'>Result</p>
                        <p className='result-value'>{result} m²</p>
                        <p className='result-note'>Floor area of the room</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Area