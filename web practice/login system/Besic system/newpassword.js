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
   var pass = document.getElementById('pass').value;
   var confirm_pass = document.getElementById('confirm_pass').value;
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
    if(verifyPassword("pass"))
    {
        document.getElementById('create').disabled = false;
        document.getElementById('create').style.opacity = (1);
        return true;
    }
   }
}


function wrong_pass_alert() {
   if (document.getElementById('pass').value != "" &&
       document.getElementById('confirm_pass').value != "") {
       alert("Your response is submitted");
    text=document.getElementById('message');
    text.innerText="Password change!"
    text.style.color='green';
       
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


     

     

btn = document.querySelector("#create");
btn.addEventListener('click',function updatePass(){
    user_records=JSON.parse(localStorage.getItem("users"))
    var newPass=document.getElementById('confirm_pass').value;
  if(localStorage.getItem('tempdata')!==null)  {
    temp_records=JSON.parse(localStorage.getItem("tempdata"));
    for(var i=0;i<temp_records.length;i++){
       email=temp_records[i]["tempEmail"];
    }
   if((user_records.some((v)=>{return v.userEmail==email}))){
      for(var i=0;i<user_records.length;i++){
        if(user_records[i].userEmail===email){
            user_records[i].userPass=newPass;
        }
      }
   }
    localStorage.setItem("users",JSON.stringify(user_records));
  }
window.localStorage.removeItem('tempdata');
})
    
