const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('datalogin', {
    Time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TimeOut: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Duration: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'datalogin',
    timestamps: false,
    indexes: [
      {
        name: "Date",
        using: "BTREE",
        fields: [
          { name: "Date" },
        ]
      },
      {
        name: "UserID",
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
    ]
  });
};
