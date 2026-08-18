// variables
let count = 0;
// dom 
let counttext = document.getElementById('count');


// function  
function increase() {
    count = count + 1;
    counttext.textContent = count;
}
function decrease() {
    count = count -1;
    counttext.textContent = count;
}
function reset() {
    count = 0;
    counttext.textContent = count;
}

// Project 2
// Dom  
let nameinput = document.getElementById('nameinput');
let greetbutton = document.getElementById('greetbutton');
let message = document.getElementById('message');
// function    
function greetuser() {
    // variables
    let name = nameinput.value;
    // dom  
    message.textContent = " Hello " + name + "  !Welcome to our website  ";

}

// Event   
greetbutton.addEventListener("click", greetuser);


// project 3 

// dom  

let colorbox = document.getElementById('colorbox');
let redbtn = document.getElementById('redbtn');
let greenbtn = document.getElementById('greenbtn');
let bluebtn = document.getElementById('bluebtn');
let yellowbtn = document.getElementById('yellowbtn');
// function   
function makered() {
    redbtn.style.backgroundColor = "red";
    redbtn.style.borderRadius= "20";
    redbtn.style.height= "50px";
    redbtn.style.width= "50";
    redbtn.style.color= "white"
    redbtn.style.fontSize= "20px"
}
function makegreen() {
    colorbox.style.backgroundColor = "green";
}
function makeblue() {
    colorbox.style.backgroundColor = "blue";
}
function makeyellow() {
    colorbox.style.backgroundColor = "yellow";
}

// Event  
redbtn.addEventListener('click',makered);
greenbtn.addEventListener('click',makegreen);
bluebtn.addEventListener('click',makeblue);
yellowbtn.addEventListener('click',makeyellow);




// porject 4
let like = 0;
// dom  
let likebtn =document.getElementById('likebtn');
let likecount =document.getElementById('likecount');
// function  
function likepost(){
    like++;
    likecount.textContent= like + "likes";
    likebtn.textContent =  " people liked ";
    likebtn.classlist.add("like");
     
}
// Event  
likebtn.addEventListener("click", likepost);

// project 5
let password = document.getElementById('password');
let showbtn = document.getElementById('showbtn');
//  function  
function showhidepassword(){
    if(password.type === "password"){
        password.type="text";
        showbtn.textContent= "hdie";

    } else{
        password.type = "password";
        showbtn.textContent = "show" ;
    }
}

// Event  
showbtn.addEventListener('click',showhidepassword);


// let hi = document.getElementById('usama');
// hi.innerTexttext= "GOOD morning";

let btn = document.getElementById('hello');
btn.textContent= "click here usama";