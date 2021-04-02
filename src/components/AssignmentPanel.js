import React from 'react';
import AssignmentCard from './AssignmentCard';
import '../styles/AssignmentPanel.css';

const AssignmentPanel = (props) => {
	const assignments = props.assignments;

	return (
		<div id="assignmentPanel">
			{assignments.map((currentAssignment) => (
				<AssignmentCard key={currentAssignment.name} assignment={currentAssignment} />
			))}
		</div>
	);
};

export default AssignmentPanel;
