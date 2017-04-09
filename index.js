module.exports = function pushState (file, options) {
  return function (req, res, next) {
    var getOrHead = (req.method === 'GET') || (req.method === 'HEAD');
    var acceptsHtml = req.accepts('html');
    if (getOrHead && acceptsHtml) {
      res.sendFile(file, options, function (error) {
        if (error) {
          next();
        }
      });
    } else {
      next();
    }
  };
};
