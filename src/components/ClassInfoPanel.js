import React from 'react';
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
				<h2>Summary: </h2>
				<p>{props.summary}</p>
			</div>
		</div>
	);
};

export default ClassInfoPanel;
