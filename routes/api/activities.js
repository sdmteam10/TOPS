import Express from "express";
import Activity from '../../models/Activity.js';

const router = Express.Router();

//activities model
//Get api
router.get('/', (req, res) => {
    Activity.find()
        .sort({ date: -1 })
        .then(activities => res.json(activities))
})

// POST model
router.post('/', (req, res) => {
    const newActivity = new Activity({
      name: req.body.name,
      activityNumber: req.body.activityNumber
    })
  
    newActivity.save()
      .then(activity => res.json(activity))
})

//@route DELETE api/activities/:id
router.delete('/:id', (req, res) => {
  Activity.findById(req.params.id)
      .then(activity=> activity.remove().then(() => res.json({success: true})))
      .catch(err=> res.status(404).json({ success: false}))
    })


export default router
