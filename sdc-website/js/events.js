
let recentEvents = [
  {
    eventName: "Session on Machine Learning and Data Science",
    eventDesp: "It had been conducted by Asia's Youngest Data Scientist Master. Siddharth Pilli (Data Scientist at Infinity Learn and Research Engineer at IIIT Hyderabad).",
    eventImage: "/images/Event_img/ml_siddhart.png"
  },
  {
    eventName: "Workshop on HTML and CSS",
    eventDesp: "SDC had organized many workshops & bootcamps to enhace the technical knowledge of students from the internship & placement point of view.",
    eventImage: "/images/Event_img/html_css_workshop_img.png"
  },
  {
    eventName: "Workshop on JavaScript & ES6",
    eventDesp: "SDC is thrilled to announce that we successfully conducted another 6 days workshop on JavaScript & ES6 This Workship is conducted by Pre-final year SDC Members for 1st year and 2nd year students",
    eventImage: "/images/Event_img/js_img.png"
  },
  {
    eventName: "Bootcamp on C programming",
    eventDesp: "Student Developer Club ( SDC ) a technical society of REC Banda is organized 6 days Bootcamp on C programming. This Workship is conducted by Pre-final year SDC Members for 1st year and 2nd year students",
    eventImage: "/images/Event_img/c_img.png"
  },
  {
    eventName: "How to start coding from scratch",
    eventDesp: "SDC had organized a session on How to Start Competitive Coding from Scratch. This Workship is conducted by Pre-final year SDC Members for 1st year and 2nd year students",
    eventImage: "/images/Event_img/orientation_img.png"
  }
]

let upcomingEvents = [
  {
    eventName: "Hacktech",
    eventDesp: "It had been conducted by Asia's Youngest Data Scientist Master. Siddharth Pilli (Data Scientist at Infinity Learn and Research Engineer at IIIT Hyderabad).",
    eventImage: "/images/Event_img/ml_siddhart.png"
  }
]


let mainContainer = document.getElementById("event-container");

function addEvents(event)
{
  let sessionInfo = document.createElement("div");
  sessionInfo.setAttribute("class", "sessions-info");

  let sessionHeading = document.createElement("h2");
  sessionHeading.appendChild(document.createTextNode(event.eventName));

  let sessionLine = document.createElement("div");
  sessionLine.setAttribute("class", "session-line");

  let sessionDescription = document.createElement("p");
  sessionDescription.appendChild(document.createTextNode(event.eventDesp));

  let image = document.createElement("img");
  image.setAttribute("src", event.eventImage);

  sessionInfo.append(sessionHeading, sessionLine, sessionDescription, image);
  mainContainer.appendChild(sessionInfo);
}

function showRecentEvents(id){
  mainContainer.innerHTML = "";
  setClass(id);
  for(let i=0; i<recentEvents.length; i++) {
    addEvents(recentEvents[i]);
  }
}

function showUpcomingEvents(id){
  mainContainer.innerHTML = "";
  setClass(id);
  for(let i=0; i<upcomingEvents.length; i++) {
    addEvents(upcomingEvents[i]);
  }
}

let lastId = 'recent-event-btn';
function setClass(id)
{
  document.getElementById(lastId).classList.remove('open-event');
  document.getElementById(id).classList.add('open-event');
  lastId = id;
}

showRecentEvents(lastId);
