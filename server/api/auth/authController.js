exports.login = function(req, res, next) {
    res.json('auth login');
  };

exports.logout = function(res, req, next){
    res.json('auth logout api');
}


exports.google = function(res, req, next){
    res.json('google login api');
}