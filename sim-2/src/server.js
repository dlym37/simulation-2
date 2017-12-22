require('dotenv').config();
const express = require('express'),
massive = require('massive');
bodyParser = require('body-parser');

const checkingForSession = require('./controllers/middlewares/checkingForSessions');

const app = express();
app.use(bodyParser.json()); //SIM-2 76F, 74J
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUnitialized: true
}))
app.use(checkingForSession);//SIM-2 75D
app.use(express.static(`${__dirname}/build`));

app.get('/api/dashboard:id', )//SIM-2 76D


const port = 6098;

massive(process.env.CONNECTIONSTRING).then(db =>{ //SIM-2 70C
    app.set('db', db); //70F
    app.get('db').init.seed().then(res => {
        console.log(res);
    })
    app.listen(port, () => {
        console.log("i am listening on port", port)
    })
})