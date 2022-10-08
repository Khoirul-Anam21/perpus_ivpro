const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('datapinjam', {
    Time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DateOfLoan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    MemberID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BookID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Days: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DueDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Fine: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Renewal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'datapinjam',
    timestamps: false
  });
};
