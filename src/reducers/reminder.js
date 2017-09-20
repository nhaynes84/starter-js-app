const reminder = (state = {}, action) => {
	switch (action.type) {
		case 'REMINDER_SET': {
			return action.task;
		}
		case 'TASK_REMOVED' : {
			return {};
		}
		default:
			return state;
	}
}

export default reminder;