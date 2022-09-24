const router = require("express").Router();
const { protect, restrictTo } = require("../controllers/authController");
const { createReview, getAllReviews } = require("../controllers/reviewController");

router.route("/").get(getAllReviews).post(protect, restrictTo("user"), createReview);

module.exports = router;
