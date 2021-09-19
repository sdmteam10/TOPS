import Express from "express";
import Goal from '../../models/Goal.js';

const router = Express.Router();

//goals model
//Get api
router.get('/', (req, res) => {
    Goal.find()
        .sort({ date: -1 })
        .then(goals => res.json(goals))
})

// POST model
router.post('/', (req, res) => {
    const newGoal = new Goal({
      name: req.body.name,
      goalNumber: req.body.goalNumber
    })
  
    newGoal.save()
      .then(goal => res.json(goal))
})

//@route DELETE api/goals/:id
router.delete('/:id', (req, res) => {
  Goal.findById(req.params.id)
      .then(goal=> goal.remove().then(() => res.json({success: true})))
      .catch(err=> res.stauts(404).json({ success: false}))
    })


export default router
