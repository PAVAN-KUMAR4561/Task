class RailwayForm{
    submit(){
        console.log(this.name+": Form is submitted for train no: "+this.trainNo);
    }
    cancel(){
        console.log(this.name +": This form is cancelled for train no: "+this.trainNo);
    }
    fill(name,trainNo){
        this.name= name
        this.trainNo=trainNo
    }
}
// Create form for Harry
let harry = new RailwayForm()
// fill the form with harry details
harry.fill("Harry",11111)

// Create form for Harry
let rohan = new RailwayForm()
// fill the form with harry details

rohan.fill("Rohan",22222)
harry.submit()
rohan.submit()
rohan.cancel()