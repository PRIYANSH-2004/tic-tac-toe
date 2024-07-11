// const { disable } = require("colors");

let flag = false


function disableAllButtons() {
    let buttons= document.querySelectorAll("input[type=text]")
    buttons.forEach(btn => btn.disabled=true)
}

function checkWin(){
    let a1, a2, a3, b1, b2, b3, c1, c2, c3;
    let a1btn, a2btn, a3btn, b1btn, b2btn, b3btn, c1btn, c2btn, c3btn;
    
    a1=document.getElementById('a1').value;
    a2=document.getElementById('a2').value;
    a3=document.getElementById('a3').value;
    
    b1=document.getElementById('b1').value;
    b2=document.getElementById('b2').value;
    b3=document.getElementById('b3').value;
    
    c1=document.getElementById('c1').value;
    c2=document.getElementById('c2').value;
    
    c3=document.getElementById('c3').value;
    
    
    
    a1btn=document.getElementById('a1')
    a2btn=document.getElementById('a2')
    a3btn=document.getElementById('a3')
    
    b1btn=document.getElementById('b1')
    b2btn=document.getElementById('b2')
    b3btn=document.getElementById('a3')
    
    c1btn=document.getElementById('c1')
    c2btn=document.getElementById('c2')
    c3btn=document.getElementById('c3')
    
    let winArr =[
        [a1,a2,a3], [b1,b2,b3], [c1,c2,c3],
        [a1,b1,c1], [a2,b2,c2], [a3,b3,c3],
        [a1,b2,c3], [a3,b2,c1]
    ]
    let winButton =[
        [a1btn,a2btn,a3btn], [b1btn,b2btn,b3btn], [c1btn,c2btn,c3btn],
        [a1btn,b1btn,c1btn], [a2btn,b2btn,c2btn], [a3btn,b3btn,c3btn],
        [a1btn,b2btn,c3btn], [a3btn,b2btn,c1btn]
    ]
    
    
    
    for(let i=0;i<winArr.length ;i++){
        if(winArr[i].every(val => val=='X' || val=='x')){
            document.getElementById('print').innerHTML= "Player X Won"
            
            winButton[i].forEach( btn=> btn.style.color='red')
            disableAllButtons();
            return
            
        }
        if(winArr[i].every(val => val=='O' || val=='o')){
            document.getElementById('print').innerHTML= "Player O Won"
            
            winButton[i].forEach( btn=> btn.style.color='red')
            disableAllButtons();
            return
            
        }
    }
    
    
    if(
        [a1,a2,a3,b1,b2,b3,c1,c2,c3].every(btn=> btn=="X" || btn=='x' || btn=='O' || btn=='o')
    ){
        document.getElementById("print").innerHTML ="Match Tie"
    }else{
        if(flag){
            document.getElementById("print").innerHTML ="Player X turn";
        }else{
            document.getElementById("print").innerHTML ="Player O turn";
        }
    } 
    
    // alert("checked")
}


function writeInBox(id){
    if(flag){
        document.getElementById(id).value ="X"
        document.getElementById(id).disabled =true
        flag=false
    }else{
        document.getElementById(id).value = "O"
        document.getElementById(id).disabled= true
        flag=true
    }
}


function func11(){
    // alert("clicked")
    writeInBox('a1')
}
function func12(){
    writeInBox('a2')
}
function func13(){
    writeInBox('a3')
}


function func21(){
    // alert("clicked")
    writeInBox('b1')
}
function func22(){
    writeInBox('b2')
}
function func23(){
    writeInBox('b3')
}


function func31(){
    // alert("clicked")
    writeInBox('c1')
}
function func32(){
    writeInBox('c2')
}
function func33(){
    writeInBox('c3')
}

function reset() {
    location.reload()
}