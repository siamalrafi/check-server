const express = require("express");
const app = express();
const cors = require("cors");
const tutorRouter = require("./routes/v1/tutor.route");
const userRouter = require("./routes/v1/user.route");



// middleware
app.use(express.json());
app.use(cors());


// get all products
app.use("/api/v1/tutor", tutorRouter)
// app.use("api/v1/user", userRouter)

// ---------- Happy Server ----------
app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});
 

module.exports = app;