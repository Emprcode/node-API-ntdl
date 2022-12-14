import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 8000;

// db connect

import mongoConnect from "./src/config/dbConfig.js";
mongoConnect();

// middleware

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// router
import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/task", taskRouter);

// handle all uncaught router request
app.use("*", (req, res, next) => {
  const error = {
    code: 404,
    message: "404 message not found",
  };
  next(error);
});

// global error handling

app.use((error, req, res, next) => {
  const statusCode = error.code || 500;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
