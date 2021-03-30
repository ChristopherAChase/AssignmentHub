import React, { useState } from 'react';
import '../styles/ClassInfoPanel.css';

const ClassInfoPanel = (props) => {
	return (
		<div id="classPanel">
			<div id="courseGrade">
				<p>Grade: {props.grade}</p>
			</div>
			<div id="courseSummary">
				<h3>Summary: </h3>
				<p>{props.summary}</p>
			</div>
		</div>
	);
};

export default ClassInfoPanel;
