var DataTypes = require("sequelize").DataTypes;
var _dataauthor = require("./dataauthor");
var _databuku = require("./databuku");
var _datacategory = require("./datacategory");
var _datadendalama = require("./datadendalama");
var _datakondisi = require("./datakondisi");
var _datalogin = require("./datalogin");
var _datamember = require("./datamember");
var _datapengembalian = require("./datapengembalian");
var _datapinjam = require("./datapinjam");
var _datapublisher = require("./datapublisher");
var _datastatus = require("./datastatus");
var _datatipebuku = require("./datatipebuku");
var _datauser = require("./datauser");
var _profil = require("./profil");

function initModels(sequelize) {
  var dataauthor = _dataauthor(sequelize, DataTypes);
  var databuku = _databuku(sequelize, DataTypes);
  var datacategory = _datacategory(sequelize, DataTypes);
  var datadendalama = _datadendalama(sequelize, DataTypes);
  var datakondisi = _datakondisi(sequelize, DataTypes);
  var datalogin = _datalogin(sequelize, DataTypes);
  var datamember = _datamember(sequelize, DataTypes);
  var datapengembalian = _datapengembalian(sequelize, DataTypes);
  var datapinjam = _datapinjam(sequelize, DataTypes);
  var datapublisher = _datapublisher(sequelize, DataTypes);
  var datastatus = _datastatus(sequelize, DataTypes);
  var datatipebuku = _datatipebuku(sequelize, DataTypes);
  var datauser = _datauser(sequelize, DataTypes);
  var profil = _profil(sequelize, DataTypes);


  return {
    dataauthor,
    databuku,
    datacategory,
    datadendalama,
    datakondisi,
    datalogin,
    datamember,
    datapengembalian,
    datapinjam,
    datapublisher,
    datastatus,
    datatipebuku,
    datauser,
    profil,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
