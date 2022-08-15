import React, { useContext } from 'react'
import { ValueContext } from '../contexts/ValueContext'
import {values} from '../helpers/values'

function Controls() {
    const { val, setVal } = useContext(ValueContext)

    return (
        <div className='controls-container'>
            <button
                onClick={ () => setVal(val <= -135 ? val : val - 13.5) }
            >-</button>
            <span>{ values[val] + '%' }</span>
            <button
                onClick={ () => setVal(val >= 135 ? val : val + 13.5) }
            >+</button>
        </div>
    )
}

export default Controls