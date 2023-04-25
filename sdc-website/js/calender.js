let data = {
  january: [
    {
      title: "Welcome to Code World(Coding Oriented)",
      date: "23",
      day: "Sunday",
      time: "12:00 pm",
      conductedby: "Third Year",
      conductedfor: "First Year & Second Year",
      description:
        "In this session,learn fundamentals of coding , how and where to start coding , etc will be covered with complete roadmap"
    },
    {
      title: "Learn HTML CSS and JS",
      date: "8",
      day: "Tuesday",
      time: "12:00 pm",
      conductedby: "Third Year",
      conductedfor: "First Year & Second Year",
      description:
        "In this session,learn how to code and design website using HTML , CSS and JavaScript"
    }
  ],

  february: [
    {
      title: "Introduction to C Programming Language",
      date: "3",
      day: "Monday",
      time: "12:00 pm",
      conductedby: "Second Year",
      conductedfor: "First Year",
      description:
        "In this session,learn C programming Language with implementation"
    }
  ],

  march: [
    {
      title: "Introduction to C++ & STL",
      date: "12",
      day: "Tuesday",
      time: "12:00 pm",
      conductedby: "Third Year",
      conductedfor: "Second Year",
      description: "In this session,learn C++ programming language and STL"
    }
  ],

  april: [],

  may: [
    {
      title: "Dynamic web with Javascript & ES6",
      date: "3",
      day: "Sunday",
      time: "11:00 pm",
      conductedby: "Third Year",
      conductedfor: "First Year & Second Year",
      description:
        "After learning basic of HTML & CSS.In this session,learn Dynamic web with Javascript & ES6"
    }
  ],

  june: [
    {
      title: "Introduction the web development with HTML & CSS",
      date: "23",
      day: "Sunday",
      time: "1:00 pm",
      conductedby: "Second Year",
      conductedfor: "First Year",
      description:
        "In this session,learn how to code and design website using HTML & CSS"
    }
  ],

  july: [],

  august: [],

  september: [],

  october: [
    {
      title: "Play with Github Repo",
      date: "23",
      day: "Sunday",
      time: "12:00 pm",
      conductedby: "Third Year",
      conductedfor: "First Year & Second Year",
      description:
        "In this session,learn how to use Github,uploading of projects on Github and many more about open sources"
    }
  ],

  november: [],

  december: []
};

function getEvents() {
  let calender = document.getElementById("calender");

  for (const [month, events] of Object.entries(data)) {
    if (events.length > 0) {
      let monthContainer = document.createElement("div");
      monthContainer.setAttribute("class", "month-container");

      // month name
      let monthName = document.createElement("div");
      monthName.setAttribute("class", "month-name");
      monthName.appendChild(document.createTextNode(month));
      monthContainer.appendChild(monthName);

      for (let event of events) {
        setEvents(monthContainer, month, event);
      }
      calender.append(monthContainer);
    }
  }
}

function setEvents(monthCnt, month, event) {
  // event container
  let eventContainer = document.createElement("div");
  eventContainer.setAttribute("class", "event-container");

  // date container
  let dateContainer = document.createElement("div");
  dateContainer.setAttribute("class", "date-container");

  // event date
  let eventDate = document.createElement("div");
  eventDate.setAttribute("class", "event-date");
  eventDate.appendChild(document.createTextNode(event.date));

  // event day
  let eventDay = document.createElement("div");
  eventDay.setAttribute("class", "day-container");
  eventDay.appendChild(document.createTextNode(event.day));

  // pack the date and day
  dateContainer.append(eventDate, eventDay);

  //event content container
  let eventContentCnt = document.createElement("div");
  eventContentCnt.setAttribute("class", "event-content-container");

  // event title
  let eventTitle = document.createElement("div");
  eventTitle.setAttribute("class", "event-title");
  eventTitle.appendChild(document.createTextNode(event.title));

  // event description
  let eventDescp = document.createElement("div");
  eventDescp.setAttribute("class", "event-description");
  eventDescp.appendChild(document.createTextNode(event.description));

  // event time
  let eventTime = document.createElement("div");
  eventTime.setAttribute("class", "event-time");
  eventTime.appendChild(document.createTextNode(event.time));

  // pack the title,description, and time
  eventContentCnt.append(eventTitle, eventDescp, eventTime);

  // pack the containers in side the event container
  eventContainer.append(dateContainer, eventContentCnt);

  monthCnt.append(eventContainer);
}

// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const d = new Date();
// const currentMonth = monthNames[d.getMonth()].toLowerCase();
getEvents();
