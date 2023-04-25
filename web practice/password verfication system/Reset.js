const main_container = document.querySelector(".main-container");
const reset_btn = main_container.querySelector("#reset-btn");
let alertMsg  =document.querySelector("#massege_tag");
const toast=document.querySelectorAll('.toast'),
closeIcon=document.querySelectorAll('.close'),
progress=document.querySelectorAll('.progress');
let pswrd = document.getElementById("user_pass");
let pass_msg = document.getElementById("confirmPass_tag");
let cnfrmPass=document.getElementById("userconfirm_pass");
let toggleBtn = document.querySelectorAll(".toggleBtn");
let user_id=document.getElementById("user_id");
let isVerified=false;
let isValidate=false;



toggleBtn.forEach(el => {
    el.addEventListener('click', e => {
      let password = el.closest('.input-container').querySelector('.input-box');
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
  if(e.target.classList.contains("visibility-off")){
    e.target.parentNode.innerHTML=`<span class="material-symbols-outlined visibility-on">
    visibility
    </span>`;
  }
  else{
    e.target.parentNode.innerHTML=`<span class="material-symbols-outlined  visibility-off">
    visibility_off
    </span>`;
  }
     
    });
  });
  

function passValidation() {
  if (pswrd.value !== "") {
      let lower = new RegExp("(?=.*[a-z])");
      let upper = new RegExp("(?=.*[A-Z])");
      let number = new RegExp("(?=.*[0-9])");
      let special = new RegExp("(?=.*[!@#$%^&*])");
      const length = new RegExp("(?=.{8,})");
      if (lower.test(pswrd.value) && upper.test(pswrd.value) && number.test(pswrd.value) && special.test(pswrd.value) && length.test(pswrd.value)) {
        document.getElementById("userconfirm_pass").disabled = false;
        reset_btn.classList.remove("disable-btn");
        alertMsg.classList.remove("invalid_pass");
        alertMsg.innerHTML = "valid password";
        alertMsg.classList.add("valid_pass");
        setTimeout(()=>{
          alertMsg.innerHTML = "";
          alertMsg.classList.remove("valid_pass");
        },500);
        isValidate=true;
        return true;
      } else {
        if(cnfrmPass.value==""){
          document.getElementById("userconfirm_pass").disabled = true;
        }
        reset_btn.classList.add("disable-btn");
        alertMsg.classList.remove("valid_pass");
        if (!lower.test(pswrd.value)) {
          alertMsg.classList.add("invalid_pass");
          alertMsg.innerHTML = "atleast one charecter must be in lower case";
        } else if (!upper.test(pswrd.value)) {
          alertMsg.classList.add("invalid_pass");
          alertMsg.innerHTML = "atleast one charecter must be in upper case";
        } else if (!number.test(pswrd.value)) {
          alertMsg.classList.add("invalid_pass");
          alertMsg.innerHTML = "password contain atleast one numeric charecter";
        } else if (!special.test(pswrd.value)) {
          alertMsg.classList.add("invalid_pass");
          alertMsg.innerHTML = "password contain atleast spacial charecter";
        } else if (!length.test(pswrd.value)) {
          alertMsg.classList.add("invalid_pass");
          alertMsg.innerHTML = "password contain atleast 8 charecters";
        }
        return false;
      }
  } else {
      alertMsg.innerHTML = "please fill the password field";
      alertMsg.classList.add("invalid_pass");
      reset_btn.classList.add("disable-btn");
      return false;
    }
  }
  
   
  
  function verify_Pass() {
    var pass_msg = document.getElementById("confirmPass_tag");
    var password = document.getElementById("user_pass").value;
    var confirmPassword = document.getElementById("userconfirm_pass").value;
    if (password != confirmPassword && confirmPassword) {
      pass_msg.innerHTML = "password deos not match!";
      if(pass_msg.classList.contains("correct_pass")){
        pass_msg.classList.remove("correct_pass");
      }
      pass_msg.classList.add("incorrect_pass");
      return false;
    } else if(password === confirmPassword && confirmPassword) {
      pass_msg.classList.remove("incorrect_pass");
      pass_msg.innerHTML = "password match!";
      pass_msg.classList.add("correct_pass");
      isVerified=true;
      setTimeout(() => {
        pass_msg.innerHTML = "";
        pass_msg.classList.remove("correct_pass");
      },1000);
       return true;
    }
    else if(!confirmPassword)
    {
      pass_msg.classList.remove('correct_pass');
  }
  else{
    pass_msg.innerHTML = "Enter confirm Password please!";
    pass_msg.classList.add("incorrect_pass");
  }
  }

  
