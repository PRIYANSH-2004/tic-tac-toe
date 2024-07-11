
let flag = false

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

    
    
    if((a1=="X" || a1=="x") && (a2=="X" || a2=="x") && (a3=="X" || a3=="x") ){
        document.getElementById('print').innerHTML = ("Player X won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        a1btn.style.color = "red"
        a2btn.style.color = "red"
        a3btn.style.color = "red"
        
    }
    else if((b1=="X" || b1=="x") && (b2=="X" || b2=="x") && (b3=="X" || b3=="x") ){
        document.getElementById('print').innerHTML = ("Player X won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        b1btn.style.color = "red"
        b2btn.style.color = "red"
        b3btn.style.color = "red"
        
    }
    else if((c1=="X" || c1=="x") && (c2=="X" || c2=="x") && (c3=="X" || c3=="x") ){
        document.getElementById('print').innerHTML = ("Player X won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        c1btn.style.color = "red"
        c2btn.style.color = "red"
        c3btn.style.color = "red"
        
    }
    else if((a1=="X" || a1=="x") && (b1=="X" || b1=="x") && (c1=="X" || c1=="x") ){
        document.getElementById('print').innerHTML = ("Player X won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        a1btn.style.color = "red"
        b1btn.style.color = "red"
        c1btn.style.color = "red"
        
    }
    else if((a2=="X" || a2=="x") && (b2=="X" || b2=="x") && (c2=="X" || c2=="x") ){
        document.getElementById('print').innerHTML = ("Player X won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        a2btn.style.color = "red"
        b2btn.style.color = "red"
        c2btn.style.color = "red"
        
    }
    else if((a3=="X" || a3=="x") && (b3=="X" || b3=="x") && (c3=="X" || c3=="x") ){
        document.getElementById('print').innerHTML = ("Player X won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        a3btn.style.color = "red"
        b3btn.style.color = "red"
        c3btn.style.color = "red"
        
    }
    else if((a1=="X" || a1=="x") && (b2=="X" || b2=="x") && (c3=="X" || c3=="x") ){
        document.getElementById('print').innerHTML = ("Player X won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        a1btn.style.color = "red"
        b2btn.style.color = "red"
        c3btn.style.color = "red"
        
    }
    else if((a3=="X" || a3=="x") && (b2=="X" || b2=="x") && (c1=="X" || c1=="x") ){
        document.getElementById('print').innerHTML = ("Player X won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        a3btn.style.color = "red"
        b2btn.style.color = "red"
        c1btn.style.color = "red"
        
    }


//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    
    else if((a1=="O" || a1=="o") && (a2=="O" || a2=="o") && (a3=="O" || a3=="o") ){
        document.getElementById('print').innerHTML = ("Player O won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        a1btn.style.color = "red"
        a2btn.style.color = "red"
        a3btn.style.color = "red"
        
    }
    else if((b1=="O" || b1=="o") && (b2=="O" || b2=="o") && (b3=="O" || b3=="o") ){
        document.getElementById('print').innerHTML = ("Player O won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        b1btn.style.color = "red"
        b2btn.style.color = "red"
        b3btn.style.color = "red"
        
    }
    else if((c1=="O" || c1=="o") && (c2=="O" || c2=="o") && (c3=="O" || c3=="o") ){
        document.getElementById('print').innerHTML = ("Player O won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        c1btn.style.color = "red"
        c2btn.style.color = "red"
        c3btn.style.color = "red"
        
    }
    else if((a1=="O" || a1=="o") && (b1=="O" || b1=="o") && (c1=="O" || c1=="o") ){
        document.getElementById('print').innerHTML = ("Player O won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        a1btn.style.color = "red"
        b1btn.style.color = "red"
        c1btn.style.color = "red"
        
    }
    else if((a2=="O" || a2=="o") && (b2=="O" || b2=="o") && (c2=="O" || c2=="o") ){
        document.getElementById('print').innerHTML = ("Player O won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        a2btn.style.color = "red"
        b2btn.style.color = "red"
        c2btn.style.color = "red"
        
    }
    else if((a3=="O" || a3=="o") && (b3=="O" || b3=="o") && (c3=="O" || c3=="o") ){
        document.getElementById('print').innerHTML = ("Player O won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        a3btn.style.color = "red"
        b3btn.style.color = "red"
        c3btn.style.color = "red"
        
    }
    else if((a1=="O" || a1=="o") && (b2=="O" || b2=="o") && (c3=="O" || c3=="o") ){
        document.getElementById('print').innerHTML = ("Player O won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        a1btn.style.color = "red"
        b2btn.style.color = "red"
        c3btn.style.color = "red"
        
    }
    else if((a3=="O" || a3=="o") && (b2=="O" || b2=="o") && (c1=="O" || c1=="o") ){
        document.getElementById('print').innerHTML = ("Player O won the game.")
        
        a1btn.disabled = true
        a2btn.disabled = true
        a3btn.disabled = true
        
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        
        c1btn.disabled = true
        c2btn.disabled = true
        c3btn.disabled = true
        
        a3btn.style.color = "red"
        b2btn.style.color = "red"
        c1btn.style.color = "red"
        
    }

    else if((a1=="X" || a1=='O') &&(a2=="X" || a2=='O') && (a3=="X" || a3=='O')  &&
    (b1=="X" || b1=='O') && (b2=="X" || b2=='O') && (b3=="X" || b3=='O')  &&
    (c1=="X" || c1=='O') && (c2=="X" || c2=='O') &&(c3=="X" || c3=='O')
     ){
        document.getElementById('print').innerHTML = ('Match Tie')
    }
    else{
        if(flag){
            document.getElementById('print').innerHTML = ('Player X turn')
        }else{
            document.getElementById('print').innerHTML = ('Player X turn')
        }
    }

    // alert("checked")
}


function func11(){
    // alert("clicked")
    if(flag){
        document.getElementById('a1').value ="X"
        document.getElementById('a1').disabled =true
        flag=false
    }else{
        document.getElementById('a1').value = "O"
        document.getElementById('a1').disabled= true
        flag=true
    }
}
function func12(){
    if(flag){
        document.getElementById('a2').value ="X"
        document.getElementById('a2').disabled =true
        flag=false
    }else{
        document.getElementById('a2').value = "O"
        document.getElementById('a2').disabled= true
        flag=true
    }
}
function func13(){
    if(flag){
        document.getElementById('a3').value ="X"
        document.getElementById('a3').disabled =true
        flag=false
    }else{
        document.getElementById('a3').value = "O"
        document.getElementById('a3').disabled= true
        flag=true
    }
}


function func21(){
    if(flag){
        document.getElementById('b1').value ="X"
        document.getElementById('b1').disabled =true
        flag=false
    }else{
        document.getElementById('b1').value = "O"
        document.getElementById('b1').disabled= true
        flag=true
    }
}
function func22(){
    if(flag){
        document.getElementById('b2').value ="X"
        document.getElementById('b2').disabled =true
        flag=false
    }else{
        document.getElementById('b2').value = "O"
        document.getElementById('b2').disabled= true
        flag=true
    }
}
function func23(){
    if(flag){
        document.getElementById('b3').value ="X"
        document.getElementById('b3').disabled =true
        flag=false
    }else{
        document.getElementById('b3').value = "O"
        document.getElementById('b3').disabled= true
        flag=true
    }
}


function func31(){
    if(flag){
        document.getElementById('c1').value ="X"
        document.getElementById('c1').disabled =true
        flag=false
    }else{
        document.getElementById('c1').value = "O"
        document.getElementById('c1').disabled= true
        flag=true
    }
}
function func32(){
    if(flag){
        document.getElementById('c2').value ="X"
        document.getElementById('c2').disabled =true
        flag=false
    }else{
        document.getElementById('c2').value = "O"
        document.getElementById('c2').disabled= true
        flag=true
    }
}
function func33(){
    if(flag){
        document.getElementById('c3').value ="X"
        document.getElementById('c3').disabled =true
        flag=false
    }else{
        document.getElementById('c3').value = "O"
        document.getElementById('c3').disabled= true
        flag=true
    }
}


function reset() {
    location.reload();
    a1=a2=a3=b1=b2=b3=c1=c2=c3=''
}