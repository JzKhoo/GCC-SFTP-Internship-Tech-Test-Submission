const express = require('express');
const bodyParser = require('body-parser');
const calculatorRoutes = require('./src/routes/calculatorRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('public')); // Serve static files from the 'public' folder

app.use(calculatorRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
