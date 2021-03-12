const cron = require("node-cron");
let shell = require("shelljs");
const Todo = require("../models/todo")

exports.deleteTask = (obj,id) => {

    let str="";
    let del=false;

    if(obj.sec){
        str=obj.sec
    }else{
        str="*"
    }

    if(obj.min){
        str=str+" "+obj.min
    }else{
        str=str+" *"
    }

    if(obj.hours){
        str=str+" "+obj.hours
    }else{
        str=str+" *"
    }

    if(obj.day){
        str=str+" "+obj.day
    }else{
        str=str+" *"
    }

    if(obj.month){
        str=str+" "+obj.month
    }else{
        str=str+" *"
    }
     
    if(obj.dayOfWeek){
        str=str+" "+obj.dayOfWeek
    }else{
        str=str+" *"
    }

    console.log("STRINGGG",str, id);

 
    var task = cron.schedule(str, () => {
        console.log('running');
        Todo.findOneAndDelete({_id: id },(err,res)=>{
             if(err){
                 console.log(err);
             }else{
               console.log(res);
               task.stop();
             }

        })
      });



 
}
