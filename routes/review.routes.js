const router = require("express").Router({ mergeParams: true });
const { protect, restrictTo } = require("../controllers/authController");
const { createReview, getAllReviews, deleteReview, updateReview, setTourUserId, getReview } = require("../controllers/reviewController");

router.use(protect);

router.route("/").get(getAllReviews).post(restrictTo("user"), setTourUserId, createReview);
router.route("/:id").get(getReview).patch(restrictTo("user", "admin"), updateReview).delete(restrictTo("user", "admin"), deleteReview);

module.exports = router;
