const inputs = document.querySelectorAll("input"),
main_container = document.querySelector(".container");
button = document.querySelector("button");
let toast = document.querySelector('.toast-2');
let progress = document.querySelector('.toast-2 .progress');
let closeIcon =document.querySelector('.toast-2 .close');
let RegUser_email;
let RegUser_name;
let RegUser_id;


inputs.forEach((input, index1)=>{
   input.addEventListener('keyup',(e)=>{
    const currentInput = input,
    nextInput = input.nextElementSibling,
    prevInput = input.previousElementSibling;
    if(currentInput.value.length>1){
        currentInput.value='';
        return;
    }
    if(nextInput && nextInput.hasAttribute("disabled") &&   currentInput.value !==''){
     nextInput.removeAttribute("disabled");
     nextInput.focus();
    }
    if(e.key === "Backspace")
    {
        inputs.forEach((input,index2) =>{
          if(index1<=index2 && prevInput){
              input.setAttribute("disabled",true);
              currentInput.value='';
              prevInput.focus();
            
          }
        })
    }
    if(! inputs[3].disabled && inputs[3].value !==""){
        button.classList.add("active");
        return;
    }
    button.classList.remove("active");
   });

});

window.addEventListener("load",()=> inputs[0].focus())

function generateOTP(){
    var digits='0123456789';
    let OTP="";
    for(i=0;i<4;i++){
        OTP+=digits[Math.floor(Math.random()*10)];
    }
    return OTP;

}


let OTP=generateOTP();
console.log(OTP);
button.addEventListener("click",(e)=>{
 e.preventDefault();
 var userOTP='';
 inputs.forEach((input, index1)=>{
    userOTP+=input.value;
 })
 if(OTP == parseInt(userOTP)){
  show_loadingAnimation();
    setTimeout(()=>{
        window.location.href = "Password change.html";
    },5000);
 }else{
toast.classList.add("active");
  progress.classList.add("active");
setTimeout(()=>{
  toast.classList.remove("active");
},5000);
setTimeout(()=>{
  progress.classList.remove("active");
  alert("Enter otp again");
  location.reload();
},5300);
 }

})


closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");
  setTimeout(() => {
    progress.classList.remove("active");
    window.location.href = "index.html";
  }, 300);
});

function show_loadingAnimation(){
    main_container.style.display = "none";
    document.getElementById('loadingGif').style.display = "block";
    setTimeout(function() {
      document.getElementById('loadingGif').style.display = "none";
      window.location.href = "Password change.html";
    },2000);
  }


const fromEmail = '1907340130058@recbanda.ac.in';
const apiKey = '1E1D43A7D27D9D876F12454F9616AB1D2D760182060BC3BA6BCB15F4E8C3E2091874434395519CEC8A3CAA532237B2B3';


const sendEmail = (to, subject, message) => {
    const xhr = new XMLHttpRequest();
    const url = 'https://api.elasticemail.com/v2/email/send';
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            alert('Email sent successfully!');
          } catch (e) {
            console.error(e);
            alert('Error parsing server response!');
          }
        } else {
          console.error(xhr.status, xhr.statusText);
          alert('Error sending email!');
        }
      }
    };
    xhr.send(`apikey=${apiKey}&from=${fromEmail}&to=${to}&subject=${subject}&bodyHtml=${message}`);
  };
  
const recipientEmail = RegUser_email;
const emailSubject = "Regarding otp";
const emailMessage = "<p>Hello Dear User"+RegUser_name+" Your User otp is</p>"+OTP;
sendEmail(recipientEmail, emailSubject, emailMessage);


