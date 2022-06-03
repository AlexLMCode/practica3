const express = require('express');
const videoGamesRoutes = require('./videoGamesRoutes');

const routerApi = (app) => {

    const routesProject = express.Router();

    // http://localhost:5000/api/v1
    app.use('/api/v1', routesProject);
    routesProject.use('/videogames', videoGamesRoutes)

};

module.exports = { routerApi };