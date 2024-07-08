const mongoose = require("mongoose");

const connectString = "mongodb://localhost:27017/todos";

const connect_database = async () => {
  await mongoose
    .connect(connectString)
    .then(() => console.log("Database Connected!!"))
    .catch((error) => console.log(error.message))
};

module.exports = {
    connect_database
}