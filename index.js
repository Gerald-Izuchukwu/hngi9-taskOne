const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(
	cors({
		origin: '*',
	})
);

app.get('/', (req, res) => {
	res.status(200).json({
		slackUsername: 'geraldlouisugwunna',
		backend: true,
		age: 24,
		bio: 'I love to code but i am very lazy',
	});
});

app.listen(PORT, () => {
	console.log(`server is listening on PORT: ${PORT}`);
});
