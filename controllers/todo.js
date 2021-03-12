const Todo = require("../models/todo");
const {deleteTask} = require("../services/service");

exports.postTask = (req,res) => {
    const todo = new Todo(req.body);
    todo.save((err, task)=>{
        if(err){
            return res.status(400).json({
                error: "NOT able save task"
            })
        }
        if(task.duration){

            deleteTask(task.duration,task._id)
        }
        res.json({task});
    });
}

exports.getList = (req, res) => {
    Todo.find().exec((err, list) => {
        if(err){
            return res.status(400).json({
                error: "NO tasks were found"
            })
        }
        res.json(list);
    });
};