const RouterFactory = require('node-express-crud-router').RouterFactory;

crudRoutes = (app) => {
    const customerRouter = RouterFactory.create({path: "customers*",model: require('../models/Customer')});
    app.use("/api", customerRouter);

    const contactRouter = RouterFactory.create({path: "contacts*",model: require('../models/Contact')});
    app.use("/api", contactRouter);

    const categoryRouter = RouterFactory.create({path: "categories*",model: require('../models/Category')});
    app.use("/api", categoryRouter);

    const questionRouter = RouterFactory.create({path: "questions*",model: require('../models/Question')});
    app.use("/api", questionRouter);
}

module.exports = crudRoutes