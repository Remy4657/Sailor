import express from "express";
import configViewEngine from "./config/viewEngine";
// import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import bodyParser from "body-parser";
import { connection } from "./config/connectDB";
require("dotenv").config(); // giúp lấy các biến trong file .env

const app = express();
// config view engine
configViewEngine(app);

// config body-parser: thư viện lấy để lấy thông tin khi đẩy lên server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware qq
    next();
});

// connection db
connection();

//init web route
// initWebRoutes(app);
initApiRoutes(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("localhost ", PORT);
});
