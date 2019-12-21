async function authenticationMiddleware(req, res, next) {
  req.user = null;
  req.cart = null;
  req.settings = null;
  next();
}
export { authenticationMiddleware };
