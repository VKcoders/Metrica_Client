require('dotenv').config();
const app = require('./api');

const PORT = process.env.PORT;
const SERVER_INDEX = "pesquisa"

app.get(`/${SERVER_INDEX}`, (_request, response) => response.json("Welcome to Métrica API"));

app.listen(PORT, () => console.log("API running on " + PORT));