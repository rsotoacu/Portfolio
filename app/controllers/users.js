// File: users.js
// Author: Rodrigo Soto
// Student number: 301295478
// Date: 01-10-2023

module.exports.users = function (req, res, next) {
    res.send('respond with a resource');
}

module.exports.profile = function (req, res, next) {
    res.render('users',
        {
            title: 'Profile Page',
            username: 'Julio'
        }
    );
}