reset_btn.addEventListener('click',(e)=>{
  e.preventDefault();
  var password = pswrd.value;
  var userid=user_id.value;
  var confirmPassword = cnfrmPass.value;
  var userInfo = JSON.parse(localStorage.getItem("users")); 
  const isExistingUser = userInfo.some(
    (user) => user.id === userid
  );
  if(userid=="" || password=="" || confirmPassword==""){
    if((userid=="" && password=="" && confirmPassword=="") || userid=="" ){
      document.getElementById("user_id").focus();
     document.querySelector('.user-cnt').classList.add('please-fill-username');
     document.querySelector('.user-cnt').addEventListener("keyup", ()=>{
     setTimeout(()=>{
      document.querySelector('.user-cnt').classList.remove('please-fill-username');
     },1000);
     })
    }
   else if(password==""){
      alertMsg.innerHTML="Plaese Enter the password!";
      alertMsg.classList.add("invalid_pass");
      document.getElementById("user_pass").focus();
      document.querySelector('.pass-cnt').classList.add('please-fill-password');
      document.querySelector('.pass-cnt').addEventListener("keyup", ()=>{
       setTimeout(()=>{
        document.querySelector('.pass-cnt').classList.remove('please-fill-password');
       },1000);
       })
    }
   else if(confirmPassword==""){
      pass_msg.innerHTML="Plaese Enter the confirm password!";
      pass_msg.classList.add("incorrect_pass");
      document.getElementById("userconfirm_pass").focus();
      document.querySelector('.confirmPass-cnt').classList.add('please-fill-confirmpassword');
      document.querySelector('.confirmPass-cnt').addEventListener("keyup", ()=>{
        setTimeout(()=>{
          document.querySelector('.confirmPass-cnt').classList.remove('please-fill-confirmpassword');
        },1000);
       })
    }
  } 
  else if(isVerified == true && isExistingUser){
     var user = {
        id: userid,
        newpassword: confirmPassword,
      };
      localStorage.setItem("update_data", JSON.stringify(user));
     toast[0].classList.add("active");
      progress[0].classList.add("active");
    setTimeout(()=>{
      toast[0].classList.remove("active");
    },5000);
    setTimeout(()=>{
      progress[0].classList.remove("active");
    },5300);
    setTimeout(()=>{
      show_loadingAnimation();
      setTimeout(()=>{
        window.location.href="Otp.html";
        },1000);
    },5600);
  }
   else if(isValidate==true && isVerified == false ){ 
    
    pass_msg.innerHTML="Plaese Enter the correct password!";
    pass_msg.classList.add("incorrect_pass");
    document.getElementById("userconfirm_pass").focus();
    document.querySelector('.confirmPass-cnt').classList.add('please-fill-confirmpassword');
    document.querySelector('.confirmPass-cnt').addEventListener("keyup", ()=>{
      setTimeout(()=>{
        document.querySelector('.confirmPass-cnt').classList.remove('please-fill-confirmpassword');
      },1000);
     })

  }
  else{
    toast[1].classList.add("active");
      progress[1].classList.add("active");
    setTimeout(()=>{
      toast[1].classList.remove("active");
    },5000);
    setTimeout(()=>{
      progress[1].classList.remove("active");
    },5300);
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


function show_loadingAnimation(){
  main_container.style.display = "none";
  document.getElementById('loadingGif').style.display = "block";
  setTimeout(function() {
    document.getElementById('loadingGif').style.display = "none";
    window.location.href = "Password change.html";
  },2000);
}
  
   
  
   