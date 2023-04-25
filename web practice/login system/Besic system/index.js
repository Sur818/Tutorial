function openSection(tab , sectionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sectionName).style.display = "block";
    tab.currentTarget.className += " active";
  } 
  document.getElementById("defaultOpen").click();
  




  

  var buttons = document.querySelectorAll('.tab button');
  for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function(event) {
        changeHeading(event.target);
      }, false);
   }
  function changeHeading(element) {
    let btnId = element.getAttribute("id");
    console.log(btnId);
  if(btnId=="defaultOpen"){
    document.getElementById("main-heading").innerHTML="Login Form";
  }
  else{
    document.getElementById("main-heading").innerHTML="Signup Form";
  }
     }

  





 function verifyPassword(pass) {  
    var pw = document.getElementById(pass).value;  
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }  
    if(pw.length < 5) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 5 characters";  
       return false;  
    }  
    if(pw.length > 12) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 12 characters";  
       return false;  
    } else {   
       document.getElementById("message").innerHTML = "";  
       return true;
    }  
  }  





  function validate_password() {
    var pass = document.getElementById('signup-pass').value;
    var confirm_pass = document.getElementById('signupconfirm_pass').value;
    if (pass != confirm_pass) {
        document.getElementById('wrong_pass_alert').style.color = 'red';
        document.getElementById('wrong_pass_alert').innerHTML
          = '☒ Use same password';
        document.getElementById('create').disabled = true;
        document.getElementById('create').style.opacity = (0.4);
    } else {
        document.getElementById('wrong_pass_alert').style.color = 'green';
        document.getElementById('wrong_pass_alert').innerHTML =
            '🗹 Password Matched';
        if(verifyPassword("signup-pass")){
          document.getElementById('create').disabled = false;
          document.getElementById('create').style.opacity = (1);
          setTimeout(function(){
            var msg=document.getElementById('wrong_pass_alert');
            //  msg.parentNode.removeChild(msg);
                 msg.innerHTML="";
           },2000);
          return true;
        }
        
    }
 }
 

function wrong_pass_alert() {
   if (document.getElementById('signup-pass').value != "" &&
       document.getElementById('signupconfirm_pass').value != ""&& document.getElementById("signup-email-box").value!= "") {
       alert("Your response is submitted");
       
   } else {
       alert("Please fill all the fields");
   }
}





function showPassword(id)
{  
var passField = document.getElementById(id);
    if(passField.type === "password"){
        passField.type = "text";
    }
    else{
        passField.type="password";
    }
}
var buttons = document.querySelectorAll('span i');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
      buttonsControl(event.target);
    }, false);
 }
 function buttonsControl(btn) {
    btn.classList.toggle('hide-btn');
     }




function removeMsg(){
    var msgbox=document.getElementById("primary-message-box");
    document.getElementById("primary-message-box").style.display = "none";
    document.getElementById("primary-message-box").style.transition = "3s";
}




var tabs=document.querySelectorAll(".tab  button") ;
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function(event) {
    removeNotification(event.target);
  }, false);
}
function removeNotification(btn) {
    if(btn.getAttribute('id')=='signup-btn'){      
      document.getElementById("primary-message-box").style.display = "none";
    } 
    else{
      console.log('hello');
    }
  } 



  var link =document.getElementById('info');
  link.addEventListener('click',()=>{
  var tab =document.getElementById('signup-btn');
  tab.classList.add('active');

  })








 

     