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
  

const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});