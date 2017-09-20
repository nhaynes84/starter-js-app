const removeTask = taskId => ({
	type: 'TASK_REMOVED',
	taskId
});

export default removeTask;