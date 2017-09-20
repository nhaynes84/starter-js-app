import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import {ListItem} from 'material-ui/List';
import Card from 'material-ui/Card';
import TaskIcon from 'material-ui/svg-icons/action/build';
import Delete from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';


const Tasks = props => (
	<Card>
		<List>
			<h4>Tasks</h4>
			<hr/>
			{props.tasks && props.tasks.map((task, index) => {
				return (
					<ListItem
						key={index}
						onClick={() => props.changeSelectedTask(task.taskName)}
						leftIcon={<TaskIcon/>}
						rightIconButton={
							<IconButton onClick={() => props.removeTask(task.taskName)}>
								<Delete/>
							</IconButton>
						}
					>
						<div className="container">
							<div className="item">
								<div><b>Task:</b> {task.taskName}</div>
							</div>
							<div className="item">
								<div><b>Details:</b> {task.body}</div>
							</div>
							<div className="item">
								<div><b>Remind me in: </b> {task.reminder} seconds</div>
							</div>
						</div>
					</ListItem>
				);
			})}
		</List>
	</Card>
)

Tasks.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.shape({
		taskName: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
		reminder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
		})).isRequired,
	removeTask: PropTypes.func,
	changeSelectedTask: PropTypes.func
}

export default Tasks