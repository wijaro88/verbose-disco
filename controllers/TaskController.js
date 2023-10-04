const {
    findALLTasks, 
    createTask,
    searchTasks,
} = require('../services/TaskService');

module.exports = {


    getAllTasks: (req, res) => {
        //codigo para conectar
        findALLTasks()
            .then((tasks) => {
                return res.status(200).send(tasks);
            })
            .catch((err) => {
                console.log('error importante en el instante');
                return res.status(500).send('hubo un error');
            });

    },

    getOneTaskById: (req, res) => {
        return res.send('getOneTaskById');
    },

    searchTasks: (req, res) => { //aggregate
        const params = {};
        if(req.query.is_done){
            params.is_done = req.query.is_done;
        }
        if(req.query.end_date){
            params.end_date = { $gt : req.query.end_date };
        }

        searchTasks(params)
        .then((tasks)=> {
            return res.status(200).send(tasks);
        })
        .catch((err) => {
            console.log('error importante adicionando una task');
            return res.status(500).send('hubo un error creando task');
        });
    },

    addTask: (req, res) => {
        const { description, end_date,is_done } = req.body;
        createTask({ description, end_date,is_done })
            .then((task) => {
                return res.status(201).send(task);
            })
            .catch((err) => {
                console.log('error importante adicionando una task',err);
                return res.status(501).send('hubo un error creando task');
            });

    },

    updateTask: (req, res) => {
        return res.send('updateTask');
    },

    deleteTask: (req, res) => {
        return res.send('deleteTask');
    },




};