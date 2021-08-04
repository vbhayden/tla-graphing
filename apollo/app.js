const http = require("http")
const cors = require("cors")
const express = require("express");
const bodyParser = require("body-parser")

const APP_PORT = (process.env.APP_PORT || 3000);

const app = express();
const server = http.createServer(app);

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

server.listen(APP_PORT, () => {
    console.log(`[Goals] Listening on port ${APP_PORT}`)
});