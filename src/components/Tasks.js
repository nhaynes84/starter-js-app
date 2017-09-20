import React from 'react';


const Tasks = props => (
	<div>
		{props.tasks && props.tasks.map((task, index) => {
			return (
				<div></div>
			)
		})}
	</div>
)

Tasks.propTypes = {
	tasks: React.PropTypes.array.isRequired
}

export default Tasks