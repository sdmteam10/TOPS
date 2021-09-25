import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const TeamInfoSchema = new Schema({
  //1.	Who is the team leader
  leader: {
    type: String
  },
  //2.	What are the main tasks expected of the new team member
  mainTasks: {
    type: String
  },
  //3.  What are the main programming languages the team uses
  languages: {
    type: String
  },
  //4.  What frameworks are mainly used by the team
  frameworks: {
    type: String
  },
  //5. What version control and code sharing mechanism is used by the team to get access to the source code
  conCode: {
    type: String
  },
  //6. What documentation about the source code design and structure is available and how can it be accessed and added to
  documentation: {
    type: String
  },
  //6.a What tools are used by the team for this
  teamTools: {
    type: String
  },
  //7. What database is used by the team
  database: {
     type: String
  },
  //8. What are the main coding and testing techniques regularly used by the team
  // a.Continuous Integration
  // b.Continuous Deployment
  // c.DevOps
  // d.Test-driven Development
  // e.Behaviour Driven Development
  // f.Pair programming
  // g.Mob programming
  // h.Feature flags
  // i.Infrastructure as code
  // j.Static code analysis
  // k.Other…
  codingTests: {
    type: Array
  },
  //9. What tools are used by the team to support coding and testing
  //9.a What IDE? (eg Visual Studio) 
  ide: {
    type: String
  },
  //9.b What version control? (eg GitHub)
  vsCtrl: {
    type: String
  },
  //9.c What test runners? (e.g. Jest, Cypress)
  runners: {
    type: String
  },
  //9.d What continuous integration servers (e.g. CircleCI)
  ciServer: {
    type: String
  },
  //9.e What Deployment tools (eg Octopus, Terraform, Kubernetes, feature flags)
  depTools: {
    type: String
  },
  //10.What are the main architectural styles used in the code base
  // a.Layered
  // b.Event Driven
  // c.Microservices
  // d.other
  archStyles: {
    type: String
  },                              
  //11. What unit testing and other testing and quality assurance standards (e.g. code reviews) are expected by the team
  testingStand: {
    type: String
  },
  //12.  What Agile development process is adopted by the team
  // a.Scrum
  // b.Kanban
  // c.Other
  agileDeve: {
    type: String
  },    
  //13. What planning techniques are used by the team
  planTechs: {
    type: String
  }, 
  //14. How is progress monitored
  proMoniter: {
    type: String
  }, 
  //15. What tools are used by the team to support the planning and monitoring process (eg Jira)
  supMonitor: {
    type: String
  }, 
  //16. How do the team keep in touch and communicate
  keepComu: {
    type: String
  }, 
  //16.a  What tools are used to support team communication (e.g. Slack, Discord, MS teams)
  teamComu: {
    type: String
  }, 
  //17. How autonomous is the team
  autonomous: {
    type: String
  }, 
  //18. How much of the team work is done in a virtual environment
  muchVirtual: {
    type: String
  }, 
  //18.a  What tools are used to keep in touch virtually
  keepVirtually: {
    type: String
  }, 
  //19  What  aspects of requirements, design, coding and testing are documented
  aspectsDoc: {
    type: String
  }, 
  //19.a  What tools are used for this (e.g. Confluence)
  usedTools: {
    type: String
  }
});

const TeamInfo = mongoose.model('TeamInfo', TeamInfoSchema)

export default TeamInfo