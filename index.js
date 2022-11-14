function clickable(){
    alert("I got clicked!");
}
for(let i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click", clickable);
}