const Tour = require("../models/tour.model");

const getAllTours = async (req, res) => {
    try {
        const tours = await Tour.find({});
        res.status(200).json({
            status: "success",
            results: tours.length,
            data: {
                tours,
            },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        });
    }
};

const getTour = async (req, res) => {
    const { id } = req.params;
    try {
        const tour = await Tour.findById(id);
        res.status(200).json({
            status: "success",
            data: {
                tour,
            },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        });
    }
};

const createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                tour: newTour,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "invalid data sent!",
        });
    }
};

const updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        res.status(200).json({
            status: "success",
            data: {
                tour,
            },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        });
    }
};

const deleteTour = async (req, res) => {
    try {
        await Tour.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            message: "tour has been deleted...",
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        });
    }
};

module.exports = {
    getAllTours,
    getTour,
    createTour,
    updateTour,
    deleteTour,
};
