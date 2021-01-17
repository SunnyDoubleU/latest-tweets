import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";

const PORT = 8080;
const app = express();

app.use(cors({ credentials: true, origin: [] }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./route"));

app.listen(PORT, () => {
  console.log(`Latest Tweets Server listening at ${PORT}`);
});

module.exports = app;
