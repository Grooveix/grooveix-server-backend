const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const { Sequelize } = require('sequelize');

const { port, roles} = require('./config');

/* ===============>
     -- Environment Configuration --
 <=============== */

if (!process.env.DOCKER) {
    /* Configuration for local Machine */
    const dotenv = require("dotenv");
    dotenv.config({path: '../.env'});
}

/* --- MySQL Database connection --- */
const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
});

/* Initialising the Model on sequelize */

/* User Model */
require("./backend/common/models/users.model").init();

/* Collection Models */
require("./backend/common/models/collection/albums.model").init();
require("./backend/common/models/collection/artists.model").init();
require("./backend/common/models/collection/genres.model").init();
require("./backend/common/models/collection/songs.model").init();


sequelize.sync().then(() => {
    console.info("Connection to MySQL successfully established");
}).catch((err) => {
    console.error('Connection to MySQL failed: \n' + err)
});

/* ===============>
     --  Express Configuration --
 <=============== */
const app = express();

/* --- Backend Configuration --- */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

/* --- Frontend Configuration --- */
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "frontend", "views"));


/* ===============>
     -- Routing --
 <=============== */

/* --- Frontend GET request --- */
app.get('/dashboard', (req, res) => {
    res.render('index');
})

/* --- API Routing --- */
app.use('/api/users',  require('./backend/routes/users/routes'));
app.use('/api/auth',  require('./backend/routes/authorization/routes'));
app.use('/api/collection', require('./backend/routes/collection/routes'))



const PORT = port || 3000;
app.listen(PORT, () => { console.info(`Server is running on port ${PORT}`)});