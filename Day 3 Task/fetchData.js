

function performtask(task){
    return  new Promise((resolve,reject) =>{
    setTimeout(()=>{
        if (task!=="error"){
            resolve(task);
        }
        else{
            reject(new Error("Error"));
        }
    },1000)
}).then(value =>{
    console.log(value);
}).catch(error=>{
    console.log(error)
})
}

async function taskstatus(tasks){
    try{
        for(let n of tasks){
            const ststus=await performtask(n);
        }
    } catch(error){
        console.log(error)
    }
    finally{
        console.log("all task processed")
    }
}
const tasks =["task1","task2","task3"];

taskstatus(tasks);