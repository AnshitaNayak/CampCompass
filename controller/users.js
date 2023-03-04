const User = require('../models/user');
const passport = require('passport');
const CatchAsync = require('../utils/CatchAsync');

module.exports.createregister = (req, res) => {
    res.render('users/register.ejs');
}

module.exports.renderregister = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to YelpCamp');
            res.redirect('/campgrounds');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}

module.exports.createlogin = (req, res) => {
    res.render('users/login.ejs');
}

module.exports.renderlogin = (req, res) => {
    req.flash('success', 'Welcome back!!');
    const redirectUrl = req.session.returnTo || '/campgrounds';
    console.log(redirectUrl);
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res) => {
    req.logout(function (err) {
        req.flash('success', "Goodbye!");
        res.redirect('/campgrounds');
    });
}