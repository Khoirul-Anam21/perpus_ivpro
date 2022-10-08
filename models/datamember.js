const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('datamember', {
    MemberID: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    HP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    MaxLoan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'datamember',
    timestamps: false
  });
};
