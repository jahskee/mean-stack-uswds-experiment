
var express = require('express');
var router = express.Router();

const setupAPIRoutes = (app) => {
    app.use("/api/contacts", require("./api/api-contacts"));
    app.use("/api/customers", require("./api/api-customers"));
    return app;
}

module.exports = setupAPIRoutes