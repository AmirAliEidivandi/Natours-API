const router = require("express").Router();
const { getAllTours, getTour, createTour, updateTour, deleteTour, aliasTopTours, getTourStats, getMonthlyPlan } = require("../controllers/tour.controller");
const { protect } = require("../controllers/auth.controller");

router.route("/top-5-cheap").get(aliasTopTours, getAllTours);
router.route("/tour-stats").get(getTourStats);
router.route("/monthly-plan/:year").get(getMonthlyPlan);

router.route("/").get(protect, getAllTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(protect, deleteTour);

module.exports = router;
