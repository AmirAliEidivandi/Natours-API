const router = require("express").Router();
const { aliasTopTours, createTour, deleteTour, getAllTours, getMonthlyPlan, getTour, getTourStats, updateTour, getToursWhitin } = require("../controllers/tourController");
const { protect, restrictTo } = require("../controllers/authController");
const reviewRouter = require("./review.routes");

// POST /tour/234kdaf/reviews
// GET /tour/234kdaf/reviews
// GET /tour/234kdaf/reviews/32jkfay

// router.route("/:tourId/reviews").post(protect, restrictTo("user"), createReview);

router.use("/:tourId", reviewRouter);

router.route("/top-5-cheap").get(aliasTopTours, getAllTours);
router.route("/tour-stats").get(getTourStats);
router.route("/monthly-plan/:year").get(protect, restrictTo("admin", "lead-guide", "guide"), getMonthlyPlan);

router.route("/tours-within/:distance/center/:latlng/unit/:unit").get(getToursWhitin);
// /tours-distance?distance=233&center=-40,45&unit=mi
// /tours-distance/233/center/-40,45/unit/mi

router.route("/").get(getAllTours).post(protect, restrictTo("admin", "lead-guide"), createTour);
router.route("/:id").get(getTour).patch(protect, restrictTo("admin", "lead-guide"), updateTour).delete(protect, restrictTo("admin", "lead-guide"), deleteTour);

module.exports = router;
