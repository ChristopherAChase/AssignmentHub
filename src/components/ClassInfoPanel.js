import React, { useState } from 'react';
import '../styles/ClassInfoPanel.css';

const ClassInfoPanel = (props) => {
	return (
		<div id="classPanel">
			<div id="classPanel_top">
				<div id="courseGrade">
					<p>{props.grade}</p>
				</div>
				<div id="className">
					<p>
						{props.className}
					</p>
				</div>
			</div>
			<div id="courseSummary">
				<h3>Summary: </h3>
				<p>{props.summary}</p>
			</div>
		</div>
	);
};

export default ClassInfoPanel;
