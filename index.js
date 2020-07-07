import "core-js";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import express from "express";

const app = express();
const PORT = 4000;

// Parser
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Logging
app.use(morgan("dev"));
// Security
app.use(helmet());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(PORT, () => {
  console.log(`api server listen PORT  : ${PORT}`);
});
