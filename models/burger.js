// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burger = {
    all: function (cb) {
        orm.allBurgers("burger", function (res) {
            cb(res);
        });
    },


    create: function (name, YN, cb) {
        orm.addBurger("burger", name, YN, function (res) {
            cb(res);
        });

    },

    update: function (name, devoured, cb) {
        orm.updateBurger("burger", name, devoured, function (res) {
            cb(res);
        });

    },

    delete: function (name, cb) {
        orm.deleteBurger("burger", name, function (res) {
            cb(res);
        });

    }
};

// exports database functions for the controller (controller/apiRoutes.js)
module.exports = burger;