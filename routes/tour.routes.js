const router = require("express").Router();
const { aliasTopTours, createTour, deleteTour, getAllTours, getMonthlyPlan, getTour, getTourStats, updateTour } = require("../controllers/tourController");
const { protect, restrictTo } = require("../controllers/authController");

router.route("/top-5-cheap").get(aliasTopTours, getAllTours);
router.route("/tour-stats").get(getTourStats);
router.route("/monthly-plan/:year").get(getMonthlyPlan);

router.route("/").get(protect, getAllTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(protect, restrictTo("admin", "lead-guide"), deleteTour);

module.exports = router;
