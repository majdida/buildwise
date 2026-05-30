import React, { useState } from 'react'
import '../styles/Calculator.css'

const Concrete = () => {
    const [length, setLength] = useState('')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [result, setResult] = useState(null)

    const calculate = () => {
        const l = parseFloat(length)
        const w = parseFloat(width)
        const h = parseFloat(height)
        if (!l || !w || !h || l <= 0 || w <= 0 || h <= 0) {
            alert('Please enter valid positive numbers.')
            return
        }
        setResult((l * w * h).toFixed(3))
    }

    return (
        <div className='calc-page'>
            <h2>🏗️ Concrete Volume Calculator</h2>
            <p className='subtitle'>Formula: Volume = Length × Width × Height</p>
            <div className='calc-card'>

                <div className='form-group'>
                    <label>Length (m)</label>
                    <input type='number' min='0' value={length} onChange={e => setLength(e.target.value)} placeholder='Enter value' />
                </div>

                <div className='form-group'>
                    <label>Width (m)</label>
                    <input type='number' min='0' value={width} onChange={e => setWidth(e.target.value)} placeholder='Enter value' />
                </div>

                <div className='form-group'>
                    <label>Height (m)</label>
                    <input type='number' min='0' value={height} onChange={e => setHeight(e.target.value)} placeholder='Enter value' />
                </div>

                <button className='calc-btn' onClick={calculate}>Calculate</button>

                {result !== null && (
                    <div className='result-box'>
                        <p className='result-label'>Result</p>
                        <p className='result-value'>{result} m³</p>
                        <p className='result-note'>Cubic meters of concrete needed</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Concrete