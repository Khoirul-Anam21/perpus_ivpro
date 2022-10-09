const connection = require("../config/connection");
const jwt = require("jsonwebtoken");

class UserController {
  constructor() {}

  async respondRegister(req, res, next) {
    try {
      const { name, password } = req.body;
      // console.log(req.body);
      connection.query(
        "SELECT * FROM `datauser` WHERE `Name`=? AND `Password`=?",
        [`${name}`, `${password}`],
        function (err, result, fields) {
          console.log(result);
          if (err) {
            return res
              .status(401)
              .json({ message: "Invalid username or password" });
          }

          connection.query(
            "INSERT INTO `datalogin` (`Time`, `Date`, `UserID`, `TimeOut`) VALUE (?, ?, ?, ?)",
            [
              new Date("0000-00-00").toLocaleString(),
              new Date("2022-10-09").toLocaleString(),
              result[0].UserID,
              new Date("0000-00-00").toLocaleString(),
            ],
            function (err, _resp, _fields) {
              if (err) {
                next(err);
                return;
              }
              const token = jwt.sign(result[0], process.env.VERIF_KEY);
              return res.status(200).json({
                message: "Success register",
                token,
              });
            }
          );
        }
      );
    } catch (error) {
      next(error);
    }
  }
  respondGetBooks(req, res, next) {
    try {
      const { title } = req.query;
      if (!title) {
        connection.query(
          "SELECT `Title`, `Author`, `Publisher`, `Category`, `Year` FROM `databuku`",
          function (err, result, fields) {
            if (err) {
              return res.status(404).json({ message: "not found" });
            }
            return res.status(200).json(result);
          }
        );
      }
      connection.query(
        "SELECT `Title`, `Author`, `Publisher`, `Category`, `Year` FROM `databuku` WHERE `Title` LIKE ?",
        [`%${title}%`],
        function (err, result, fields) {
          console.log(result);
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
  async respondGetBookDetail(req, res, next) {
    try {
      const { id } = req.params;
      connection.query(
        "SELECT * FROM `databuku` WHERE ID=?",
        [id],
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
}

module.exports = UserController;
