require("express-async-errors");
const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const logger = require("./errors/winston_init");

// uncaughtException
// process.on("uncaughtException", (err) => {
//   logger.error(err);
// });

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routers
const user_routers = require("./routers/user");
app.use("/user", user_routers);

// error route
const errors = require("./errors/error_router");
app.use(errors);

const mode = app.get("env");
const port = config.get("port");

app.listen(port, () => {
  console.log(`[${mode} mode][+] stated on localhost:${port}`);
});

const url = config.get("MongoDB_url");
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err == null) console.log(`[${mode} mode][+] conned to mongoDB atlas`);
    else console.log(`[${mode} mode][-] can not connect to mongoDB atlas`);
  }
);
