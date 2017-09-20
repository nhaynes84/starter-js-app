import React, {Component} from 'react';
import './App.css';
import FlatButton from 'material-ui/FlatButton';
import Card from 'material-ui/Card';
import {CardHeader} from 'material-ui/Card';
import TextField from 'material-ui/TextField'
import Tasks from './components/Tasks';
import Dialog from 'material-ui/Dialog';
import Add from 'material-ui/svg-icons/content/add';
import {connect} from 'react-redux';
import actions from './actions';
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles';
const theme = getMuiTheme();

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedTask: null,
			reminder: null
		}

		this.showDetails = this.showDetails.bind(this);
		this.saveTask = this.saveTask.bind(this);
		this.setReminder = this.setReminder.bind(this);
		this.acknowledgeReminder = this.acknowledgeReminder.bind(this);
		this.changeSelectedTask = this.changeSelectedTask.bind(this);
	}

	componentWillReceiveProps(props) {
		console.log(props);
		props.tasks && this.setState({selectedTask: props.tasks[0]});
		props.reminder && props.reminder.reminder !== '0' && this.setReminder(props.reminder);
	}

	changeSelectedTask(taskName) {
		const newTask = this.props.tasks.find(x => x.taskName === taskName);
		newTask && this.setState({selectedTask: newTask});
	}

	setReminder(task) {
		setTimeout(() => this.setState({reminder: task}), task.reminder * 1000);
	}

	showDetails(taskName) {
		const existingTask = taskName && this.props.tasks.find(x => x.taskName === taskName);
		const newTask = {taskName: 'newTask', body: '', reminder: null};

		this.setState({selectedTask: existingTask || newTask})
	}

	onChange(name, value) {
		const selectedTask = Object.assign({}, this.state.selectedTask);
		selectedTask[name] = value;

		this.setState({selectedTask});
	}

	saveTask() {
		const {createTask, modifyTask, fireTaskReminder, tasks} = this.props, {selectedTask} = this.state;
		const isNew = !tasks.find(x => x.taskName === selectedTask.taskName);

		isNew ? createTask(selectedTask) : modifyTask(selectedTask);
		fireTaskReminder(selectedTask);
	}

	acknowledgeReminder() {
		this.setState({reminder: null});
	}

	render() {
		const {tasks, removeTask} = this.props, {selectedTask, reminder} = this.state;

		return (
			<MuiThemeProvider theme={theme}>
				<div className="App">
					<h2>Task Manager</h2>
					<div className="padBottom">
						<FlatButton secondary={true} onClick={() => this.showDetails()}>Add a Task.</FlatButton>
					</div>
					<div>
						{selectedTask && (
							<Card >
								<CardHeader avatar={<Add color="grey" />}>
									<TextField
										name="taskName"
										value={selectedTask.taskName}
										onChange={event => this.onChange('taskName', event.target.value)}
										placeholder="Enter a task name."
									/>
									<TextField
										name="body"
										value={selectedTask.body}
										onChange={event => this.onChange('body', event.target.value)}
										placeholder="Enter a message."
									/>
									<TextField
										name="reminder"
										value={selectedTask.reminder}
										onChange={event => this.onChange('reminder', event.target.value)}
										type="number"
										placeholder="Set a timer (0 for no timer)"
									/>

									<FlatButton primary={true} onClick={this.saveTask}>Save Task.</FlatButton>
								</CardHeader>

							</Card>
						)}
					</div>
					{(tasks.length > 0) &&
					<Tasks
						tasks={tasks}
						removeTask={removeTask}
						changeSelectedTask={this.changeSelectedTask}
					/>}
					<Dialog
						open={reminder && Object.keys(reminder).length > 0}
						onRequestClose={this.acknowledgeReminder}
					>
						<h4>{reminder && reminder.body}</h4>
						<FlatButton onClick={this.acknowledgeReminder}>Close</FlatButton>
					</Dialog>
				</div>
			</MuiThemeProvider>
		)
	}
}

const mapStateToProps = state => {
	return {
		tasks: state.tasks,
		reminder: state.reminder
	}
}

export default connect(mapStateToProps, actions)(App);
