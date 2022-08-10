const router = require("express").Router();
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require("../controllers/user.controller");
const { signup } = require("../controllers/auth.controller");

router.post("/signup", signup);

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
