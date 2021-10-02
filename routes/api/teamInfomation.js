import Express from "express";
import TeamInfo from '../../models/TeamInfo.js';

const router = Express.Router();
//teamInfo model
//Get api
router.get('/', (req, res) => {
  TeamInfo.find()
        .sort({ date: -1 })
        .then(teamInfo => res.json(teamInfo));

})

// POST model
router.post('/', (req, res) => {
    const newTeamInfo = new TeamInfo({
      leader: req.body.leader,
      mainTasks: req.body.mainTasks,
      languages: req.body.languages,
      frameworks: req.body.frameworks,
      fundInfo: req.body.fundInfo,
      conCode: req.body.conCode,
      documentation: req.body.documentation,
      teamTools: req.body.teamTools,
      database: req.body.database,
      ide: req.body.ide,
      vsCtrl: req.body.vsCtrl,
      runners: req.body.runners,
      ciServer: req.body.ciServer,
      depTools: req.body.depTools,
      archStyles: req.body.archStyles,
      testingStand: req.body.testingStand,
      agileDeve: req.body.agileDeve,
      planTechs: req.body.planTechs,
      supMonitor: req.body.supMonitor,
      proMoniter: req.body.proMoniter,
      keepComu: req.body.keepComu,
      teamComu: req.body.teamComu,
      autonomous: req.body.autonomous,
      muchVirtual: req.body.muchVirtual,
      keepVirtually: req.body.keepVirtually,
      aspectsDoc: req.body.aspectsDoc,
      usedTools: req.body.usedTools,
      codingTests: req.body.codingTests
    })
  
    newTeamInfo.save()
      .then(teamInfo => res.json(teamInfo))
})

//@route DELETE api/goals/:id
router.delete('/:id', (req, res) => {
  TeamInfo.findById(req.params.id)
      .then(teamInfo=> teamInfo.remove().then(() => res.json({success: true})))
      .catch(err=> res.status(404).json({ success: false}))
    })

export default router
