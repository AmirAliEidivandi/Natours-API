const router = require("express").Router();
const { createUser, deleteMe, deleteUser, getAllUsers, getUser, updateMe, updateUser } = require("../controllers/userController");
const { protect, login, signup, forgotPassword, resetPassword, updatePassword } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);

router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:token", resetPassword);

router.patch("/updateMyPassword", protect, updatePassword);
router.patch("/updateMe", protect, updateMe);
router.delete("/deleteMe", protect, deleteMe);

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
