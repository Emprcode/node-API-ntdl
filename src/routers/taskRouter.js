import express from "express";

const router = express.Router();

// delete this fake database when integrate.

let fakeDb = [{ _id: 1, task: "watching TV", hr: 70, type: "entry" }];

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "List of tasks",
    fakeDb,
  });
});

router.post("/", (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    fakeDb.push(data);

    res.json({
      status: "Success",
      message: "New task has been added",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});

router.patch("/", (req, res, next) => {
  const { _id, type } = req.body;

  try {
    // update

    // const update = fakeDb.map((item) => {
    fakeDb = fakeDb.map((item) => {
      if (item._id === _id) {
        item.type = type;
      }
      return item;
    });

    res.json({
      status: "success",
      message: "YOu updating",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});
// use this method for single item to delete
// router.delete("/:_id", (req, res, next) => {
router.delete("/", (req, res, next) => {
  const _idArg = req.body;
  console.log(_idArg);

  //replace following code by calling db module
  //   fakeDb = fakeDb.filter((item) => item._id != _id);
  fakeDb = fakeDb.filter((item) => !_idArg.includes(item._id));

  try {
    res.json({
      status: "success",
      message: "Deleted",
    });
  } catch (error) {
    (error.code = 500), next(error);
  }
});

export default router;
