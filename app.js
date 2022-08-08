const express = require("express");
const morgan = require("morgan");

const app = express();
const AppError = require("./utils/app.error");
const globalErrorController = require("./controllers/error.controller");
const userRouter = require("./routes/user.routes");
const tourRouter = require("./routes/tour.routes");

// middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

// routes
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorController);

module.exports = app;
