const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('datauser', {
    UserID: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'datauser',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
    ]
  });
};
