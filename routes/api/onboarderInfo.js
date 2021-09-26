import Express from "express";
import OnboarderInfo from '../../models/OnboarderInfo.js';

const router = Express.Router();

//onboarderInfo model
//Get api
router.get('/', (req, res) => {
  OnboarderInfo.find()
        .sort({ date: -1 })
        .then(onboarderInfo => res.json(onboarderInfo));

})

// POST model
router.post('/', (req, res) => {
    const newOnboarderInfo = new OnboarderInfo({
        hFront: req.body.hFront,
        hBack: req.body.hBack,
        hData: req.body.hData,
        hTool: req.body.hTool,
        hCoding: req.body.hCoding,
        hTest: req.body.hTest,
        hPlan: req.body.hPlan,
        hComu: req.body.hComu,
        hVirtual: req.body.hVirtual

    })
  
    newOnboarderInfo.save()
      .then(onboarderInfo => res.json(onboarderInfo))
})

//@route DELETE 
router.delete('/:id', (req, res) => {
  OnboarderInfo.findById(req.params.id)
      .then(onboarderInfo=> orgInfo.remove().then(() => res.json({success: true})))
      .catch(err=> res.status(404).json({ success: false}))
    })

export default router
