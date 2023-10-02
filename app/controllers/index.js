// File: index.js
// Author: Rodrigo Soto
// Student number: 301295478
// Date: 01-10-2023

module.exports.home = function (req, res, next) {
    res.render('index',
        {
            title: "Hello! I'm Rodrigo Soto",
        }
    );
}