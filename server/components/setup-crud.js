//const customerModel = require('./models/customerModel');
var RouterFactory = require('node-express-crud-router').RouterFactory;

setupCrud = (app) => {
    var customerRouter = RouterFactory.create({path: "customers",model: require('./models/customerModel')});
    app.use("/api", customerRouter);

    var contactRouter = RouterFactory.create({path: "contacts",model: require('./models/contactModel')});
    app.use("/api", contactRouter);
}

module.exports = setupCrud