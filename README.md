# todoApi

Todo Api steps to install project
make sure you have Node installed in your system.

#1. Clone the Project

#2. open terminal in the project main Directory and Run npm install command to install node modules.

#3. Add .env file to the project and refer the mail and copy paste the DATABASE string in it.

#4. run the project with the command - node index.js

the project will run on localhost:8000/

#For adding task into the DB hit api - localhost:8000/v1/add

#For getting all tasks hit api - localhost:8000/v1/list

#for adding task follow this schema

 {
    taskName: {
      type: String,
      required: true
    },
    taskDescription: {
      type: String,
      required: true
    },
    creator: {
      type: String,
      required: true
    },
    duration: {
        day: { type: String},
        hours: { type: String },
        min: { type: String },
        sec: { type: String },
        month: { type: String },
        dayOfWeek: { type: String },
    },
  },
  { timestamps: true }
  
  example : 
  
{
	    "taskName": "Assignment5",
    "taskDescription": "Interview for BI",
    "creator": "Ashutosh Khajuria",
    "duration": {
        "sec": "5"
    }
}

#note duration format:

second-	0-59,
minute-	0-59,
hour-	0-23,
day of month-	1-31,
month-	1-12 (or names),
day of week-	0-7 (or names, 0 or 7 are sunday)
