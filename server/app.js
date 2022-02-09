const express = require("express");
const cors = require("cors");
// express 는 함수이므로, 반환값을 변수에 저장한다.
const app = express();
const port = 80;
const userRouter = require("./routers/user");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.text());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://example.com");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
  next();
});

app.use(cookieParser());

app.use("/", userRouter);

app.get("/_ah/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(port, () => {
  console.log("start! server on port 80");
});
