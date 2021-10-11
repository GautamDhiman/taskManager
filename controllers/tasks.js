const Task = require('../models/tasks');
const asyncWrapper = require('../middleware/asyncWrapper')

const seeAll = asyncWrapper(async (req, res) => {
    
    const tasks = await Task.find({});
    
    if(!tasks)
    {
        return res.status(201).send('Nothing here')
    }
    
    res.status(200).json({tasks});
})

const getSingle = asyncWrapper(async (req, res) => {
    const { id: TaskID } = req.params;
    const task = await Task.findOne({ _id : TaskID});

    if(!task)
    {
        return res.status(201).json({ "msg" : "Not found"})
    }

    res.status(200).json({ task });
})

const updateTask = asyncWrapper(async (req, res) => {
    const {id : TaskID} = req.params;
    const task = await Task.findOneAndUpdate({ _id: TaskID }, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({task});
})
const deleteTask = asyncWrapper(async (req, res) => {
    const { id: TaskID } = req.params;
    const task = await Task.deleteOne({_d : TaskID});
    res.status(200).json({task});
})
const addTask = asyncWrapper(async (req, res) => {
    const added = await Task.create(req.body);
    res.status(200).json({added});
})

module.exports = {
    seeAll,
    getSingle,
    updateTask,
    deleteTask,
    addTask,
}