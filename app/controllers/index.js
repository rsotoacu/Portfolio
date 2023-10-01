module.exports.home = function (req, res, next) {
    res.render('index',
        {
            title: "Hello! I'm Rodrigo Soto",
        }
    );
}

module.exports.about = function (req, res, next) {
    res.render('index',
        {
            title: 'About',
            username: 'Julio'
        }
    );
}

module.exports.projects = function (req, res, next) {
    res.render('index',
        {
            title: 'My projects',
            username: 'Rodrigo'
        }
    );
}

module.exports.services = function (req, res, next) {
    res.render('index',
        {
            title: 'Services I provide',
            username: 'Rodrigo Soto'
        }
    );
}

module.exports.contact = function (req, res, next) {
    res.render('index',
        {
            title: 'Cantact me',
            username: 'Julio'
        }
    );
}