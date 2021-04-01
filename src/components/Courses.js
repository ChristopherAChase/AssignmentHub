import React, { useState } from 'react';
import ClassInfoPanel from './ClassInfoPanel';
import AssignmentPanel from './AssignmentPanel';
import '../styles/AssignmentPage.css';

const Assignments = (props) => {
	const courses = props.pageData;
	const [ currentCourse, selectCurrentCourse ] = useState(courses[0]);
	const [ assignments, setAssignments ] = useState(currentCourse.assignments);

	const changeCourse = (courseCode) => {
		// const course = props.pageData.filter((course) => course.name === courseName);
		const course = courses.filter((course) => course.code === courseCode);
		selectCurrentCourse(course[0]);
		setAssignments(course[0].assignments);
	};

	return (
		<div className="AssignmentPage">
			<div className="AssignmentBody ">
				<div className="mainInline">
					<h1 className="AssignmentHeader">Assignment App</h1>
					<div className="classButtons">
						{courses.map((course) => (
							<button
								className={currentCourse.code === course.code ? 'active' : ''}
								onClick={() => changeCourse(course.code)}
							>
								{course.code}
							</button>
						))}
					</div>
				</div>
				<div className="CourseHUD">
					<ClassInfoPanel
						summary={currentCourse.summary}
						grade={currentCourse.grade}
						className={currentCourse.name}
					/>

					<AssignmentPanel assignments={assignments} />
				</div>
			</div>
		</div>
	);
};

export default Assignments;
