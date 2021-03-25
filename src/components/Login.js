import React from 'react';
import nacl from 'tweetnacl';
import utils from 'tweetnacl-util';
import $ from 'jquery';
import logo4 from '../images/logo4.png';
import '../styles/select.css';

export default function Select(props) {
	const handleLogin = () => {
		const creds = {
			username: $('#username').val(),
			password: $('#password').val()
		};

		const key = process.env.REACT_APP_SECRET_KEY;

		// Our nonce must be a 24 bytes Buffer (or Uint8Array)
		const nonce = nacl.randomBytes(24);

		// Our secret key must be a 32 bytes Buffer (or Uint8Array)
		const secretKey = Buffer.from(key, 'utf8');

		// Make sure your data is also a Buffer of Uint8Array
		const secretData = Buffer.from(creds.password, 'utf8');
		const encrypted = nacl.secretbox(secretData, nonce, secretKey);

		// We can now store our encrypted result and our nonce somewhere
		creds.password = `${utils.encodeBase64(nonce)}:${utils.encodeBase64(encrypted)}`;

		scrapeSite(creds);
	};

	const scrapeSite = (creds) => {
		const scrapeScript = 'https://course-central-api.herokuapp.com/assignments';
		$.ajax({
			type: 'GET',
			url: scrapeScript,
			data: creds,
			dataType: 'JSON',
			success: (data) => {
				props.storeResponse(data);
                props.changePage('assignments')
			}
		});
	};

	return (
		<div className="selectPage">
			<div className="selectBody">
				<img className="circleImage" src={logo4} />
				<h1 className="selectHeader">Welcome</h1>
				<form onSubmit={(e) => e.preventDefault()}>
					<p>Enter school login</p>
					<p id="errorMessage" style={{ color: 'white', fontSize: '1em', display: 'none' }}>
						<strong>
							<u>Invalid Credentials Please Try again</u>
						</strong>
					</p>
					<label className="logLabel">Username: </label>
					<input type="text" id="username" className="textbox" placeholder="School Username" required />
					<br />
					<label className="logLabel">Password:</label>
					<input type="password" id="password" className="textbox" placeholder="Password" required />
					<br />
					{/* <input type="button" id="cancel" onClick={() => props.changePage('select')} value="Back" /> */}
					<input type="submit" id="submit" name="submit" value="Go!" onClick={() => handleLogin()} />
				</form>
			</div>
		</div>
	);
}
