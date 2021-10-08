const seeAll = (req, res) => {
    res.send('All Tasks');
}

const getSingle = (req, res) => {
    res.send('Get single product');
}

const updateTask = (req, res) => {
    res.send('updated');
}
const deleteTask = (req, res) => {
    res.send('deleted task');
}
const addTask = (req, res) => {
    const task = req.body;
    res.json(task.name);
}

module.exports = {
    seeAll,
    getSingle,
    updateTask,
    deleteTask,
    addTask,
}