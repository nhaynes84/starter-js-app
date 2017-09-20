const tasks = (state = [], action) => {
	switch (action.type) {
		case 'TASK_CREATED': {
			return [...state, action.task];
		}
		case 'TASK_REMOVED': {
			return Object.assign([], state.filter(x => x.taskId !== action.taskId));
		}
		case 'TASK_MODIFIED': {
			return Object.assign([], state, state.filter(x => x.taskId !== action.task.taskId).concat([action.task]));
		}
		default:
			return state;
	}
}

export default tasks;