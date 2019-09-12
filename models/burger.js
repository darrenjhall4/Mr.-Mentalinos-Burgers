module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('burgers', {
      burger_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      devoured: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      }
  });
  return Burger;
};
