import express from 'express'

const router = express.Router()

// delete this fake database when integrate.

let fakeDb = [{_id: 1,
    task : "watching TV",
    hr : 70,
    type: "entry"
  }];

router.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "List of tasks",
        fakeDb,
    })
})

router.post("/", (req, res, next) => {
   try {
    const data = req.body
    console.log(data)
    fakeDb.push(data);

    res.json({
        status: "Success",
        message: "New task has been added"
    })
   } catch (error) {
    error.code = 500
    next(error)
    
   }
});

router.put("/", (req, res) => {
    res.json({
        message: "YOu updating"
    })
})
export default router;
