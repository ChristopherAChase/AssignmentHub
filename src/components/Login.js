import React from 'react'
import logo4 from '../images/logo4.png'
import '../styles/select.css'

export default function Select(props) {
    return (
        <div className="selectPage">
            <div className="selectBody">
                <img className="circleImage" src={logo4} />
                <h1 className="selectHeader">Welcome</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <p>Enter school login</p>
                    <label className="logLabel">Username: </label>
                    <input type="text" id="username" className="textbox" placeholder="School Username" required />
                    <br />
                    <label className="logLabel">Password:</label>
                    <input type="password" id="password" className="textbox" placeholder="Password" required />
                    <br />
                    <input type="button" id="cancel" onClick={() => props.changePage('select')} value="Back" />
                    <input type="submit" id="submit" name="submit" value="Go!" onClick={() => props.changePage('assignments')} />
                </form>
            </div>

        </div>
    )
}