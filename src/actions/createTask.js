const createTask = task => ({
	type: 'TASK_CREATED',
	task
});

export default createTask;