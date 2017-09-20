import React, {Component} from 'react';
import './App.css';
import FlatButton from 'material-ui/FlatButton';
import Tasks from './components/Tasks';

import {connect} from 'react-redux';
import actions from './actions';
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles';
const theme = getMuiTheme();

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedTask: props.tasks[0] || null
		}

		this.showDetails = this.showDetails.bind(this);
	}

	componentDidMount() {
		this.props.createTask({taskName: 'test', body: 'This is a task', reminder: 5});
	}

	componentWillReceiveProps(props) {
		console.log('updating');
		props.tasks && this.setState({selectedTask:props.tasks[0]});
	}

	showDetails(taskId) {
		const existingTask = taskId && this.props.tasks.find(x => x.taskId === taskId);
		const newTask = {taskId: 'newTask', body: '', reminder: 5};

		this.setState({selectedTask: existingTask || newTask})
	}

	render() {
		const {tasks, createTask, modifyTask, removeTask} = this.props, {selectedTask} = this.state;

		console.log('selectedTask', selectedTask, this.state);

		return (
			<MuiThemeProvider theme={theme}>
				<div className="App">
					<h2>Task Manager</h2>
					<div>
						<FlatButton onClick={() => this.showDetails()}>Add a Task.</FlatButton>
					</div>
					<div>
						{selectedTask && (
							<div>
								<div>{selectedTask.taskName}</div>
								<div>{selectedTask.body}</div>
								<div>{selectedTask.reminder}</div>
							</div>
						)}
					</div>
					<div>
						<Tasks tasks={tasks}/>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = state => {
	return {
		tasks: state.tasks
	}
}

export default connect(mapStateToProps, actions)(App);
