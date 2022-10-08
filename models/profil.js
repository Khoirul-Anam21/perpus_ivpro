const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profil', {
    header1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    header3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    footer1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    footer2: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'profil',
    timestamps: false
  });
};
