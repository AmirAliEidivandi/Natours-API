const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config({ path: "./config.env" });

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connection successful!");
    });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));
