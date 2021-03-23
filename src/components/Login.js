import React from 'react'
import logo4 from '../images/logo4.png'
import '../styles/select.css'

export default function Select(props) {
    return (
        <div>
            <img src={logo4} />
            <h1>Welcome</h1>
            <form>
                <p>Enter school login</p>
                <label className="logLabel">Username: </label>
                <input type="text" id="username" className="textbox" placeholder="School Username" />
                <br />
                <label className="logLabel">Password:</label>
                <input type="password" id="password" className="textbox" placeholder="Password" />
                <br />
                <input type="button" id="cancel" onClick={() => props.buttonPress('select')} value="Back" />
                <input type="submit" id="submit" name="submit" value="Go!" />
            </form>
        </div>
    )
}