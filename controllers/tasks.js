const { Task } = require('./models/tasks');

const seeAll = async (req, res) => {
    
    try {
        const task = await Task.find({});
        res.status(200).json({task});
    } catch (err) {
        res.status(500).json({ "msg" : "Not found"})
    }
}

const getSingle = async (req, res) => {
    try {
        const { id: TaskID } = req.params;
        const task = await Task.findOne({ _id : TaskID});

        if(!task)
        {
            return res.status(201).json({ "msg" : "Not found"};)
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
        const task = await Task.delete({_d : TaskID});
        res.status(200).json({task});
    } catch (err) {
        res.status(500).json({ "msg" : "Not found"});
    }
}
const addTask = async (req, res) => {
    const added = await Task.create(req.body);
    res.status(200).json({added});
}

module.exports = {
    seeAll,
    getSingle,
    updateTask,
    deleteTask,
    addTask,
}