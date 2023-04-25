const main_container=document.querySelector('.main-container') ;
const forgot_btn=main_container.querySelector("#forgot-btn");
let alertMsg  =document.querySelector("#massege_tag");
let user_name = document.getElementById("user_name");
const toast=document.querySelector('.toast'),
closeIcon=document.querySelector('.close'),
progress=document.querySelector('.progress');

forgot_btn.addEventListener('click',(e)=>{
   e.preventDefault();
let username=user_name.value;
    if (localStorage.getItem("users") == null) {
        userInfo = [];
    } else {
            userInfo = JSON.parse(localStorage.getItem("users"));
}
const isExistingUser = userInfo.some((user) => user.name === username);
if(username==""){
    document.getElementById("user_name").focus();
    document.querySelector('.user-cnt').classList.add('please-fill-username');
    document.querySelector('.user-cnt').addEventListener("keyup", ()=>{
    setTimeout(()=>{
     document.querySelector('.user-cnt').classList.remove('please-fill-username');
    },100);
    }) 
}
else if(! isExistingUser){
    toast.classList.add("active");
    progress.classList.add("active");
  setTimeout(()=>{
    toast.classList.remove("active");
  },5000);
  setTimeout(()=>{
    progress.classList.remove("active");
  },5300);
 }
 else{
  window.location.href = "reset.html";
 }
})



closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");
    setTimeout(() => {
      progress.classList.remove("active");
    }, 300);
  });


