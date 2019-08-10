const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { 
    useNewUrlParser: true,
    useCreateIndex: true
})




// const me = new User({
//     name: 'James',
//     email: "Mike@gmail.com",
//     password: "passsssssss"
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)

// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         required: false,
//         default: false
//     }
// })

// const task = new Task({
//     description: 'Task2  ',
//     // completed: true
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })