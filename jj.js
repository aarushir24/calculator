function btn(ans){
document.getElementById("in").value+=ans;
}
function res(){
let x=document.getElementById("in").value;
let y= eval(x)
document.getElementById("in").value=y;
}
function clr(){
document.getElementById("in").value="";
}
function sqrt(){
    let x=document.getElementById("in").value;
    let y=Math.sqrt(x);
    document.getElementById("in").value=y;
}
function del(){
   var a= document.getElementById("in").value;
   
   document.getElementById("in").value=a.substr(0,a.length-1);
}

