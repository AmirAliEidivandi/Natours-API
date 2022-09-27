const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        review: {
            type: String,
            required: [true, "Review can not be empty!"],
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        tour: {
            type: mongoose.Schema.ObjectId,
            ref: "Tour",
            required: [true, "Review must belong to a tour."],
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: [true, "Review must belong to a tour."],
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

reviewSchema.pre(/^find/, function (next) {
    // this.populate({
    //     path: "tour",
    //     select: "name",
    // }).populate({
    //     path: "user",
    //     select: "name photo",
    // });

    this.populate({
        path: "user",
        select: "name photo",
    });

    next();
});

module.exports = mongoose.model("Review", reviewSchema);
