const email = document.querySelector('input[name=email]');
console.log(email);
const button = document.querySelector('#btn');
const text =  document.querySelector('#message');
const validateEmail= (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}
email.addEventListener('keyup',()=>{
  btn=document.getElementById('validate_btn');
    if(validateEmail(email.value)){
       btn.classList.add('correct-btn');
    }
    else{
      btn.classList.remove('correct-btn');
    } 
},true)




user_records=JSON.parse(localStorage.getItem("users"));
function verifyEmail(){
    let inputValue=document.querySelector(".input-box").value;
    if(user_records.some((v)=>{return v.userEmail==inputValue})){
      text.innerText="Valid Email";
      text.style.color='green';
      }  
      else{
        text.innerText="Invalid Email";
        text.style.color='red';
      }
    } 





    btn=document.getElementById('validate_btn');
    btn.addEventListener("click", function(event) {
      if(!validateEmail(email.value)){
        removeKey(event.target); 
      }
    }, false);

    function  removeKey(btn){
      var inputElement=document.getElementsByTagName('input')[0];
      var inputValue=document.querySelector(".input-box").value;
      if(inputValue!=''){
        inputElement.value="";
        console.log("hello");
      }
    }
  


function createPassword(e){
  let inputValue=document.querySelector(".input-box").value;
  if(validateEmail(inputValue) && user_records.some((v)=>{return v.userEmail==inputValue})){
    window.location.href='newpassword.html';
    console.log('working.....');
    tempgetData();
  }
  else{
    text.innerText="Please Enter Valid Email!";
    text.style.color='red';
    e.preventDefault();
  }
  
}



function tempgetData(){
  let temp_records = new Array();
    temp_records=JSON.parse(localStorage.getItem("tempdata"))?JSON.parse(localStorage.getItem("users")):[];
if(user_records.some((v)=>{return v.userEmail==email.value}))
{
    temp_records.push({
        "tempEmail":email.value
        })
        localStorage.setItem("tempdata",JSON.stringify(temp_records)); 
}


}



