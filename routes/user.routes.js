const router = require("express").Router();
const { createUser, deleteMe, deleteUser, getAllUsers, getUser, updateMe, updateUser, getMe } = require("../controllers/userController");
const { protect, login, signup, forgotPassword, resetPassword, updatePassword, restrictTo } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:token", resetPassword);

// Protect all routes after this middleware
router.use(protect);

router.patch("/updateMyPassword", updatePassword);
router.get("/me", getMe, getUser);
router.patch("/updateMe", updateMe);
router.delete("/deleteMe", deleteMe);

router.use(restrictTo("admin"));

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
