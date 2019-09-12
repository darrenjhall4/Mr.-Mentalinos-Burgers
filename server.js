const express = require('express');
const db = require('./models');
const bodyParser = require('body-parser');
const querystring = require('querystring');

function main() {
    console.log('>>> main');

    var PORT = process.env.PORT || 3000;
    var app = express();
    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    var exphbs = require('express-handlebars');
    app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

    app.get('/', function(req, res) {
        db.burgers.findAll({}).then(function(burgers) {
            res.render('index', { burgers: burgers });
        });
    });

    app.get('/add', function(req, res) {
        console.log(req.query);
        var newBurger = { burger_name: req.query.burger_input, devoured: false };
        db.burgers.create(newBurger).then(function(burgers) {
            db.burgers.findAll({}).then(function(burgers) {
                res.render('index', { burgers: burgers });
            });
        });
    });

    app.get('/devour', function(req, res) {
        console.log(req.query);
        var newBurger = { devoured: true, id: req.query.devoured_id };
        db.burgers.update(newBurger, { where: { id: req.query.devoured_id } }).then(function(burgers) {
            db.burgers.findAll({}).then(function(burgers) {
                res.render('index', { burgers: burgers });
            });
        });
    });

    db.sequelize.sync({ force: false }).then(function() {
        app.listen(PORT, function() {
            console.log('App listening on PORT ' + PORT);
        });
    });
    console.log('<<< main');
}

main();

function orm_test() {
    orm.connect(function(connection) {
        orm.insertOne(connection, { burger_name: 'Gregs Special', devoured: false }, function(res) {
            orm.selectAll(connection, function(res) {
                let burger = res[0];
                (burger.burger_name = 'Devoured Burger'), (burger.devoured = true);
                orm.updateOne(connection, burger, function(res) {
                    console.log(res);
                });
            });
        });
    });
}

function burger_test() {
    burger.connect(function(connection) {
        burger.addOneBurger(connection, { burger_name: 'Gregs Special', devoured: false }, function(res) {
            burger.getAllBurgers(connection, function(res) {
                let thisBurger = res[0];
                (thisBurger.burger_name = 'Devoured Burger'), (thisBurger.devoured = true);
                burger.updateOneBurger(connection, thisBurger, function(res) {
                    console.log(res);
                });
            });
        });
    });
}