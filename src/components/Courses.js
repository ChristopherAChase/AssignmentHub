import React, { useState } from 'react';
import ClassInfoPanel from './ClassInfoPanel';
import AssignmentPanel from './AssignmentPanel';
import '../styles/AssignmentPage.css';

const Assignments = (props) => {
	const courses = props.pageData.map((course) => course);
	const [ currentCourse, selectCurrentCourse ] = useState(courses[0]);
	const [ assignments, setAssignments ] = useState(currentCourse.assignments);

	const changeCourse = (courseName) => {
		const course = props.pageData.filter((course) => course.name === courseName);
		selectCurrentCourse(course[0]);
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
				<div className="CourseHUD">
					<ClassInfoPanel summary={currentCourse.summary} grade={currentCourse.grade} />

					<AssignmentPanel assignments={assignments} />
				</div>
			</div>
		</div>
	);
};

export default Assignments;
