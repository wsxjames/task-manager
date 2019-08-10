// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
    // const ObjectID=mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')


// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to db')
    }
    const db = client.db(databaseName)
        // db.collection('users').insertOne({
        //     name: 'James',
        //     age: 20
        // }, (error, result) => {
        //     if (error) {
        //         return console.log('Unable to insert users')
        //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //         name: 'Andrew',
    //         age: 27
    //     },
    //     {
    //         name: 'Jane',
    //         age: 28
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany([{
    //     task: 'Task1',
    //     complete: true
    // }, {
    //     task: 'Task2',
    //     complete: false
    // }, {
    //     task: 'Task3',
    //     complete: false
    // }])

    // db.collection('users').findOne({ _id: new ObjectID("5d4a30d06d777df3b2bde6a8") }, (error, user) => {
    //     if (error) {
    //         return console.log('unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 20 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5d4a344762c46bf3db9b72b8") }, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({ complete: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })



    // db.collection('users').updateOne({ _id: new ObjectID("5d4a2dd0336672f395a8d753") }, {
    //     // $set: {
    //     //     name: 'Mike'
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('tasks').updateMany({ complete: false }, {
    //     $set: {
    //         complete: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: "Task1"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


})