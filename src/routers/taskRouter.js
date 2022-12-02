import express from "express";
import { deleteManyTasks, getTasks, insertTask, updateTask } from "../models/task/TaskModel.js";

const router = express.Router();


router.post("/", async(req, res, next) => {
  try {
   const result = await insertTask(req.body)
  //  console.log(result);

  if(result ?._id){
    return  res.json({
      status: "Success",
      message: "New task has been added",
    });
  }
    res.json({
      status: "error",
      message: "Unable to add task, try again later",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});


router.get("/", async (req, res, next ) => {

  try {
    const tasks = await getTasks();
  res.json({
    status: "success",
    message: "List of tasks",
    tasks,
   
  });
  } catch (error) {
    console.log(error)
    next(error)
    
  };
  
});


router.patch("/", async (req, res, next) => {
  try {
    const { _id, type } = req.body;
    // update
    const task = await updateTask(_id, type)
   

    if(task?._id){
      return res.json({
        status: "success",
        message: "Task has been updated",
      });

    }
    res.json({
      status: "error",
      message: "unable to update the task",
    });
    
  } catch (error) {
    error.status = 500;
    next(error);
  }
});
// use this method for single item to delete
// router.delete("/:_id", (req, res, next) => {
router.delete("/", async (req, res, next) => {
  const _idArg = req.body;
  // console.log(_idArg);

  //replace following code by calling db module
  try {
  const result = await deleteManyTasks(_idArg);
  // console.log(result);

  if(result?.deletedCount){
   return res.json({
      status: "success",
      message: "Deleted",
    });
  }
    res.json({
      status: "error",
      message: "unable to delete, try again later",
    });
  } catch (error) {
    (error.code = 500), next(error);
  }
});

export default router;
