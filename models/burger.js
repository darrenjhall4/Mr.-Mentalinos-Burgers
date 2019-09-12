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
//   Burger.associate = function (models) {
//     Burger.belongsTo(models.Customer, {
//         foreignKey: {
//             allowNull: true
//         }
//     });
// }
  return Burger;
};