const Task = require("../models/task");


async function createTask (req, res) {
    // Read data from request body
    const { title, description, status } = req.body;
    console.log( req.body);
    try {

         // Create instance from my model Task
        const newTask = await Task.create({
            title,
            description,
            status
        });

        res.status(200).send({message : 'Task created successfully', task : newTask });


    } catch(error){
        console.error ('Error occurred during post creation:', error);
        return res.status(500).send({error :'Internal server error'})
    }
};

async function getAllTasks (req, res) {
    try{
       // Fetch all tasks from the database
       const tasks = await Task.findAll();

      // Return the tasks as response message
      res.status(200).send({message :'The tasks that exist in the database are',tasks});
    } catch(error){
        console.error('Error occurred while fetching tasks:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};

async function getTaskById(req, res){

    const taskId = req.params.taskId;

    try{

    // Find task by ID in the database
    const task = await Task.findByPk(taskId);

    // Check if task exists
    if(!task){
        return res.status(404).send({ error :'Task not found'});
    }

    res.status(200).send({message : `The tasks by Id ${taskId}  that exist in the database are`, task});

    } catch (error){
        console.error('Error occurred while fetching task:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function deleteTask (req, res){

    const taskId = req.params.taskId;

    try{

        // Find task by Id in the database
        const task = await Task.findByPk(taskId);
        
        // Check task exist in db 
        if(!task){
            return res.status(404).send({error : 'Task not found'});
        }

        await task.destroy();

        // Return success message
        res.status(200).send({message :'Task deleted successfully' });


    }catch (error){
        console.error('Error occurred while deleting task:', error);
        res.status(500).json({ error: 'Internal server error' });

    }
};



module.exports = {createTask, getAllTasks, getTaskById, deleteTask};

