// Display the user 'home' page
exports.createNewAccount = function(req, res) {
   
   // verify the passwords match
   if (req.body.psw != req.body.psw2) {
     res.send("Passwords don't match");
   }
   else {
     res.send("HI new user");
   }
   //('user', { userName: req.body.uname, password: req.body.psw });
};
