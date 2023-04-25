const main_container=document.querySelector('.main-container') ;
const login_btn=main_container.querySelector("#login-btn");


let user_name=document.getElementById("user_name");
let pswrd = document.getElementById("user_pass");
let toggleBtn=document.getElementById('toggleBtn');
let alertMsg=document.querySelector("#massege_tag");
console.log(alertMsg);
toggleBtn.onclick=function(){
if(pswrd.type === 'password'){
    pswrd.setAttribute('type','text');
    toggleBtn.innerHTML=`<span class="material-symbols-outlined">
    visibility
    </span>`;
}
else{
    pswrd.setAttribute('type','password');
    toggleBtn.innerHTML=`<span class="material-symbols-outlined">
    visibility_off
    </span>`; 
}
}


function passValidation(){
if(pswrd.value==""){
  alertMsg.innerHTML='please fill the password field';
  alertMsg.classList.add('invalid_pass');
  return false;
}
else{
  if(alertMsg.classList.contains("invalid_pass")) 
  {
    alertMsg.innerHTML="";
    alertMsg.classList.remove("invalid_pass");
  }
  return true;
}  
}


function dataVerify(){
  if(user_name.value!="" && passValidation()){
     return true;
  }
  else{
    return false;
  }
}

function init() {
    'use strict';
    if (document && document.getElementById) {
        var loginForm = document.getElementById('login-form');
        loginForm.onsubmit = passValidation;
    }
}
window.onload = init;


const toast=document.querySelectorAll('.toast'),
closeIcon=document.querySelectorAll('.close'),
progress=document.querySelectorAll('.progress');

login_btn.addEventListener("click", (e) =>{
  e.preventDefault();
 var username = user_name.value;
 var password = pswrd.value;
 if (localStorage.getItem("users") == null) {
  userInfo = [];
} else {
  userInfo = JSON.parse(localStorage.getItem("users"));
}
const isExistingUser = userInfo.some(
    (user) => user.name === username && user.password === password 
  );
if(isExistingUser && dataVerify()){
  toast[0].classList.add("active");
  progress[0].classList.add("active");
setTimeout(()=>{
  toast[0].classList.remove("active");
},5000);
setTimeout(()=>{
  progress[0].classList.remove("active");
},5300);
setTimeout(()=>{
  window.location.href="welcome.html";
},5600);
}
else if(! isExistingUser && dataVerify()){
  toast[1].classList.add("active");
  progress[1].classList.add("active");
setTimeout(()=>{
  toast[1].classList.remove("active");
},5000);
setTimeout(()=>{
  progress[1].classList.remove("active");
},5300);
} 
else{
  if(! dataVerify()){
    if(user_name.value==""){
      document.getElementById("user_name").focus();
      document.querySelector('.user-cnt').classList.add('please-fill-username');
      document.querySelector('.user-cnt').addEventListener("keyup", ()=>{
      setTimeout(()=>{
       document.querySelector('.user-cnt').classList.remove('please-fill-username');
      },100);
      }) 
    }
    else{
      alertMsg.innerHTML="Plaese Enter the password!";
      alertMsg.classList.add("invalid_pass");
      document.getElementById("user_pass").focus();
      document.querySelector('.pass-cnt').classList.add('please-fill-password');
      document.querySelector('.pass-cnt').addEventListener("keyup", ()=>{
       setTimeout(()=>{
        document.querySelector('.pass-cnt').classList.remove('please-fill-password');
       },100);
       })
    }

  }
} 
})




for(let i=0;i<closeIcon.length;i++){
  closeIcon[i].addEventListener("click", () =>{
    toast[i].classList.remove("active");
    setTimeout(()=>{
      progress[i].classList.remove("active");
    },300);
  })
}













