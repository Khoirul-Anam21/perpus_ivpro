const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('datadendalama', {
    Days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Fine: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'datadendalama',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Days" },
        ]
      },
    ]
  });
};
