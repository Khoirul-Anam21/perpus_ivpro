const adminRouter = require("./admin_routes");
const userRouter = require("./user_routes");

const router = require("express").Router();

router.use("/api/admin/", adminRouter);
router.use("/api/user/", userRouter);

module.exports = router;