import React, { useContext } from 'react'
import { ValueContext } from '../contexts/ValueContext'
import '../App.css'

function Gauge() {
    const { val } = useContext(ValueContext)
    return (
        <div className='gauge-container'>
            <div className='gauge'>
                <div className='pointer' style={{ transform: `rotate(${ val }deg` }}></div>
            </div>
        </div>
    )
}

export default Gauge