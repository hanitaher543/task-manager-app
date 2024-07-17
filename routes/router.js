
const {createTask,getAllTasks,getTaskById} = require ('../controllers/task.controllers');

module.exports = async function (fastify, options){

    fastify.post('/create-task', createTask);
    fastify.get('/getAllTasks', getAllTasks);
    fastify.get('/getTaskById/:taskId', getTaskById);


};
