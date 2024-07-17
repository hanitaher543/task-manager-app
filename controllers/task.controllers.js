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



module.exports = {createTask, getAllTasks};

