const User = require("../models/user.model");
const catchAsync = require("../utils/catch.async");

exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create(req.body);

    res.status(201).json({
        status: "success",
        data: {
            user: newUser,
        },
    });
});

console.log('hello');