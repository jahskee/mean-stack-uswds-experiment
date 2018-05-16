var RouterFactory = require('node-express-crud-router').RouterFactory;

setupCrud = (app) => {
    var customerRouter = RouterFactory.create({path: "customers",model: require('./models/Customer')});
    app.use("/api", customerRouter);

    var contactRouter = RouterFactory.create({path: "contacts",model: require('./models/Contact')});
    app.use("/api", contactRouter);
}

module.exports = setupCrud