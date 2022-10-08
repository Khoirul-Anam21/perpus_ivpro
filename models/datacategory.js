const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('datacategory', {
    CategoryID: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Category: {
      type: DataTypes.STRING(510),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'datacategory',
    timestamps: false
  });
};
