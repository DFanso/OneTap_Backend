const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


dotenv.config();
connectDB()

const app = express();

app.use(bodyParser.json()); //To parse JSON Data

app.get("/", (req, res) => {
    res.send('API is running');
});

app.use('/api/user', userRouter)

// Error
app.use(notFound)
app.use(errorHandler)

// Set the listening port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
