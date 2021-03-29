
console.log("script activatef");
let noOfTasks=  0  ;
// create new task event firing 
let createTaskBtn = document.querySelector("#createTask");
createTaskBtn.onclick = takeInput
// save our task event firing 

function takeInput(){

    let nthelementselector = document.querySelector("ul li:last-child div.newTask");
    if(nthelementselector!=null)
        alert("please first kindly fill the form then create new");
    else{

        let ulidentifier= document.querySelector("#allTasks");
        let listitem = document.createElement("li");
        
        let newTaskDiv = document.createElement("div");
        newTaskDiv.setAttribute("class", "newTask");
    
        
        // heaeder for the task  
        let newTaskHeader= document.createElement("input");
        newTaskHeader.setAttribute("type" ,"text");
        newTaskHeader.setAttribute("class","newTaskHeader");
        newTaskHeader.setAttribute("placeholder","Enter the task header");
        // task body 
        let newTaskBody = document.createElement("textarea");
        newTaskBody.setAttribute("placeholder","Plese enter the task details ... ");
        newTaskBody.setAttribute("class", "newtaskDetail");
        // save button 
        let saveBtn = document.createElement("button");
        saveBtn.innerText= "Save ";
        saveBtn.setAttribute("class","saveTask");
        // remove task 
        let removeBtn = document.createElement("button");
        removeBtn.innerText= "removeTask ";
        removeBtn.setAttribute("class","removeTask");
        
    
    
        newTaskDiv.append(newTaskHeader);
        newTaskDiv.append(newTaskBody);
        newTaskDiv.append(document.createElement("br"));
        newTaskDiv.append(saveBtn);
        newTaskDiv.append(removeBtn);
    
        listitem.append(newTaskDiv);
    
        ulidentifier.append(listitem);

        // *******************************
        let saveOurTask = document.querySelector(".saveTask");

        saveOurTask.onclick =  function(e){
            noOfTasks++; 
            let headerContent = document.querySelector('.newTaskHeader').value;
            let timeRegistered = new Date();
    
            let taskDetails = document.querySelector(".newtaskDetail").value;
    
            let newLi = document.createElement("li");
            newLi.innerHTML = ` <div class="content">
            <header class= "task-header">
                <h3>${headerContent}</h3>
                
                <div class="options">
                    <i class="far fa-trash-alt"></i>
                </div>
            </header>
            <span class="createdOn">Task Created on : ${timeRegistered.getDate()}-${timeRegistered.getMonth()}-${timeRegistered.getFullYear()} at ${timeRegistered.getHours()}:${timeRegistered.getMinutes()}
            </span>
            <br/>
            <span class = "taskBody">
            ${taskDetails}</span>
        </div>`
            // removal of input box after work done 
            document.querySelector("#allTasks").append(newLi);
            listitem.remove(); // this is the li having old input infos  
            console.log("parent e obj ");
            console.log(e.target.parentNode.parentNode );            
            // deletion of task
            let delButton = document.querySelectorAll("li .fa-trash-alt");
            for(let i =0 ; i < delButton.length; i++){
                
                delButton[i].onclick = function(e2){
                    console.log(e2.target.parentNode.parentNode.parentNode.parentNode);
                    //   console.log(e.target.parentNode);
                    //   console.log(e.target);
                    let elementToBeRemoved =e2.target.parentNode.parentNode.parentNode.parentNode;
                    elementToBeRemoved.remove();
                        
                    e2.target.parentNode.parentNode.remove();
                }

            }

            console.log(delButton);
            // console.log(delButton.parentNode);
           

        }

        

    }
    
}