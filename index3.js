let myDiv= document.getElementById('myDiv')
let i = 0;

myDiv.onclick=function(){
i++
if(i%2 !==0){
myDiv.style.backgroundColor='yellow';




}else if (i=2){
myDiv.style.backgroundColor='red';
}else{
myDiv.style.opacity='0';
}
}

    
