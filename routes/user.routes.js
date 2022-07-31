const router = require("express").Router();
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require("../controllers/user.controller");

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
