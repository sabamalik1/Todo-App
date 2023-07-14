const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const searchList = document.getElementById("input1");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// check or uncheked and delete this particular task when click on cross 

listContainer.addEventListener("click", function(e){

    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//to store this tasks in browser So, whenever we open the browser the past list and current list will be show on browser

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showData();

// for search 
// const searchFun = ()=>{}
function searchFun(){
    let filter = document.getElementById('input1').value.toUpperCase();
    let ul = document.getElementById('list-container');
    let li = ul.getElementsByTagName('li');
    for(var i=0; i<li.length; i++){
        let a = li[i].getElementsByTagName('li')[0];
        let textVlue = li[i].textContent || li[i].innerHTML;
        if(textVlue.toUpperCase().indexOf(filter)>-1){
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }
    }

}
