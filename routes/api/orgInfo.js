import Express from "express";
import OrgInfo from '../../models/OrgInfo.js';

const router = Express.Router();

//goals model
//Get api
router.get('/', (req, res) => {
  OrgInfo.find()
        .sort({ date: -1 })
        .then(orgInfo => res.json(orgInfo));

})

// POST model
router.post('/', (req, res) => {
    const newOrgInfo = new OrgInfo({
      manager: req.body.manager,
      orgChart: req.body.orgChart,
      iduPro: req.body.iduPro,
      howAcc: req.body.howAcc,
      fundInfo: req.body.fundInfo,
      mentor: req.body.mentor,
      orgVis: req.body.orgVis,
      proSer: req.body.proSer,
      tools: req.body.tools,
      knoBas: req.body.knoBas
    })
  
    newOrgInfo.save()
      .then(orgInfo => res.json(orgInfo))
})

//@route DELETE api/goals/:id
router.delete('/:id', (req, res) => {
  OrgInfo.findById(req.params.id)
      .then(orgInfo=> orgInfo.remove().then(() => res.json({success: true})))
      .catch(err=> res.status(404).json({ success: false}))
    })

export default router
