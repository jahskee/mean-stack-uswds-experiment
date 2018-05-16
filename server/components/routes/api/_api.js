

const attachRouterAPI = (router, controllerName) => {
    const controller = require('../../controllers/api/'+controllerName)

    router.get('/', controller.list);
    router.post('/create', controller.create);
    router.get('/read/:id', controller.read);
    router.put('/update', controller.update);
    router.delete('/delete/:id', controller.delete);

    return router;
}


module.exports = attachRouterAPI;