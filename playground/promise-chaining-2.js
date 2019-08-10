require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d4b8d786087e4fc638dbc12').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount("5d4b960a9d6da2fd24133bcd").then((count) => {
    console.log(count)

}).catch((e) => {
    console.log(e)
})