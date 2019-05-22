const JWTStrategy = require('passport-jwt').Stragegy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../models/userModel');
const setting = require('./settings');


module.exports = function(passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = settings.secret;
  passport.use(new JWTStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, use) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};
