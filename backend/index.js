const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3030;
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

app.use(express.json());
app.use(cors());

const todoRoutes = require('./routes/toDoRoutes');
mongoose.connect("mongodb://localhost/todolist", connectionOptions)
    .then(() => console.log("Connected Successfully!"))
    .catch((err) => console.log(err));

app.use("/todos", todoRoutes);


app.listen(PORT, () => {
    console.log("The server is listening to port " + PORT);
})