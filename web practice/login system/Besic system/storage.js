let signup_form = document.getElementById('signupForm')
 if (localStorage.getItem('useremail') && localStorage.getItem('userpass')){
  document.getElementById('signup-email-box').value =localStorage.getItem("useremail")
  document.getElementById('signupconfirm_pass').value =localStorage.getItem("userpass")
 }

signup_form.addEventListener('submit' , (e) =>{
e.preventDefault();
let email,pass;
email=document.getElementById('signup-email-box').value;
pass=document.getElementById('signupconfirm_pass').value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
if(user_records.some((v)=>{return v.userEmail==email})){
  alert('user allready registerd!');
}
else{
  user_records.push({
    "userEmail":email,
    "userPass":pass
    })
    localStorage.setItem("users",JSON.stringify(user_records));
    alert("your details are saved in localstorage");
    setTimeout(window.location.href="RegistrationDone.html",1500);
}

 } )




 

let login_form= document.getElementById('loginForm')
 login_form.addEventListener('submit' , (e) =>{
  e.preventDefault();
  let email,pass;
  email=document.getElementById('login-email-box').value;
  pass=document.getElementById('login-pass').value;

  let user_records=new Array();
  user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
  if(user_records.some((v)=>{return v.userEmail==email  && v.userPass==pass})){
    prime_msg=document.getElementById("primary-message");
    document.getElementById("primary-message-box").style.display = "block";
    document.getElementById("primary-message").innerHTML="Login succesfull !";
    prime_msg.classList.add("green");
    document.getElementsByClassName('fa-xmark')[0].style.display="none";
    setTimeout("window.location.href='loginDone.html';",1500);
  }
  else if(user_records.some((v)=>{return v.userEmail==email  && v.userPass!=pass})){
    prime_msg=document.getElementById("primary-message");
    document.getElementById("primary-message-box").style.display = "block";
    document.getElementById("primary-message").innerHTML="Please enter correct Password !"
    prime_msg.classList.add("red")
    }
  else if(user_records.some((v)=>{return v.userEmail!=email  && v.userPass!=pass})){
  prime_msg=document.getElementById("primary-message");
  document.getElementById("primary-message-box").style.display = "block";
  document.getElementById("primary-message").innerHTML="Invailid email and password !"
  prime_msg.classList.add("red")
  }
  else{
   alert("login failed !");
  }
   } )



