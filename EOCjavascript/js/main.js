
 var div = document.getElementById('myDiv');

function colorChange(event){
    var id = window.event.srcElement.id;
    if(div.classList.contains(id)){
        div.classList.remove(id);
    }else{
        div.className = '';    
        div.classList.add(id, 'black');
    }    
}

function yellow(){
    div.classList.remove('red','blue');
    div.classList.toggle('yellow');
}

function blue(){
    div.classList.remove('red','yellow');
    div.classList.toggle('blue');
}

function red(){
    div.classList.remove('yellow','blue');
    div.classList.toggle('red');
}