const removeTask = taskName => ({
	type: 'TASK_REMOVED',
	taskName
});

export default removeTask;