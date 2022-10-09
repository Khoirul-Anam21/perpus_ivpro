const connection = require("../config/connection");

class AdminController {
  constructor() {}
  async respondGetUserById(req, res, next) {
    try {
      const { id } = req.params;
      connection.query(
        "SELECT `UserID`, `Name`, `Status` FROM `datauser` WHERE `UserID`= ?",
        id,
        function (err, result, fields) {
          if (err) {
            return res.status(404).json({ message: "not found" });
          }
          return res.status(200).json(result);
        }
      );
    } catch (error) {
      next(error);
    }
  }
  async respondGetUsers(req, res, next) {
    try {
      connection.query(
        "SELECT * FROM `datauser`",
        function (err, result, fields) {
          if (err) {
            return res.status(404).json({ message: "not found" });
          }
          return res.status(200).json(result);
        }
      );
    } catch (error) {
      next(error);
    }
  }
  async respondCreateUser(req, res, next) {
    try {
      const idPool = "QWERTYUIOPASDFGHJKLZXBNM";
      const { name, password } = req.body;
      const id = [
        idPool[Math.floor(Math.random() * idPool.length)],
        idPool[Math.floor(Math.random() * idPool.length)],
        idPool[Math.floor(Math.random() * idPool.length)],
      ].join("");

      connection.query(
        "INSERT INTO `datauser`(`UserID`, `Name`, `Password`, `Status`) VALUE(?, ?, ?, ?)",
        [id, name, password, 1],
        function (err, result, fields) {
          if (err) {
            return res.status(400).json({ message: "User gagal dibuat" });
          }
          return res.status(201).json({
            status: "success created",
            message: "User berhasil dibuat",
          });
        }
      );
    } catch (error) {
      next(error);
    }
  }
  async respondUpdateUser(req, res, next) {
    try {
      const { id } = req.params;
      const { name, password, status } = req.body;
      if (!name) {
      }
      let oldUser;
      connection.query(
        "SELECT * FROM `datauser` WHERE `UserID`=?",
        [id],
        function (err, result, fields) {
          if (err) {
            return res.status(404).json({ message: "not found" });
          }
          oldUser = result[0];
          const statusObj = {
            ADA: 1,
            HILANG: 2,
            KELUAR: 3,
          };
          connection.query(
            "UPDATE `datauser` SET `Name`= ?, `Password`=?, `Status`=? WHERE `UserID`= ?",
            [
              name ? name : oldUser.Name,
              password ? password : oldUser.Password,
              status ? statusObj[status] : oldUser.Status,
              id,
            ],
            function (err, result, fields) {
              if (err) {
                return res
                  .status(400)
                  .json({ message: "User gagal diperbarui" });
              }
              return res.status(200).json({
                status: "success updated",
                message: "User berhasil diperbarui",
              });
            }
          );
        }
      );
    } catch (error) {
      next(error);
    }
  }
  async respondDeleteUser(req, res, next) {
    try {
      const { id } = req.params;
      connection.query(
        "DELETE FROM `datauser` WHERE `UserID`=?",
        id,
        function (err, result, fields) {
          if (err) {
            return res.status(400).json({ message: "User gagal dihapus" });
          }
          return res.status(200).json({
            message: "User berhasil dihapus",
          });
        }
      );
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AdminController;
