import express from 'express'

const router = express.Router()

router.post("/", (req, res, next) => {
   try {
    console.log(req.body)
    res.json({
        message: "Adding router cought"
    })
   } catch (error) {
    error.code = 500
    next(error)
    
   }
});

router.get("/", (req, res) => {
    res.json({
        message: "YOu"
    })
})
router.put("/", (req, res) => {
    res.json({
        message: "YOu updating"
    })
})
export default router;
