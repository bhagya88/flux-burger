'use strict';
module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define('burgers', {
    burger_name: {
       type :DataTypes.STRING
    },
    devoured: {
      type:DataTypes.BOOLEAN,
      defaultValue: false}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        burgers.hasMany(models.drinks);
      }
    }
  });
  return burgers;
};