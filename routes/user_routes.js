/**
 * List route
 * a. Melihat data buku yang tersedia (Page untuk Searching dan melihat detil buku) v
 * b. Login dengan akun yang digenerate admin v
 */


const userRouter = require("express").Router();
const UserController = require("../controllers/user_controllers");
const auth_middleware = require("../middlewares/auth_middleware");
const userController = new UserController()

userRouter.get("/books", auth_middleware, userController.respondGetBooks);
userRouter.get("/books/:id", auth_middleware, userController.respondGetBookDetail);
userRouter.post("/register", userController.respondRegister);

module.exports = userRouter; 