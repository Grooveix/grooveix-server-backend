const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

/* ===============>
     -- Environment Configuration --
 <=============== */
if (!process.env.DOCKER) {
    const dotenv = require("dotenv");
    dotenv.config({path: '.env'});
}

/* ===============>
     --  Express Configuration --
 <=============== */
const app = express();

/* --- Frontend Configuration --- */
app.use(express.static('public'))
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug')


/* --- Backend Configuration --- */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

/* ===============>
     -- Routing --
 <=============== */

app.get('/', (req, res) => {
    res.json({status: 'ONLINE'});
})

app.use('/user',  require('./routes/users'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });