
//Javascript for displaying details of the web page creators.
"use strict";
var count=0;
function groupMember1(){
 //display the details of groupMmeber1 on to webpage on clicking the button.
 let name ='Panith Gutta';
 let email='pxg77420@ucmo.edu';
 display("panithLabel", name, email);
}

function groupMember2(){
    //display the dsetails of groupMmeber2 on to webpage on clicking the button.
    let name ='Harshitha Nellore';
    let email='hxn40380@ucmo.edu';
    display("harshiLabel", name, email);
}

function groupMember3(){
    //display the details of groupMmeber3 on to webpage on clicking the button.
    let name ='Lavanya Naidu';
    let email='lxn72880@ucmo.edu';
    display("lavanyaLabel", name, email);
   }

function display(id, name, email){ //display function to print the details of developers 
    document.getElementById(id).style.textAlign="left"
    document.getElementById(id).innerHTML ='<span style="font-weight: bold;">'+'Name: '+' </span>'+name +'<br><span style="font-weight: bold;">'+'Email: '+'</span>'+email;
}
function nonDisplay(id){
        document.getElementById(id).style.display="none";
    }

//event listener for page load
window.addEventListener("load",function(){
    //Event Listener for submit button using anonymous function
    document.getElementById("lavanyaDetails").addEventListener("click",groupMember3, false);
    document.getElementById("panithDetails").addEventListener("click", groupMember1, false);
    document.getElementById("harshiDetails").addEventListener("click", groupMember2,false);
}, false);