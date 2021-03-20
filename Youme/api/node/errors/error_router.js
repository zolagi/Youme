const logger = require("./winston_init");

// error routers
const user_routers_errors = require("./user_routers_errors");
const { object } = require("joi");

function error_router(err, req, res, next) {
  logger.error(err);
  //console.log("error");
  //console.log(err);
  switch (err.router) {
    case "user":
      user_routers_errors(err.error, req, res, next);
      break;

    // MongoError
    default:
      console.log("MongoError");
      console.log(Object.keys(err));
      console.log(err.name);
      console.log(err.level);
      console.log(err.service);

      if (err.keyPattern && err.keyValue) {
        key = Object.keys(err.keyPattern)[0];
        res.status(406).json({ error: `${key} must be unique` });
      } else if (err.name) {
        res
          .status(403)
          .json({
            error: `can not connect to mongoDB atlas`,
            error_type: err.name,
          });
      } else {
        res.status(404).json({ error: err.error });
        process.exit(1);
      }
      break;
  }
}

module.exports = error_router;
