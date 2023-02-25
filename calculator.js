let cal= document.getElementById("content");

function display(val){
    cal.value+=val;
}

function del(){
    cal.value=cal.value.slice(0,-1);
}

function res(){
    try{
        cal.value=eval(cal.value);
    }
    catch(err){
        cal.value="SYNTAX ERROR";
    }
}


function Clear(){
    cal.value= cal.value.slice(0,0);
}

