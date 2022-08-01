require("dotenv").config({ path: "./config.env" });
const app = require("./app");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));
