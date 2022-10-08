const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('datapengembalian', {
    Time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DateOfReturn: {
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
    Fine: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'datapengembalian',
    timestamps: false
  });
};
