import React, { useState } from 'react';
import '../styles/index.css';

const Assignments = (props) => {
	const courses = props.pageData.map((course) => course);
	const [ currentCourse, selectCurrentCourse ] = useState(courses[0].name);

	return (
		<div className="AssignmentPage">
			<div className="AssignmentBody">
				<div className="mainInline">
					<h1 className="AssignmentHeader">Assignment App</h1>
					<div className="classButtons">
						{courses.map((course) => (
							<button
								className={currentCourse === course.name ? 'active' : ''}
								onClick={() => selectCurrentCourse(course.name)}
							>
								{course.name}
							</button>
						))}
					</div>
				</div>
				<div className="display">
					<p style={{ color: 'black', fontSize: '1em' }}>
						{JSON.stringify(courses.filter((course) => course.name === currentCourse))}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Assignments;
