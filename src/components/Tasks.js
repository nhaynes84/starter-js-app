import React from 'react';
import List from 'material-ui/List';
import ListItem from 'material-ui/MenuItem';
import Card from 'material-ui/Card';


const Tasks = props => (
	<Card>
		<List>
			<h2>Tasks</h2>
			<hr/>
			{props.tasks && props.tasks.map((task, index) => {
				return (
					<ListItem id={index}>
						<div className="container">
							<div className="item">
								<div><b>Task:</b> {task.taskName}</div>
								<div><b>Details:</b> {task.body}</div>
							</div>
						</div>
					</ListItem>
				);
			})}
		</List>
	</Card>
)

Tasks.propTypes = {
	tasks: React.PropTypes.array.isRequired
}

export default Tasks