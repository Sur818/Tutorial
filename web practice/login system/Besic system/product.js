let btn=document.getElementById('product-btn');
function unlockProduct(){
var inputValue=document.querySelector(".input-box").value;
console.log(inputValue);
  var overlay=document.querySelector('.overlay');
    user_records=JSON.parse(localStorage.getItem("users"));

    if(user_records.some((v)=>{return v.productKey==inputValue})){
      setTimeout(callBack_func,1000)
      function callBack_func(){
        overlay.classList.add('showProduct');
      }
       document.querySelector(".overlay .text").innerHTML="Unlock!";
       document.querySelector(".overlay .text").style.color="green";
    }
    else{
      document.querySelector(".overlay .text").innerHTML="Locked!";
      document.querySelector(".overlay .text").style.color="red";
      document.getElementById('message').innerHTML="**please enter correct product key!";
      document.getElementById('message').setAttribute('class', 'shownotification');
      setTimeout(callBack_func,1000)
        function callBack_func(){
          document.getElementById('message').innerHTML="";
        }
    }

}



function validateKey(){
  user_records=JSON.parse(localStorage.getItem("users"));
  let inputValue=document.querySelector(".input-box").value;
    if(user_records.some((v)=>{return v.productKey!=inputValue})){
      btn=document.getElementById('validate_btn');
      btn.classList.remove('correct-btn');
      btn.addEventListener("click", function(event) {
        removeKey(event.target);
      }, false);
       }
       else{
        btn.classList.add('correct-btn');
       }
       
    } 
  function  removeKey(btn){
    var inputElement=document.getElementsByTagName('input')[0];
    var inputValue=document.querySelector(".input-box").value;
    if(inputValue!=''){
      inputElement.value="";
      console.log("hello");
    }

  }






  if(window.innerWidth<=480){
var heading= document.querySelector('.section-heading');
  if(heading.classList.contains("typewriter")){
heading.classList.remove("typewriter");
console.log('hello');
  }

}
  


