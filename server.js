const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config({ path: "./vars/config.env" });

process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...".red.bold.underline);
    console.log(err.name, err.message);
    process.exit(1);
});

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful!".cyan.underline.bold));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`.cyan);
});

process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! 💥 Shutting down...".red);
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
