const main = document.querySelector(".main"),
  primeryMsg = document.querySelector(".primery-msg"),
  RegUser = document.querySelector("#RegUser-name");
const RegUserId = document.querySelector("#RegUser-id");
let RegUser_name;
let RegUser_email;
let RegUser_id;

window.onload = FetchEmail();
function FetchEmail() {
  if (localStorage.getItem("users") == null) {
    userInfo = [];
  } else {
    userInfo = JSON.parse(localStorage.getItem("users"));
  }
  RegUser_name = userInfo[userInfo.length - 1].name;
  RegUser_email = userInfo[userInfo.length - 1].email;
  RegUser_id = userInfo[userInfo.length - 1].id;
  RegUser.innerHTML = RegUser_name;
  RegUserId.innerHTML = RegUser_id;
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
const emailSubject = "Regarding User Id";
const emailMessage = "<p>Hello Dear User"+RegUser_name+" Your User Id is</p>"+RegUser_id;
sendEmail(recipientEmail, emailSubject, emailMessage);
