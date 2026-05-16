
require("dotenv").config(); 

const express = require("express");
const cors = require("cors");

const pool = require("./database/db");
const userRoute = require("./rout/userRoute");

const app = express();


app.use(cors());
app.use(express.json());

app.get("/db-config", async (req, res) => {
    try {
        const result = await pool.query("Select * from student");
        console.log("server is running");
        res.send("The backend is running");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Database connection error");
    }
});

app.use("/api", userRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
});