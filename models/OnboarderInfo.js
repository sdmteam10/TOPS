import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const OnboarderInfoSchema = new Schema({
  //1.	How do you describe your front-end skills on 
  hFront: {
    type: String
  },
  //2.	How do you describe your back-end skills on
  hBack: {
    type: String
  },
  //3.   How do you describe your ability of database skills on
  hData: {
    type: String
  },
  //4.   How do you describe your ability of tool skill on <>?
  hTool: {
    type: String
  },
  //5.   How do you describe your coding and testing technique on
  hCoding: {
    type: Boolean
  },
  //6.   How do you describe your ability of testing and quality assurance standards on
  hTest: {
    type: String
  },
  //7.   How do you describe your ability of planning and monitoring process on
  hPlan: {
     type: String
      },
  //8.   How do you describe your ability of team communication on 
  hComu: {
    type: String
     },
  //9.   How do you describe your working in a virtual environment on
  hVirtual: {
    type: String
     }
});

const OnboarderInfo = mongoose.model('OnboarderInfo', OnboarderInfoSchema)

export default OnboarderInfo