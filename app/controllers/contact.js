// File: contact.js
// Author: Rodrigo Soto
// Student number: 301295478
// Date: 01-10-2023


module.exports.contact = function (req, res, next) {
    res.render('contact',
        {
            title: "Contact me",
        }
    );
}