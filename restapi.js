var express = require("express")
var app=express()
app.use(express.json())
var students=[{"id":1,"name":"priya"},
{"id":2,"name":"priyanka"}
]
app.get("/getstudents",function(req,res){
   // res.json(students)
    res.write(JSON.stringify(students))
    res.end()
})
app.post("/addstudent",function(req,res){
   students.push(req.body)
   res.write("student added succesfully")
    res.end()
})

app.listen(2000,()=>{
    console.log("server started")

})
app.delete("/deletestudent/:id",function(req,res){
    id=req.params.id
    for(var i=0;i<students.length;i++){
        id==students[i].id
        students.splice(i,1)

    }
    res.end("deleted succesfully")
})
app.put("/updatestudent/:id",function(req,res){
    id=req.params.id
    name=req.body.name
     for(var i=0;i<students.length;i++){
         if(id==students[i].id)
         students[i].name=name
     }  
     res.end("update succesfully") 
})
app.get("/",function(req,res){
    res.write("hello world")
    res.end()
})
 
































