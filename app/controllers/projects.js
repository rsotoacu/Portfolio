// File: projects.js
// Author: Rodrigo Soto
// Student number: 301295478
// Date: 01-10-2023

module.exports.projects = function (req, res, next) {
    res.render('projects',
        {
            title: "Projects",
            asset3: "Bicicle store web page",
            asset2: "Bug smasher game",
            asset1: "Real state agent business web page",
        }
    );
}

