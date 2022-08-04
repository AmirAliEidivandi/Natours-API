const fs = require("fs");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const Tour = require("../../models/tour.model");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connection successful!");
    });

// read json file
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8"));

// import data into db
const importData = async () => {
    try {
        await Tour.create(tours);
        console.log("Data successfully loaded!");
    } catch (error) {
        console.log(error);
    }
    process.exit();
};

// delete all data from db
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log("Data successfully deleted!");
    } catch (error) {
        console.log(error);
    }
    process.exit();
};

if (process.argv[2] === "--import") {
    importData();
} else if (process.argv[2] === "--delete") {
    deleteData();
}
