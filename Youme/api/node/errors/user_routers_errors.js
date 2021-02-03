module.exports = function (error, req, res, next) {
  res.status(404).send(error);
};
