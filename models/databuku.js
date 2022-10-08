const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('databuku', {
    ID: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    Title: {
      type: DataTypes.STRING(510),
      allowNull: true
    },
    Author: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Publisher: {
      type: DataTypes.STRING(510),
      allowNull: false
    },
    Category: {
      type: DataTypes.STRING(510),
      allowNull: true
    },
    Year: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AllowingToLoan: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DaysToLoan: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Type: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Copy: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Condition: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TimeOfRenewal: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    Barcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'databuku',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "Barcode",
        using: "BTREE",
        fields: [
          { name: "Barcode" },
        ]
      },
    ]
  });
};
