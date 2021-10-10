const mongoose = require('mongoose');



const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "task is required"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema);
