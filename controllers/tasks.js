const Task = require('../models/tasks');

const seeAll = async (req, res) => {
    
    try {
        const task = await Task.find({});
        
        if(!task)
        {
            return res.status(201).send('Nothing here')
        }
        
        res.status(200).json({task});

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

const getSingle = async (req, res) => {
    try {
        const { id: TaskID } = req.params;
        const task = await Task.findOne({ _id : TaskID});

        if(!task)
        {
            return res.status(201).json({ "msg" : "Not found"})
        }

        res.status(200).json({ task });
    } catch (err) {
        res.status(500).json({ "msg" : "Not found"});
    }
}

const updateTask = async (req, res) => {
    try {
        const {id : TaskID} = req.params;
        const task = await Task.findOneAndUpdate({ _id: TaskID }, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({task});

    } catch (err) {
        res.status(500).json({ "msg" : "Not found"});
    }
}
const deleteTask = async (req, res) => {
    try {
        const { id: TaskID } = req.params;
        const task = await Task.deleteOne({_d : TaskID});
        res.status(200).json({task});
    } catch (err) {
        res.status(500).json({ "msg" : "Not found"});
    }
}
const addTask = async (req, res) => {
    try {
        const added = await Task.create(req.body);
        res.status(200).json({added});
    } catch (err) {
        console.log(err);
        res.status(500).json({ "msg" : "Not found"});
    }
}

module.exports = {
    seeAll,
    getSingle,
    updateTask,
    deleteTask,
    addTask,
}