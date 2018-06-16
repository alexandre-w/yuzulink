

exports.login = function(req, res, next) {
    res.json('auth login');
  };

exports.logout = function(req, res, next){
    res.json('auth logout api');
}

exports.googleRedirect = function(req, res, next){
    res.json('Auth oK, redirect from google');
}