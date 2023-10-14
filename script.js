const textbox= document.getElementById("text-box");
const listTasks=document.getElementById("List-Tasks");

function addtask(){
    if (textbox.value === '') {
        alert("You Must Write Something!")
    } else {
        let li=document.createElement("li");
        li.innerHTML = textbox.value;
        listTasks.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    textbox.value = "";
    saveData()
}

listTasks.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
} ,false);

function saveData(){
    localStorage.setItem("data",ListTasks.innerHTML);
}

function showTask(){
    listTasks.innerHTML=localStorage.getItem("data");
}
showTask()