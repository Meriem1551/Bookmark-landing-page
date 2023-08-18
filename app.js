function openTab(evt, tabName){
    var i, tabcontent, tablinks;
    tabcontent=document.getElementsByClassName('container');
    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none";
    }
    tablinks=document.getElementsByClassName("tablinks");
    for(i=0;i<tablinks.length;i++){
        tablinks[i].className=tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display="flex";
    evt.currentTarget.className += " active";
}

    var buttons=document.getElementsByClassName('arrow');
   Array.from(buttons).forEach(button=> button.onclick= function () {
    if (this.classList.contains("rotated")) {
        this.classList.remove("rotated");
    }
    else{
        button.classList.toggle('rotated');
    }
    
   })
   var questions = document.getElementsByClassName('question');
   
   Array.from(questions).forEach(question => question.onclick = function() {
    if (this.classList.contains("open")) {
        this.classList.remove("open");
    } else {
        this.classList.add("open");
    }
});
   
let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let button=document.getElementById('button');
let email=document.getElementById('email');

button.addEventListener('click', check)
 function check(){
    const emailInput=email.parentElement;
    const form=emailInput.parentElement;
    if (!email.value.match(pattern)) {
       email.style.border="2px solid red";
       emailInput.querySelector('img').style.visibility="visible";
       form.querySelector('small').style.visibility="visible";
    }
    else{
        email.style.border="";
        emailInput.querySelector('img').style.visibility="hidden";
        form.querySelector('small').style.visibility="hidden";

    }
 }
   
