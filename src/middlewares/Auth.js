require('dotenv').config();
const JWT = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token não especificado!' });
  }

  const partsToken = authorization.split(' ');

  if (partsToken.length !== 2) {
    return res.status(401).json({ message: 'Token mal formatado!' });
  }

  const [key, token] = partsToken;

  if (key.indexOf('Bearer') < 0) {
    return res.status(401).json({ message: 'Token mal formatado!' });
  }

  try {
    const data = JWT.verify(token, process.env.APP_SECRET);
    req.userId = data.id;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: 'Token inválido! Faça login novamente.' });
  }
};
