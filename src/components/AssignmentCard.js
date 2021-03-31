import React from 'react';
import '../styles/AssignmentCard.css'

const AssignmentCard = (props) => {
    const { assignment } = props
    return (
        <div className="AssignmentCard">
            <div className="AssignmentCard_Header">
                <h2 className="AssignmentName">
                    {assignment.name}
                </h2>
                <p className="AssignmentDueDate">
                    Due: {assignment.due_date}
                </p>
            </div>
            <div className="AssignmentCard_Body">
                {assignment.instructions.map(instruction => (
                    <p>{instruction}</p>
                ))}
            </div>
        </div>
    )
}

export default AssignmentCard