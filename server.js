// // Dependencies
// // =============================================================
// const express = require('express');
// const exphbs = require('express-handlebars');
// // Requires the 'express-session' module
// const session = require(`express-session`);

// // Sets up the Express App
// // =============================================================
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Sets up Sequelize
// // =============================================================
// const sequelize = require("./config/connection");
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// // Sets Handlebars as the default template engine
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// // Sets up the sessions with the 'secret', 'resave', 'saveUninitialized' options
// app.use(
//     session({
//         secret: 'Super secret secret',
//         cookie: {},
//         resave: false,
//         saveUninitialized: true,
//         store: new SequelizeStore({
//             db: sequelize
//         })
//     })
// );

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, () => {
//     console.log('App listening on PORT ' + PORT);
// });
  
const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
//set up express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// The express.static() method is a built-in Express.js middleware function that can 
// take all of the contents of a folder and serve them as 
// static assets. This is useful for front-end specific files 
// like images, style sheets, and JavaScript files.
app.use(express.static(path.join(__dirname, 'public')));
//express handlebars template
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`API server now on port ${PORT}!`));
});