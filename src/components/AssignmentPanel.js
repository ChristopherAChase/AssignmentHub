import React, { useState } from 'react';
import '../styles/AssignmentPanel.css';

const AssignmentPanel = (props) => {
	const assignments = props.assignments;

	return (
		<div id="assignmentPanel">
			{assignments.map((assignment) => (
				<p style={{ color: 'black', fontSize: '1em' }}>{JSON.stringify(assignment)}</p>
			))}
		</div>
	);
};

export default AssignmentPanel;
