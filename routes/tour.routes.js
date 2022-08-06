const router = require("express").Router();
const { getAllTours, getTour, createTour, updateTour, deleteTour, aliasTopTours, getTourStats } = require("../controllers/tour.controller");

router.route("/top-5-cheap").get(aliasTopTours, getAllTours);
router.route("/get-stats").get(getTourStats);
router.route("/").get(getAllTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
