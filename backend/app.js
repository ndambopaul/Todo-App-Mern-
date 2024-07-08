const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const PORT = process.env.PORT || 5000;
const app = express();

// Add Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// Database Configuration
const { connect_database } = require("./db/connect_database");
connect_database()

// Authentication Middleware
const { verifyUser } = require("./middlewares/auth");

// Custom Routes
const authRoutes = require("./routes/auth");
const todosRoutes = require("./routes/todos");

// BASE ROUTE
app.get("/", (req, res) => {
    res.send({ message: "Server is up and running" }).status(200);
});

// Routes Configuration
app.use("/api/v1/users", authRoutes);
app.use("/api/v1/todos", verifyUser, todosRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});
