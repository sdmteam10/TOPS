import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const OrgInfoSchema = new Schema({
  //1.	Who is the Manager that the team manager reports to
  manager: {
    type: String
  },
  //2.	Where is an organisational chart available
  orgChart: {
    type: String
  },
  //3.1	Is there an Induction program for new employees
  iduPro: {
    type: Boolean
  },
  //3.2 If so how/when can this be accessed
  howAcc: {
    type: String
  },
  //4. What funds are available for the onboarder to attend formal courses
  fundInfo: {
    type: String
  },
  //5. Is there a qualified suitable mentor available for the new employee
  mentor: {
    type: Boolean
  },
  //6. How can the organisational vision best be understood
  orgVis: {
    type: String
  },
  //7. How can the product/service offered by the organisation best be understood by a new employee
  proSer: {
     type: String
      },
  //8. What tools are used for company wide communications?
  tools: {
    type: String
     },
  //9. Is there a company wide knowledge base?
  knoBas: {
    type: Boolean
     }
});

const OrgInfo = mongoose.model('OrgInfo', OrgInfoSchema)

export default OrgInfo