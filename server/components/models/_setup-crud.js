const RouterFactory = require('node-express-crud-router').RouterFactory;

setupCrud = (app) => {
    const customerRouter = RouterFactory.create({path: "customers",model: require('./Customer')});
    app.use("/api", customerRouter);

    const contactRouter = RouterFactory.create({path: "contacts",model: require('./Contact')});
    app.use("/api", contactRouter);

    const categoryRouter = RouterFactory.create({path: "categories",model: require('./Category')});
    app.use("/api", categoryRouter);

    const questionRouter = RouterFactory.create({path: "questions",model: require('./Question')});
    app.use("/api", questionRouter);
}

module.exports = setupCrud