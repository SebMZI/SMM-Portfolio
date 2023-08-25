const jwt = require("jsonwebtoken");

const verifyJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.sendStatus(401); // Unauthorized
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decodedToken; // Vous pouvez accéder aux données du token via req.user
    console.log(decodedToken);
    next(); // Passez à la prochaine étape de la requête
  } catch (error) {
    console.log(error);
    return res.sendStatus(403); // Forbidden
  }
};

module.exports = verifyJWT;
