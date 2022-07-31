const express = require("express");
const app = express();
const morgan = require("morgan");
const userRouter = require("./routes/user.routes");
const tourRouter = require("./routes/tour.routes");

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
    console.log("Hello from the middleware");
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// routes
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
