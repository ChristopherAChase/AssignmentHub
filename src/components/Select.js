import React from 'react'
import logo4 from '../images/logo4.png'
import '../styles/select.css'

export default function Select(props) {
    return (
        <div>
            <img src={logo4} />
            <h1>Welcome</h1>
            <form>
                <label>Select a school: </label>
                <select onChange={() => props.selectOption('login')}>
                    <option>Select A school...</option>
                    <option>Southeast Tech</option>
                </select>
            </form>
        </div>
    )
}