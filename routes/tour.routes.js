const router = require("express").Router();
const { getAllTours, getTour, createTour, updateTour, deleteTour, checkId, checkBody } = require("../controllers/tour.controller");

router.param("id", checkId);

router.route("/").get(getAllTours).post(checkBody, createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
