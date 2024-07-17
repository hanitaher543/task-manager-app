
const createTask = require ('../controllers/task.controllers');

module.exports = async function (fastify, options){

    fastify.post('/create-task', createTask);

};
