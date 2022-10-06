const router = require("express").Router();
const { getAccount, getLoginForm, getOverview, getTour, updateUserData } = require("../controllers/viewsController");
const { protect, isLoggedIn } = require("../controllers/authController");

router.get("/", isLoggedIn, getOverview);
router.get("/tour/:slug", isLoggedIn, getTour);
router.get("/login", isLoggedIn, getLoginForm);
router.get("/me", protect, getAccount);

router.post("/submit-user-data", protect, updateUserData);

module.exports = router;
