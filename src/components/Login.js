import React from 'react';
import nacl from 'tweetnacl';
import utils from 'tweetnacl-util';

import $ from 'jquery';
import logo4 from '../images/logo4.png';
import '../styles/Login.css';

export default function Select(props) {
	const handleLogin = () => {
		const creds = {
			username: $('#username').val(),
			password: $('#password').val()
		};


		if (creds.password && creds.username) {
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
		}
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
				props.changePage('assignments');
			}
		});
	};

	return (
		<div className="LoginPage">
			<div className="LoginBody">
				<img className="circleImage" src={logo4} />
				<h1 className="LoginHeader">Welcome</h1>
				<form id="loginForm" onSubmit={(e) => e.preventDefault()}>
					<p className="whiteFont">Enter school login</p>
					<p id="errorMessage" style={{ display: 'none' }}>
						<strong>
							<u>Invalid Credentials Please Try again</u>
						</strong>
					</p>
					<div className="formRow">
						<label className="loginLabel whiteFont">Username: </label>
						<input type="text" id="username" className="textbox" placeholder="School Username" required />
					</div>
					<div className="formRow">
						<label className="loginLabel whiteFont">Password:</label>
						<input type="password" id="password" className="textbox" placeholder="Password" required />
					</div>
					<input type="submit" id="submit" name="submit" value="Go!" onClick={() => handleLogin()} />
				</form>
			</div>
		</div>
	);
}
