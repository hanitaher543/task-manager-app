
const {createTask,getAllTasks} = require ('../controllers/task.controllers');

module.exports = async function (fastify, options){

    fastify.post('/create-task', createTask);
    fastify.get('/getAllTasks', getAllTasks);

};
