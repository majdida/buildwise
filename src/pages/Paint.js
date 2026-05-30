import React, { useState } from 'react'
import '../styles/Calculator.css'

const Paint = () => {
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
        const wallArea = 2 * h * (l + w)
        const liters = wallArea / 10
        setResult({ wallArea: wallArea.toFixed(2), liters: liters.toFixed(2) })
    }

    return (
        <div className='calc-page'>
            <h2>🎨 Paint Calculator</h2>
            <p className='subtitle'>Formula: Wall Area = 2 × Height × (Length + Width) — 1 Liter covers 10 m²</p>
            <div className='calc-card'>

                <div className='form-group'>
                    <label>Room Length (m)</label>
                    <input type='number' min='0' value={length} onChange={e => setLength(e.target.value)} placeholder='Enter value' />
                </div>

                <div className='form-group'>
                    <label>Room Width (m)</label>
                    <input type='number' min='0' value={width} onChange={e => setWidth(e.target.value)} placeholder='Enter value' />
                </div>

                <div className='form-group'>
                    <label>Room Height (m)</label>
                    <input type='number' min='0' value={height} onChange={e => setHeight(e.target.value)} placeholder='Enter value' />
                </div>

                <button className='calc-btn' onClick={calculate}>Calculate</button>

                {result !== null && (
                    <div className='result-box'>
                        <p className='result-label'>Result</p>
                        <div className='result-row'>
                            <div className='result-item'>
                                <p>{result.wallArea} m²</p>
                                <p>Total Wall Area</p>
                            </div>
                            <div className='result-item'>
                                <p>{result.liters} L</p>
                                <p>Paint Required</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Paint