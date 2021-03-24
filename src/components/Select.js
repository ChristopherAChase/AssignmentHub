import React from 'react'
import logo4 from '../images/logo4.png'
import '../styles/select.css'

export default function Select(props) {
    return (
        <div className="selectPage">
            <div className="selectBody">
                <img className="circleImage" src={logo4} />
                <h1 className="selectHeader">Welcome</h1>
                <form>
                    <label>Select a school: </label>
                    <select onChange={() => props.changePage('login')}>
                        <option>Select A school...</option>
                        <option>Southeast Tech</option>
                    </select>
                </form>
            </div>
        </div>

    )
}