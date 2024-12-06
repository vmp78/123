const express = require("express");
const dotenv = require("dotenv");
const groupRouter = require("./routes/group");
const listRoutes = require("./routes/list");

const app = express();
dotenv.config();

app.use("/api/group", groupRouter);
app.use("/api/list", listRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Backend is running on port: " + PORT);
})
