(function() {

	const createWorker = () => 
	{
		let workCount = 0;
		
		const task1 = () => 
		{
			workCount += 1;
			console.log('task1 ' + workCount);
		};

		const task2 = () => 
		{
			workCount += 1;
			console.log('task2 ' + workCount);
		};

		return {
			job1: task1,
			job2: task2
		};

	};

	const worker = createWorker();

	worker.job1();
	worker.job2();
	worker.job2();
	worker.job2();
	
}());