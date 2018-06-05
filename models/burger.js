var orm = require('../config/orm.js');

//inserting burgers as table
//running response function as a callback which willbe
//sent to routes.js file
var burger = {
    all:function(cb){
        orm.all('burgers', function(res){
            cb(res);
        })
    },

    update: function(id, cb){
        orm.update('burgers',id, cb);
    }
}

module.exports = burger;