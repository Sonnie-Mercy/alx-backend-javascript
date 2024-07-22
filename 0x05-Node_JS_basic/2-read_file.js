const fs = require('fs');

function constStudents(path) {
	try {
		const data = fs.readfileSync(path, 'utf8');
		const lines = data.split('\n').filter(line => line.trim() !== '' );
		const header = lines.shift();
		const student {};
		let totalStudents = 0;
		for (const line of lines) {
			const [ firstname, lastname, age, field] = line.split(',');
			if (!students[field]) {
				students[field] =[];
			}
			students[field].push(firstname);
			totalStudents++;
		}
		console.log(`Number of students: ${totalStudents}`);
		for (cconst field in students) {
			const count = students[field].length;
			const list = students[field].join(', ');
			console.log(`Number
