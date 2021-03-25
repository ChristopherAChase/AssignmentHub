import { getJSON } from 'jquery';
import React, { useState } from 'react';
import '../styles/index.css';

const Assignments = (props) => {
	const courses = props.pageData.map((course) => course);
	const [ currentCourse, selectCurrentCourse ] = useState(props.pageData[0]);
	const [ assignments, setAssignments ] = useState(currentCourse.assignments);

	const changeCourse = (courseName) => {
		const course = props.pageData.filter((course) => course.name === courseName);
		selectCurrentCourse(course);
		setAssignments(course[0].assignments);
	};

	return (
		<div className="AssignmentPage">
			<div className="AssignmentBody">
				<div className="mainInline">
					<h1 className="AssignmentHeader">Assignment App</h1>
					<div className="classButtons">
						{props.pageData.map((course) => (
							<button
								className={currentCourse.name === course.name ? 'active' : ''}
								onClick={() => changeCourse(course.name)}
							>
								{course.name}
							</button>
						))}
					</div>
				</div>
				<div className="display">
					{/* Here I will create a class info panel component and pass it in the course information including grade and course description.*/}
					<p style={{ color: 'black', fontSize: '1em' }}>{JSON.stringify(assignments)}</p>
					{/* Instead of creating paragraph elements, I will create an assignment panel component and pass it in the assignments array */}
					{assignments.map((assignment) => (
						<p style={{ color: 'black', fontSize: '1em' }}>{JSON.stringify(assignment)}</p>

					))}
				</div>
			</div>
		</div>
	);
};

export default Assignments;
