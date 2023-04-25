const main_container = document.querySelector(".main-container");
const signup_btn = main_container.querySelector("#signup-btn");
let isVerified = false;
let isValidate = false;
let isvalidEmail =false;
var userInfo;



if (localStorage.getItem("users") == null) {
  userInfo = [];
} else {
  userInfo = JSON.parse(localStorage.getItem("users"));
}
let pswrd = document.getElementById("user_pass");
let cnfrmPass=document.getElementById("userconfirm_pass");
let toggleBtn = document.querySelectorAll(".toggleBtn");
let alertMsg = document.querySelector("#massege_tag");
let pass_msg = document.getElementById("confirmPass_tag");
let emailMsg=document.getElementById("emailmsg_tag");
let userEmail=document.getElementById("user_email");
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
      signup_btn.classList.remove("disable-btn");
      alertMsg.classList.remove("invalid_pass");
      alertMsg.innerHTML = "valid password";
      alertMsg.classList.add("valid_pass");
      isValidate=true;
      setTimeout(()=>{
        alertMsg.innerHTML = "";
        alertMsg.classList.remove("valid_pass");
      },500);
      return true;
    } else {
      if(cnfrmPass.value==""){
        document.getElementById("userconfirm_pass").disabled = true;
      }
      signup_btn.classList.add("disable-btn");
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
      isValidate=true;
      return false;
    }
  } else {
    alertMsg.innerHTML = "please fill the password field";
    alertMsg.classList.add("invalid_pass");
    signup_btn.classList.add("disable-btn");
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
    isVerified = false;
    return false;
  } else if(password === confirmPassword && confirmPassword) {
    isVerified = true;
    pass_msg.classList.remove("incorrect_pass");
    pass_msg.innerHTML = "password match!";
    pass_msg.classList.add("correct_pass");
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

 
function validationEmail() {
  let email = document.getElementById('user_email').value;
  let text = document.getElementById('emailmsg_tag');
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.match(pattern)) {
    text.classList.add('valid-email');
    isvalidEmail =true;
    if(text.classList.contains('invalid-email')){
      text.classList.remove('invalid-email');
    }
    text.innerHTML = "Your Email Address is valid";
    setTimeout(()=>{
      text.innerHTML="";
      text.classList.remove('valid-email');
    },1000);
  } else {
    text.classList.add('invalid-email');
    text.innerHTML = "Please Enter Valid Email Address"
    isvalidEmail =false;
  }
  if (email == '') {
    text.classList.remove('valid-email')
    text.classList.remove('invalid-email')
    text.innerHTML = ""
  }
}




const toast_1 = document.querySelector(".toast-1"),
closeIcon_1 = document.querySelector(".toast-1 .close"),
progress_1 = document.querySelector(".toast-1 .progress");

const toast_2 = document.querySelector(".toast-2"),
closeIcon_2 = document.querySelector(".toast-2 .close"),
progress_2 = document.querySelector(".toast-2 .progress");


signup_btn.addEventListener("click", (event) => {
  event.preventDefault();
  var password = document.getElementById("user_pass").value;
  var username = document.getElementById("user_name").value;
  var confirmPassword =document.getElementById("userconfirm_pass").value;
  var useremail= userEmail.value;
  const isExistingUser = userInfo.some(
    (user) => user.name === username && user.password === password 
  );
  console.log(password);
  if(username=="" || password=="" || confirmPassword=="" || useremail==""){
    if((username=="" && password=="" && confirmPassword=="" && useremail=="") || username=="" ){
      document.getElementById("user_name").focus();
     document.querySelector('.user-cnt').classList.add('please-fill-username');
     document.querySelector('.user-cnt').addEventListener("keyup", ()=>{
     setTimeout(()=>{
      document.querySelector('.user-cnt').classList.remove('please-fill-username');
     },1000);
     })
    }
    else if(useremail==""){
      emailMsg.innerHTML="Plaese Enter the email!";
      emailMsg.classList.add("invalid-email");
      document.getElementById("user_email").focus();
      document.querySelector('.email-cnt').classList.add('please-fill-email');
      document.querySelector('.email-cnt').addEventListener("keyup", ()=>{
       setTimeout(()=>{
        document.querySelector('.email-cnt').classList.remove('please-fill-email');
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
  else if(isvalidEmail==false){
    emailMsg.innerHTML="Plaese Enter the valid email!";
      emailMsg.classList.add("invalid-email");
      document.getElementById("user_email").focus();
      document.querySelector('.email-cnt').classList.add('please-fill-email');
      document.querySelector('.email-cnt').addEventListener("keyup", ()=>{
       setTimeout(()=>{
        document.querySelector('.email-cnt').classList.remove('please-fill-email');
       },1000);
       })
  }
  else{ 
  if (isVerified == true && !isExistingUser)
   {
    var min=5;
    var max=10;
     var length= Math.floor(Math.random() * ((max-min)+1) + min);
    let getid=makeid(length);
    if (!isExistingUser ) {
      var user = {
        name: username,
        password: password,
        email:useremail,
        id: getid,
      };
      userInfo.push(user);
      localStorage.setItem("users", JSON.stringify(userInfo));
    }
    toast_1.classList.add("active");
    progress_1.classList.add("active");
    setTimeout(() => {
      toast_1.classList.remove("active");
    },5000);
    setTimeout(() => {
      progress_1.classList.remove("active");
      show_loadingAnimation();
    }, 5300);

  } else if (isVerified == true && isExistingUser) {
    toast_2.classList.add("active");
    progress_2.classList.add("active");
    setTimeout(() => {
      toast_2.classList.remove("active");
    }, 5000);

    setTimeout(() => {
      progress_2.classList.remove("active");
    }, 5300);
  }
}
});

 

closeIcon_1.addEventListener("click", () => {
  toast_1.classList.remove("active");
  setTimeout(() => {
    progress_1.classList.remove("active");
    window.location.href = "index.html";
  }, 300);
});

closeIcon_2.addEventListener("click", () => {
  toast_2.classList.remove("active");
  setTimeout(() => {
    progress_2.classList.remove("active");
  }, 300);
});
 
function show_loadingAnimation(){
  main_container.style.display = "none";
  document.getElementById('loadingGif').style.display = "block";
  setTimeout(function() {
    document.getElementById('loadingGif').style.display = "none";
    window.location.href = "Email.html";
  },2000);
}

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}