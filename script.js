var active=document.querySelector("h3")
var btn=document.querySelector("button");
var flag=0

btn.addEventListener("click", function(){
    if (flag==0) {
        active.textContent="Friends"
        active.style.color="green"
        btn.style.marginLeft="7vw"
        btn.textContent="Remove Friends"
        flag=1;
    }else{
        active.textContent="Stranger"
        active.style.color="red"
        btn.textContent="Add Friend"
        btn.style.marginLeft="8vw"
        flag=0;
    }
 });
