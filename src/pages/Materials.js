import React, { useState } from 'react'
import '../styles/Calculator.css'

const Materials = () => {
    const [wallLength, setWallLength] = useState('')
    const [wallHeight, setWallHeight] = useState('')
    const [result, setResult] = useState(null)

    const calculate = () => {
        const l = parseFloat(wallLength)
        const h = parseFloat(wallHeight)
        if (!l || !h || l <= 0 || h <= 0) {
            alert('Please enter valid positive numbers.')
            return
        }
        const area = l * h
        const bricks = Math.ceil(area * 60)
        setResult({ area: area.toFixed(2), bricks })
    }

    return (
        <div className='calc-page'>
            <h2>🧱 Material Estimator</h2>
            <p className='subtitle'>Estimates bricks needed — assumes 60 bricks per m²</p>
            <div className='calc-card'>

                <div className='form-group'>
                    <label>Wall Length (m)</label>
                    <input type='number' min='0' value={wallLength} onChange={e => setWallLength(e.target.value)} placeholder='Enter value' />
                </div>

                <div className='form-group'>
                    <label>Wall Height (m)</label>
                    <input type='number' min='0' value={wallHeight} onChange={e => setWallHeight(e.target.value)} placeholder='Enter value' />
                </div>

                <button className='calc-btn' onClick={calculate}>Estimate</button>

                {result !== null && (
                    <div className='result-box'>
                        <p className='result-label'>Result</p>
                        <div className='result-row'>
                            <div className='result-item'>
                                <p>{result.area} m²</p>
                                <p>Wall Area</p>
                            </div>
                            <div className='result-item'>
                                <p>{result.bricks.toLocaleString()}</p>
                                <p>Estimated Bricks</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Materials