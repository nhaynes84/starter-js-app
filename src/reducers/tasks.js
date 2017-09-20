const tasks = (state = [], action) => {
	switch (action.type) {
		case 'TASK_CREATED': {
			return [...state, action.task];
		}
		case 'TASK_REMOVED': {
			return Object.assign([], state.filter(x => x.taskName !== action.taskName));
		}
		case 'TASK_MODIFIED': {
			return Object.assign([], state, state.filter(x => x.taskName !== action.task.taskName).concat([action.task]));
		}
		default:
			return state;
	}
}

export default tasks;