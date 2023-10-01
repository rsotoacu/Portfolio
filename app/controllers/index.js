module.exports.home = function (req, res, next) {
    res.render('index',
        {
            title: "Hello! I'm Rodrigo Soto",
        }
    );
}