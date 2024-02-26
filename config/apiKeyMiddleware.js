const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.headers['api-key'];
    if (apiKey && apiKey === 'AIzaSyD-IyQRjwp4U-I-vV4OeKkbxv_FvrKa1o0') {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = apiKeyMiddleware;
