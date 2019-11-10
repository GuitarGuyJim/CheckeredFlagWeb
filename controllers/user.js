// Display the user 'home' page
exports.checkUserCredentials = function(req, res) {
   
   // TODO verify login and get user info
   res.render('user', { userName: req.body.uname, password: req.body.psw });
};

exports.signupNewUser = function(req, res) {
   res.render('signup');
}