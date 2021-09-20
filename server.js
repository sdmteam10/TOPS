import express from "express"
import mongoose from 'mongoose'
import goals from "./routes/api/goals.js"
import path from 'path'

const app = express();

//Bodyparser Middleware
//app.use(express.urlencoded({extended: true})); // DO WE NEED IT?
<<<<<<< HEAD
=======
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
>>>>>>> activityScheduler_1_1
app.use(express.json());

// DB Config
//const db = require('./config/keys').mongoURI;

    const db = 'mongodb+srv://mern:mongodb@tops-cluster.i7mgi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    const PORT = process.env.PORT || 5000;

//Connect to Mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err))

//Use routes
app.use('/routes/api/goals', goals);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    
//Serve static assets if in production
//Deploy
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))

    app.get ('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))

    })
}
