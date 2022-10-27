const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
	res.status(200).json({
		slackUsername: 'Jayyphire',
		backend: true,
		age: 24,
		bio: 'I love to code but i am very lazy',
	});
});

app.listen(port, () => {
	console.log(`server is listening on port: ${port}`);
});
