const jwt = require("jsonwebtoken");

module.exports.authMiddleware = async (req, res, next) => {
  next();

  // const { authToken } = req.cookies;

  // if (authToken) {
  //   const deCodeToken = await jwt.verify(authToken, process.env.SECRET);
  //   req.userId = deCodeToken.id;
  //   next();
  // } else {
  //   res.status(400).json({
  //     error: {
  //       errorMessage: ["Please login first"],
  //     },
  //   });
  // }
};
