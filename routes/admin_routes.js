/**
 * List routes
 *  
 * 
 * a. Create user
 * b. Read User
 * c. Update User 
 * d. Delete User
 */

const adminRouter = require("express").Router();
const AdminController = require("../controllers/admin_controllers");
const adminController = new AdminController();

adminRouter.get("/users", adminController.respondGetUsers);
adminRouter.get("/users/:id", adminController.respondGetUserById);
adminRouter.post("/users", adminController.respondCreateUser);
adminRouter.put("/users/:id", adminController.respondUpdateUser);
adminRouter.delete("/users/:id", adminController.respondDeleteUser);

module.exports = adminRouter;