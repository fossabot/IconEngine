// Search section
const form = document.querySelector("form"),
  searchBox = document.querySelector("#search"),
  filters = form.querySelectorAll(".filters button"),
  result = document.querySelector(".result"),
  noResult = document.querySelector(".no_result"),
  loading = document.querySelector(".loading");
let iconsList = document.querySelector(".result .icons_list"),
  iconsNumberElement = document.querySelector(".icons-number"),
  filter = 0,
  icons = [],
  iconsNumbers,
  searchBoxY = searchBox.getBoundingClientRect().top;

//Making form & reult section hide for loading
form.classList.toggle("hide");
result.classList.toggle("hide");

//This is an array of objects that contains all icons in this site
//Every object have 3 property: tag, code, type
icons = [
  {
    tag: "Adjustments",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path d="M12 6V4M12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10M12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10M6 18C7.10457 18 8 17.1046 8 16C8 14.8954 7.10457 14 6 14M6 18C4.89543 18 4 17.1046 4 16C4 14.8954 4.89543 14 6 14M6 18V20M6 14V4M12 10V20M18 18C19.1046 18 20 17.1046 20 16C20 14.8954 19.1046 14 18 14M18 18C16.8954 18 16 17.1046 16 16C16 14.8954 16.8954 14 18 14M18 18V20M18 14V4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    type: 1,
  },
  {
    tag: "Annonation",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>',
    type: 1,
  },
  {
    tag: "Annonation S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Arrow circle down",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/></svg>',
    type: 1,
  },
  {
    tag: "Arrow circle down S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Arrow circle left",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Arrow circle left S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Arrow circle right",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Arrow circle right S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Arrow circle up",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"/></svg>',
    type: 1,
  },
  {
    tag: "Arrow circle up S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Arrow down",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>',
    type: 1,
  },
  {
    tag: "Arrow left",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>',
    type: 1,
  },
  {
    tag: "Arrow right",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>',
    type: 1,
  },
  {
    tag: "Arrow up",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>',
    type: 1,
  },
  {
    tag: "Arrows expand",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>',
    type: 1,
  },
  {
    tag: "At symbol",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/></svg>',
    type: 1,
  },
  {
    tag: "Backspace",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"/></svg>',
    type: 1,
  },
  {
    tag: "Backspace S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Badge S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M15.8,6.38c-0.23-1.15-0.79-2.2-1.62-3.03c-0.83-0.83-1.88-1.39-3.03-1.62C10,1.5,8.81,1.62,7.73,2.07s-2,1.21-2.65,2.18c-0.65,0.97-1,2.12-1,3.29c0,1.57,0.62,3.07,1.73,4.18s2.61,1.73,4.18,1.73c1.17,0,2.31-0.35,3.29-1c0.97-0.65,1.73-1.57,2.18-2.65C15.91,8.71,16.02,7.52,15.8,6.38z M11.62,10.03L10,9.18l-1.63,0.85l0.31-1.81L7.37,6.94l1.82-0.26L10,5.03l0.81,1.65l1.82,0.26l-1.31,1.28L11.62,10.03z"/><path fill="#058181aa" d="M17.46,15.18l-2.87-4.98c-0.08-0.14-0.18-0.25-0.31-0.34C14.15,9.78,14,9.73,13.85,9.71c-0.15-0.02-0.31,0-0.46,0.06c-0.14,0.06-0.27,0.15-0.38,0.26c-0.36,0.45-0.82,0.81-1.35,1.06c-0.52,0.25-1.09,0.38-1.67,0.38c-0.58,0-1.15-0.13-1.67-0.37c-0.52-0.25-0.98-0.61-1.35-1.05C6.88,9.92,6.75,9.83,6.6,9.77C6.46,9.72,6.3,9.7,6.15,9.71C6,9.73,5.85,9.79,5.72,9.87c-0.13,0.09-0.24,0.2-0.31,0.34l-2.87,4.98c-0.04,0.07-0.06,0.15-0.06,0.24c0,0.06,0.01,0.13,0.03,0.19c0.02,0.06,0.06,0.12,0.1,0.16c0.04,0.05,0.1,0.08,0.16,0.11c0.06,0.03,0.12,0.04,0.19,0.04l2.55,0.04l1.3,2.18c0.05,0.07,0.11,0.13,0.18,0.18c0.12,0.06,0.25,0.08,0.38,0.04c0.13-0.03,0.23-0.12,0.3-0.23L10,14.08l2.34,4.05c0.07,0.11,0.18,0.19,0.3,0.23c0.13,0.03,0.26,0.02,0.38-0.04c0.07-0.05,0.13-0.11,0.18-0.18l1.3-2.18l2.55-0.04c0.06,0,0.13-0.01,0.19-0.04c0.06-0.03,0.11-0.06,0.16-0.11c0.04-0.05,0.08-0.1,0.1-0.16c0.02-0.06,0.03-0.12,0.03-0.19C17.52,15.34,17.5,15.26,17.46,15.18z"/></svg>',
    type: 2,
  },
  {
    tag: "Badge Check",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>',
    type: 1,
  },
  {
    tag: "Badge Check S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Beaker",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>',
    type: 1,
  },
  {
    tag: "Beaker S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Ban",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>',
    type: 1,
  },
  {
    tag: "Bell",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',
    type: 1,
  },
  {
    tag: "Bell S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/></svg>',
    type: 2,
  },
  {
    tag: "Book",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>',
    type: 1,
  },
  {
    tag: "Bookmark",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>',
    type: 1,
  },
  {
    tag: "Bookmark S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/></svg>',
    type: 2,
  },
  {
    tag: "Birthday",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"/></svg>',
    type: 1,
  },
  {
    tag: "Birthday S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Briefcase",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Briefcase S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/></svg>',
    type: 2,
  },
  {
    tag: "Calculator",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Calculator S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Calendar",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.45,4.02h15.1c1.19,0,2.16,0.89,2.16,1.99v13.96c0,1.1-0.97,1.99-2.16,1.99H4.45c-1.19,0-2.16-0.89-2.16-1.99V6.02C2.29,4.92,3.26,4.02,4.45,4.02z"/><line stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" x1="16.31" y1="2.03" x2="16.31" y2="6.02"/><line stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" x1="7.69" y1="2.03" x2="7.69" y2="6.02"/><line stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" x1="2.29" y1="10.01" x2="21.71" y2="10.01"/><path fill="#ffffff" stroke="none" d="M6.95,15h-1c-0.55,0-1-0.45-1-1v-1c0-0.55,0.45-1,1-1h1c0.55,0,1,0.45,1,1v1C7.96,14.55,7.51,15,6.95,15z"/><path fill="#ffffff" stroke="none" d="M18.04,15h-1c-0.55,0-1-0.45-1-1v-1c0-0.55,0.45-1,1-1h1c0.55,0,1,0.45,1,1v1C19.04,14.55,18.6,15,18.04,15z"/><path fill="#ffffff" stroke="none" d="M12.5,15h-1c-0.55,0-1-0.45-1-1v-1c0-0.55,0.45-1,1-1h1c0.55,0,1,0.45,1,1v1C13.5,14.55,13.05,15,12.5,15z"/><path fill="#ffffff" stroke="none" d="M6.95,19.65h-1c-0.55,0-1-0.45-1-1v-1c0-0.55,0.45-1,1-1h1c0.55,0,1,0.45,1,1v1C7.96,19.2,7.51,19.65,6.95,19.65z"/><path fill="#ffffff" stroke="none" d="M18.04,19.65h-1c-0.55,0-1-0.45-1-1v-1c0-0.55,0.45-1,1-1h1c0.55,0,1,0.45,1,1v1C19.04,19.2,18.6,19.65,18.04,19.65z"/><path fill="#ffffff" stroke="none" d="M12.5,19.65h-1c-0.55,0-1-0.45-1-1v-1c0-0.55,0.45-1,1-1h1c0.55,0,1,0.45,1,1v1C13.5,19.2,13.05,19.65,12.5,19.65z"/></svg>',
    type: 1,
  },
  {
    tag: "Calendar S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path class="st0" d="M16.62,3.51h-1.8V1.76c0-0.22-0.2-0.41-0.45-0.41h-1.5c-0.25,0-0.45,0.18-0.45,0.41v1.76H7.59V1.76c0-0.22-0.2-0.41-0.45-0.41h-1.5c-0.25,0-0.45,0.18-0.45,0.41v1.76h-1.8c-1,0-1.8,0.73-1.8,1.62v1.22c0,0.22,0.2,0.41,0.45,0.41h15.94c0.25,0,0.45-0.18,0.45-0.41V5.14C18.42,4.24,17.61,3.51,16.62,3.51z"/><path class="st0" d="M17.97,7.84H2.03c-0.25,0-0.45,0.18-0.45,0.41v8.78c0,0.9,0.81,1.62,1.8,1.62h13.23c1,0,1.8-0.73,1.8-1.62V8.24C18.42,8.02,18.22,7.84,17.97,7.84z M6.41,16c0,0.55-0.45,1-1,1H4.48c-0.55,0-1-0.45-1-1v-0.93c0-0.55,0.45-1,1-1h0.93c0.55,0,1,0.45,1,1V16z M6.41,11.42c0,0.55-0.45,1-1,1H4.48c-0.55,0-1-0.45-1-1v-0.93c0-0.55,0.45-1,1-1h0.93c0.55,0,1,0.45,1,1V11.42z M11.46,16c0,0.55-0.45,1-1,1H9.53c-0.55,0-1-0.45-1-1v-0.93c0-0.55,0.45-1,1-1h0.93c0.55,0,1,0.45,1,1V16z M11.46,11.42c0,0.55-0.45,1-1,1H9.53c-0.55,0-1-0.45-1-1v-0.93c0-0.55,0.45-1,1-1h0.93c0.55,0,1,0.45,1,1V11.42z M16.48,16c0,0.55-0.45,1-1,1h-0.93c-0.55,0-1-0.45-1-1v-0.93c0-0.55,0.45-1,1-1h0.93c0.55,0,1,0.45,1,1V16z M16.48,11.42c0,0.55-0.45,1-1,1h-0.93c-0.55,0-1-0.45-1-1v-0.93c0-0.55,0.45-1,1-1h0.93c0.55,0,1,0.45,1,1V11.42z"/></svg>',
    type: 2,
  },
  {
    tag: "Camera",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Camera S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Camera Video",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Camera Video S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/></svg>',
    type: 2,
  },
  {
    tag: "Cash",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Cash S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Check",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"/></svg>',
    type: 1,
  },
  {
    tag: "Check Circle",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Check Circle S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Chip",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>',
    type: 1,
  },
  {
    tag: "Chip S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M13 7H7v6h6V7z"></path><path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Clipboard",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>',
    type: 1,
  },
  {
    tag: "Clipboard S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/></svg>',
    type: 2,
  },
  {
    tag: "Clipboard Check",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>',
    type: 1,
  },
  {
    tag: "Clipboard Check S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Clock",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Clock S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Cloud",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>',
    type: 1,
  },
  {
    tag: "Cloud S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/></svg>',
    type: 2,
  },
  {
    tag: "Code",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></svg>',
    type: 1,
  },
  {
    tag: "Credit Card",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>',
    type: 1,
  },
  {
    tag: "Credit Card S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Cube",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',
    type: 1,
  },
  {
    tag: "Cursor Click",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/></svg>',
    type: 1,
  },
  {
    tag: "Cursor Click S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Database",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>',
    type: 1,
  },
  {
    tag: "Database S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/></svg>',
    type: 2,
  },
  {
    tag: "Device Desktop",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Device Desktop S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M18.63,11.28V3.56c0-0.61-0.49-1.1-1.1-1.1H2.47c-0.61,0-1.1,0.49-1.1,1.1v7.72H18.63z"/><path d="M1.37,11.95v1.14c0,0.61,0.49,1.1,1.1,1.1h15.06c0.61,0,1.1-0.49,1.1-1.1v-1.14H1.37z"/><path d="M13.57,16.14h-0.89l-0.39-0.83c-0.14-0.29-0.43-0.47-0.75-0.47H8.45c-0.32,0-0.61,0.18-0.75,0.47l-0.39,0.83H6.43c-0.39,0-0.7,0.31-0.7,0.7s0.31,0.7,0.7,0.7h7.15c0.39,0,0.7-0.31,0.7-0.7S13.96,16.14,13.57,16.14z"/></svg>',
    type: 2,
  },
  {
    tag: "Device Mobile",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Device Mobile S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Device Tablet",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Device Tablet S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Document",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Document S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Document Add",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Document Add S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Document Download",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Document Download S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Document Duplicate",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>',
    type: 1,
  },
  {
    tag: "Document Duplicate S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path><path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/></svg>',
    type: 2,
  },
  {
    tag: "Document Remove",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Document Remove S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Document Report",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Document Report S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Document Search",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"/></svg>',
    type: 1,
  },
  {
    tag: "Document Search S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"></path><path fill-rule="evenodd" d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Document Text",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Document Text S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Dots Horizontal",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Dots Vertical",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Emoji Happy",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Emoji Sad",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    type: 1,
  },
  {
    tag: "External link",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>',
    type: 1,
  },
  {
    tag: "Film",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></svg>',
    type: 1,
  },
  {
    tag: "Filter",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>',
    type: 1,
  },
  {
    tag: "Filter S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Fingerprint",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/></svg>',
    type: 1,
  },
  {
    tag: "Fire",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/></svg>',
    type: 1,
  },
  {
    tag: "Fire S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></svg>',
    type: 2,
  },
  {
    tag: "Flag",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/></svg>',
    type: 1,
  },
  {
    tag: "Folder",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Folder S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>',
    type: 2,
  },
  {
    tag: "Folder Add",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>',
    type: 1,
  },
  {
    tag: "Folder Add S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path clip-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1H8a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1V9z" fill-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Folder Alt",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></svg>',
    type: 1,
  },
  {
    tag: "Folder Alt S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd"></path><path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"/></svg>',
    type: 2,
  },
  {
    tag: "Folder Download",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>',
    type: 1,
  },
  {
    tag: "Folder Download S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path clip-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z" fill-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Folder Remove",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>',
    type: 1,
  },
  {
    tag: "Folder Remove S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path clip-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm4 6a1 1 0 000 2h4a1 1 0 000-2H8z" fill-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Gift",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>',
    type: 1,
  },
  {
    tag: "Gift S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"/></svg>',
    type: 2,
  },
  {
    tag: "Globe",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Globe Alt",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>',
    type: 1,
  },
  {
    tag: "Grid",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>',
    type: 1,
  },
  {
    tag: "Grid S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>',
    type: 2,
  },
  {
    tag: "Grid Add",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></svg>',
    type: 1,
  },
  {
    tag: "Grid Add S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"/></svg>',
    type: 2,
  },
  {
    tag: "Hand",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"/></svg>',
    type: 1,
  },
  {
    tag: "Hand S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z"/></svg>',
    type: 2,
  },
  {
    tag: "Hashtag",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/></svg>',
    type: 1,
  },
  {
    tag: "Heart",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Heart S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/></svg>',
    type: 2,
  },
  {
    tag: "Home",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',
    type: 1,
  },
  {
    tag: "Home S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>',
    type: 2,
  },
  {
    tag: "Identification",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"/></svg>',
    type: 1,
  },
  {
    tag: "Identification S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Instagram",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.08,20.5H7.92c-2.56,0-4.64-2.08-4.64-4.64V7.69c0-2.56,2.08-4.64,4.64-4.64h8.17c2.56,0,4.64,2.08,4.64,4.64v8.17C20.72,18.42,18.64,20.5,16.08,20.5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.96,15.87L11.96,15.87c2.26,0,4.1-1.83,4.1-4.1v0c0-2.26-1.83-4.1-4.1-4.1h0c-2.26,0-4.1,1.83-4.1,4.1v0C7.86,14.04,9.69,15.87,11.96,15.87z"/><circle stroke-linecap="round" stroke-miterlimit="10" cx="17.12" cy="6.38" r="0.26"/></svg>',
    type: 1,
  },
  {
    tag: "Key",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>',
    type: 1,
  },
  {
    tag: "Key S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Keyboard",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="#ffffff" stroke="none"><path fill="none" stroke="#ffffff" d="M21,17.89H3c-0.55,0-1-0.54-1-1.2V7.12c0-0.66,0.45-1.2,1-1.2h18c0.55,0,1,0.54,1,1.2v9.57C22,17.35,21.55,17.89,21,17.89z"/><path d="M5.16,9.77h-0.5c-0.41,0-0.75-0.34-0.75-0.75v-0.5c0-0.41,0.34-0.75,0.75-0.75h0.5c0.41,0,0.75,0.34,0.75,0.75v0.5C5.91,9.43,5.58,9.77,5.16,9.77z"/><path d="M8.71,9.77h-0.5c-0.41,0-0.75-0.34-0.75-0.75v-0.5c0-0.41,0.34-0.75,0.75-0.75h0.5c0.41,0,0.75,0.34,0.75,0.75v0.5C9.46,9.43,9.12,9.77,8.71,9.77z"/><path d="M12.25,9.77h-0.5C11.34,9.77,11,9.43,11,9.02v-0.5c0-0.41,0.34-0.75,0.75-0.75h0.5C12.66,7.77,13,8.1,13,8.52v0.5C13,9.43,12.66,9.77,12.25,9.77z"/><path d="M15.79,9.77h-0.5c-0.41,0-0.75-0.34-0.75-0.75v-0.5c0-0.41,0.34-0.75,0.75-0.75h0.5c0.41,0,0.75,0.34,0.75,0.75v0.5C16.54,9.43,16.21,9.77,15.79,9.77z"/><path d="M19.34,9.77h-0.5c-0.41,0-0.75-0.34-0.75-0.75v-0.5c0-0.41,0.34-0.75,0.75-0.75h0.5c0.41,0,0.75,0.34,0.75,0.75v0.5C20.09,9.43,19.75,9.77,19.34,9.77z"/><path d="M5.15,12.92H4.68c-0.41,0-0.75-0.34-0.75-0.75V11.7c0-0.41,0.34-0.75,0.75-0.75h0.47c0.41,0,0.75,0.34,0.75,0.75v0.47C5.9,12.59,5.56,12.92,5.15,12.92z"/><path d="M8.69,12.89H8.22c-0.41,0-0.75-0.34-0.75-0.75v-0.47c0-0.41,0.34-0.75,0.75-0.75h0.47c0.41,0,0.75,0.34,0.75,0.75v0.47C9.44,12.56,9.11,12.89,8.69,12.89z"/><path d="M12.23,12.92h-0.47c-0.41,0-0.75-0.34-0.75-0.75V11.7c0-0.41,0.34-0.75,0.75-0.75h0.47c0.41,0,0.75,0.34,0.75,0.75v0.47C12.98,12.59,12.65,12.92,12.23,12.92z"/><path d="M19.34,12.92h-4.04c-0.41,0-0.75-0.34-0.75-0.75V11.7c0-0.41,0.34-0.75,0.75-0.75h4.04c0.41,0,0.75,0.34,0.75,0.75v0.47C20.09,12.59,19.75,12.92,19.34,12.92z"/><path d="M5.16,16.11h-0.5c-0.41,0-0.75-0.34-0.75-0.75v-0.5c0-0.41,0.34-0.75,0.75-0.75h0.5c0.41,0,0.75,0.34,0.75,0.75v0.5C5.91,15.78,5.58,16.11,5.16,16.11z"/><path d="M15.79,16.11H8.22c-0.41,0-0.75-0.34-0.75-0.75v-0.5c0-0.41,0.34-0.75,0.75-0.75h7.57c0.41,0,0.75,0.34,0.75,0.75v0.5C16.54,15.78,16.21,16.11,15.79,16.11z"/><path d="M19.34,16.11h-0.5c-0.41,0-0.75-0.34-0.75-0.75v-0.5c0-0.41,0.34-0.75,0.75-0.75h0.5c0.41,0,0.75,0.34,0.75,0.75v0.5C20.09,15.77,19.75,16.11,19.34,16.11z"/></svg>',
    type: 1,
  },
  {
    tag: "Keyboard S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M18.1,4.61H1.9C1.41,4.61,1,5.1,1,5.69v8.61c0,0.59,0.41,1.08,0.9,1.08h16.2c0.49,0,0.9-0.49,0.9-1.08V5.69C19,5.1,18.59,4.61,18.1,4.61z M12.29,6.95c0-0.37,0.31-0.67,0.67-0.67h0.45c0.37,0,0.67,0.31,0.67,0.67V7.4c0,0.37-0.3,0.67-0.67,0.67h-0.45c-0.37,0-0.67-0.31-0.67-0.67V6.95z M9.1,6.95c0-0.37,0.31-0.67,0.68-0.67h0.45c0.37,0,0.68,0.3,0.68,0.67V7.4c0,0.37-0.31,0.67-0.68,0.67H9.78C9.41,8.08,9.1,7.77,9.1,7.4V6.95z M10.88,9.82v0.42c0,0.38-0.3,0.68-0.68,0.68H9.78c-0.37,0-0.67-0.31-0.67-0.68V9.82c0-0.37,0.31-0.67,0.67-0.67h0.42C10.58,9.14,10.88,9.45,10.88,9.82z M4.52,13.11c0,0.38-0.3,0.67-0.67,0.67H3.39c-0.37,0-0.67-0.31-0.67-0.67v-0.45c0-0.37,0.31-0.67,0.67-0.67h0.45c0.37,0,0.67,0.31,0.67,0.67V13.11z M2.74,10.24V9.82c0-0.37,0.31-0.67,0.67-0.67h0.42c0.37,0,0.67,0.31,0.67,0.67v0.42c0,0.38-0.31,0.68-0.67,0.68H3.41C3.04,10.91,2.74,10.61,2.74,10.24z M4.52,7.4c0,0.37-0.3,0.67-0.67,0.67H3.39c-0.37,0-0.67-0.31-0.67-0.67V6.95c0-0.37,0.31-0.67,0.67-0.67h0.45c0.37,0,0.67,0.31,0.67,0.67V7.4z M5.91,6.95c0-0.37,0.31-0.67,0.67-0.67h0.45c0.37,0,0.67,0.31,0.67,0.67V7.4c0,0.37-0.31,0.67-0.67,0.67H6.59c-0.37,0-0.67-0.31-0.67-0.67V6.95z M7.7,9.79v0.42c0,0.38-0.3,0.67-0.67,0.67H6.6c-0.37,0-0.68-0.31-0.68-0.67V9.79c0-0.37,0.31-0.68,0.68-0.68h0.42C7.39,9.11,7.7,9.42,7.7,9.79z M14.09,13.11c0,0.38-0.3,0.67-0.67,0.67H6.6c-0.37,0-0.68-0.31-0.68-0.67v-0.45c0-0.37,0.31-0.67,0.68-0.67h6.81c0.37,0,0.67,0.31,0.67,0.67V13.11z M17.28,13.11c0,0.37-0.31,0.67-0.67,0.67h-0.45c-0.37,0-0.67-0.31-0.67-0.67v-0.45c0-0.37,0.31-0.67,0.67-0.67h0.45c0.37,0,0.67,0.31,0.67,0.67V13.11z M17.28,10.24c0,0.38-0.31,0.68-0.67,0.68h-3.64c-0.37,0-0.67-0.31-0.67-0.68V9.82c0-0.37,0.31-0.67,0.67-0.67h3.64c0.37,0,0.67,0.31,0.67,0.67V10.24z M17.28,7.4c0,0.37-0.31,0.67-0.67,0.67h-0.45c-0.37,0-0.67-0.31-0.67-0.67V6.95c0-0.37,0.31-0.67,0.67-0.67h0.45c0.37,0,0.67,0.31,0.67,0.67V7.4z"/></svg>',
    type: 2,
  },
  {
    tag: "Library",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>',
    type: 1,
  },
  {
    tag: "Light Bulb",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>',
    type: 1,
  },
  {
    tag: "Light Bulb S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/></svg>',
    type: 2,
  },
  {
    tag: "Link",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>',
    type: 1,
  },
  {
    tag: "Location",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Location S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/></svg>',
    type: 2,
  },
  {
    tag: "Lock",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>',
    type: 1,
  },
  {
    tag: "Lock S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Lock Open",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Lock Open S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"/></svg>',
    type: 2,
  },
  {
    tag: "Mail",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Mail S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>',
    type: 2,
  },
  {
    tag: "Mail Open",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"/></svg>',
    type: 1,
  },
  {
    tag: "Mail Open S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clip-rule="evenodd"></svg>',
    type: 2,
  },
  {
    tag: "Map",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>',
    type: 1,
  },
  {
    tag: "Menu",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>',
    type: 1,
  },
  {
    tag: "Microphone",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>',
    type: 1,
  },
  {
    tag: "Microphone S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Minus",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 12H7"/></svg>',
    type: 1,
  },
  {
    tag: "Minus Circle",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Minus Circle S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Moon",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>',
    type: 1,
  },
  {
    tag: "Moon S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>',
    type: 2,
  },
  {
    tag: "Music note",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>',
    type: 1,
  },
  {
    tag: "Music note S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/></svg>',
    type: 2,
  },
  {
    tag: "Offline",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"/></svg>',
    type: 1,
  },
  {
    tag: "Online",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Paper Airplane",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.23,13.77l4.95,7.78l6.36-19.09L2.45,8.82L10.23,13.77z M10.23,13.77l5.66-5.66"/></svg>',
    type: 1,
  },
  {
    tag: "Paper Airplane S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M18.37,2.89c0.12-0.36,0.03-0.76-0.24-1.02C17.86,1.6,17.46,1.5,17.1,1.62L2.26,6.6C1.89,6.72,1.62,7.06,1.58,7.45C1.55,7.85,1.75,8.23,2.09,8.42l4.55,2.52c0.39,0.22,0.88,0.15,1.19-0.17l3.23-3.24c0.39-0.39,1.02-0.39,1.41,0c0.39,0.39,0.39,1.02,0,1.41l-3.23,3.24c-0.32,0.32-0.38,0.8-0.17,1.19l2.53,4.54c0.19,0.35,0.57,0.55,0.97,0.51c0.39-0.04,0.73-0.3,0.86-0.68L18.37,2.89z"/></svg>',
    type: 2,
  },
  {
    tag: "Paper clip",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>',
    type: 1,
  },
  {
    tag: "Pause",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Pause S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Pencil",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>',
    type: 1,
  },
  {
    tag: "Pencil S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/></svg>',
    type: 2,
  },
  {
    tag: "Phone",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',
    type: 1,
  },
  {
    tag: "Phone S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>',
    type: 2,
  },
  {
    tag: "Phone incoming",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"/></svg>',
    type: 1,
  },
  {
    tag: "Phone incoming S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"/><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>',
    type: 2,
  },
  {
    tag: "Phone missed call",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"/></svg>',
    type: 1,
  },
  {
    tag: "Phone missed S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/><path d="M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"/></svg>',
    type: 2,
  },
  {
    tag: "Phone outgoing",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"/></svg>',
    type: 1,
  },
  {
    tag: "Phone outgoing S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"/><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>|</svg>',
    type: 2,
  },
  {
    tag: "Play",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Play S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Plus",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></svg>',
    type: 1,
  },
  {
    tag: "Plus Circle",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></svg>',
    type: 1,
  },
  {
    tag: "Plus Circle S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>',
    type: 2,
  },
  {
    tag: "Refresh",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></svg>',
    type: 1,
  },
  {
    tag: "Reply",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></svg>',
    type: 1,
  },
  {
    tag: "RSS",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"></svg>',
    type: 1,
  },
  {
    tag: "Setting",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Setting S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Sun",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></svg>',
    type: 1,
  },
  {
    tag: "Sun S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Telegram",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.42,3.5l-2.86,13.48c-0.21,0.95-0.78,1.19-1.58,0.74l-4.36-3.21l-2.1,2.02c-0.23,0.23-0.43,0.43-0.88,0.43l0.31-4.44l8.07-7.3c0.35-0.31-0.08-0.49-0.55-0.17l-9.98,6.28L1.21,10C0.28,9.71,0.26,9.06,1.41,8.62l16.8-6.48C18.99,1.85,19.67,2.31,19.42,3.5z"/></svg>',
    type: 2,
  },
  {
    tag: "Terminal",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Terminal",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Thumb Down",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/></svg>',
    type: 1,
  },
  {
    tag: "Thumb Down S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"/></svg>',
    type: 2,
  },
  {
    tag: "Thumb Up",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></svg>',
    type: 1,
  },
  {
    tag: "Thumb Up S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/></svg>',
    type: 2,
  },
  {
    tag: "Thunder",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
    type: 1,
  },
  {
    tag: "Thunder S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Ticket",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></svg>',
    type: 1,
  },
  {
    tag: "Ticket S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Trash",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>',
    type: 1,
  },
  {
    tag: "Trash S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></svg>',
    type: 2,
  },
  {
    tag: "User",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>',
    type: 1,
  },
  {
    tag: "User Add",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>',
    type: 1,
  },
  {
    tag: "User Circle",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    type: 1,
  },
  {
    tag: "User Group",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
    type: 1,
  },
  {
    tag: "User remove",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"/></svg>',
    type: 1,
  },
  {
    tag: "Users",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Warning",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>',
    type: 1,
  },
  {
    tag: "Warning S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Warning Circle",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Warning Circle S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Puzzle",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>',
    type: 1,
  },
  {
    tag: "Puzzle S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/></svg>',
    type: 2,
  },
  {
    tag: "QRCode",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/></svg>',
    type: 1,
  },
  {
    tag: "Speaker",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path d="M15.25,22h-6.5c-1.66,0-3-1.34-3-3V5c0-1.66,1.34-3,3-3h6.5c1.66,0,3,1.34,3,3v14C18.25,20.66,16.91,22,15.25,22z"/><circle cx="12" cy="7.62" r="2"/><circle cx="12" cy="15.38" r="3"/></svg>',
    type: 1,
  },
  {
    tag: "Speaker S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M12.91,1.04H7.09c-1.49,0-2.69,1.2-2.69,2.69v12.54c0,1.49,1.2,2.69,2.69,2.69h5.82c1.49,0,2.69-1.2,2.69-2.69V3.73C15.6,2.24,14.4,1.04,12.91,1.04z M10,4.28c0.99,0,1.79,0.81,1.79,1.79S10.99,7.87,10,7.87S8.21,7.06,8.21,6.08S9.01,4.28,10,4.28z M10,15.72c-1.49,0-2.69-1.2-2.69-2.69s1.2-2.69,2.69-2.69s2.69,1.2,2.69,2.69S11.49,15.72,10,15.72z"/></svg>',
    type: 2,
  },
  {
    tag: "Whatsapp",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M9.1,1.69C5.52,2.17,2.74,4.78,2.06,8.26c-0.34,1.75-0.09,3.53,0.73,5.18l0.29,0.59l-0.73,2.16c-0.4,1.18-0.72,2.16-0.72,2.17c0.01,0.01,1.03-0.31,2.26-0.7l2.25-0.72l0.43,0.2c1.76,0.82,3.71,1.02,5.56,0.56c2.85-0.71,5.14-2.92,5.93-5.73c0.33-1.19,0.39-2.6,0.14-3.8c-0.56-2.76-2.53-5.06-5.2-6.05c-0.4-0.15-1.06-0.32-1.56-0.41C10.97,1.64,9.59,1.62,9.1,1.69z M11.14,3c2.68,0.36,4.96,2.36,5.67,4.98c0.31,1.12,0.32,2.36,0.04,3.47c-0.57,2.26-2.29,4.1-4.51,4.84c-1.9,0.63-4.01,0.41-5.7-0.59c-0.16-0.09-0.3-0.17-0.31-0.17c-0.01,0-0.61,0.19-1.32,0.41c-0.71,0.23-1.3,0.4-1.3,0.38c0-0.01,0.19-0.59,0.42-1.27l0.42-1.24l-0.19-0.28C4.12,13.18,3.74,12.41,3.59,12C2.48,8.78,3.95,5.22,7.03,3.67C8.3,3.03,9.67,2.8,11.14,3z"/><path d="M7.05,6.15C6.77,6.29,6.37,6.84,6.22,7.3C6.19,7.4,6.16,7.64,6.15,7.83C6.12,8.3,6.21,8.7,6.46,9.23c0.18,0.39,0.61,1.03,1.04,1.56c0.75,0.94,1.67,1.7,2.54,2.12c0.68,0.32,1.73,0.67,2.17,0.72c0.61,0.06,1.53-0.34,1.85-0.82c0.21-0.31,0.33-1.05,0.18-1.19c-0.07-0.07-1.45-0.74-1.72-0.84c-0.09-0.04-0.21-0.05-0.26-0.04c-0.05,0.01-0.2,0.16-0.36,0.36c-0.39,0.49-0.59,0.68-0.69,0.68c-0.14,0-0.85-0.34-1.24-0.6c-0.51-0.33-1.16-0.99-1.51-1.52C8.33,9.45,8.21,9.23,8.21,9.18c0-0.05,0.09-0.19,0.25-0.38C8.7,8.53,8.9,8.2,8.9,8.1c0-0.02-0.17-0.44-0.37-0.94c-0.24-0.57-0.41-0.93-0.47-1c-0.09-0.09-0.11-0.1-0.48-0.1C7.27,6.07,7.18,6.08,7.05,6.15z"/></svg>',
    type: 2,
  },
  {
    tag: "Wifi",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.64,8.98c5.17-5.17,13.55-5.17,18.72,0"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.47,12.4c3.61-3.61,9.44-3.61,13.04,0"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.99,15.67c2.21-2.21,5.79-2.21,8,0"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" cx="11.99" cy="19" r="0.75"/></svg>',
    type: 1,
  },
  {
    tag: "Wifi circle S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10,1.64c-4.62,0-8.36,3.74-8.36,8.36c0,4.62,3.74,8.36,8.36,8.36c4.62,0,8.36-3.74,8.36-8.36C18.36,5.38,14.62,1.64,10,1.64z M10.81,14.24c-0.07,0.24-0.22,0.42-0.43,0.53c-0.14,0.07-0.23,0.09-0.39,0.09c-0.19,0-0.31-0.04-0.47-0.14c-0.36-0.23-0.49-0.71-0.3-1.1c0.13-0.25,0.37-0.43,0.65-0.47c0.14-0.02,0.33,0.01,0.47,0.07c0.23,0.1,0.41,0.31,0.47,0.56C10.85,13.92,10.85,14.11,10.81,14.24z M12.88,12.29c-0.12,0.25-0.38,0.4-0.66,0.38c-0.19-0.01-0.3-0.06-0.49-0.24c-0.08-0.07-0.18-0.16-0.24-0.2c-0.31-0.23-0.67-0.39-1.07-0.46c-0.16-0.03-0.52-0.04-0.69-0.02c-0.55,0.06-1.04,0.29-1.47,0.68c-0.13,0.12-0.2,0.16-0.31,0.2c-0.07,0.03-0.1,0.03-0.21,0.03c-0.12,0-0.14,0-0.22-0.03c-0.42-0.14-0.6-0.62-0.38-1.01c0.04-0.08,0.21-0.24,0.37-0.38c0.62-0.51,1.34-0.81,2.15-0.89c0.14-0.01,0.68,0,0.82,0.01c0.88,0.12,1.65,0.49,2.23,1.07c0.11,0.11,0.14,0.14,0.17,0.22c0.05,0.11,0.08,0.2,0.08,0.31C12.95,12.09,12.93,12.19,12.88,12.29z M14.53,10.68c-0.1,0.1-0.16,0.14-0.28,0.18c-0.07,0.02-0.1,0.03-0.2,0.03c-0.22,0-0.34-0.05-0.55-0.25c-0.21-0.2-0.23-0.21-0.38-0.33c-0.37-0.29-0.82-0.56-1.26-0.73c-1.33-0.52-2.8-0.47-4.07,0.16c-0.49,0.24-0.86,0.5-1.29,0.91c-0.11,0.11-0.15,0.13-0.23,0.17c-0.17,0.08-0.34,0.1-0.52,0.04c-0.41-0.13-0.6-0.58-0.42-0.98c0.04-0.08,0.05-0.1,0.21-0.26c0.74-0.73,1.73-1.3,2.76-1.58c0.38-0.1,0.8-0.17,1.21-0.21c0.19-0.01,0.92-0.01,1.1,0.01c1.15,0.12,2.16,0.5,3.07,1.15c0.41,0.29,0.87,0.7,0.95,0.86c0.06,0.12,0.08,0.21,0.08,0.34C14.73,10.4,14.67,10.54,14.53,10.68z M16.38,8.83c-0.14,0.14-0.31,0.21-0.51,0.21c-0.12,0-0.17-0.01-0.27-0.05c-0.11-0.04-0.17-0.09-0.36-0.27C14.78,8.29,14.39,8,13.89,7.7c-0.98-0.59-2.05-0.93-3.23-1.05c-0.3-0.03-1.06-0.03-1.37,0.01C8.11,6.78,7.08,7.12,6.11,7.7C5.61,8,5.23,8.29,4.77,8.72C4.57,8.91,4.51,8.96,4.4,9C4.3,9.03,4.25,9.04,4.13,9.04c-0.2,0-0.37-0.07-0.51-0.21c-0.09-0.09-0.15-0.18-0.19-0.3C3.41,8.46,3.4,8.43,3.4,8.31c0-0.12,0-0.15,0.03-0.22c0.05-0.14,0.09-0.2,0.27-0.38C4.87,6.53,6.5,5.66,8.17,5.33c0.51-0.1,0.84-0.14,1.46-0.18c0.15-0.01,0.87,0,1.05,0.02c1.22,0.1,2.31,0.4,3.37,0.94c0.83,0.41,1.63,0.99,2.25,1.61c0.18,0.18,0.22,0.24,0.27,0.38c0.02,0.07,0.03,0.1,0.03,0.22c0,0.12,0,0.15-0.03,0.22C16.53,8.65,16.48,8.74,16.38,8.83z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "X",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>',
    type: 1,
  },
  {
    tag: "X circle",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    type: 1,
  },
  {
    tag: "X circle S",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
];

//Adding icons
for (const icon of icons) {
  //Getting tag & code of icon
  let code = icon.code;
  let tag = icon.tag;

  //Creating li element
  let li = document.createElement("li");
  li.className = "button";
  li.setAttribute("onclick", `copy(${icons.indexOf(icon)})`);

  //Creating icon element
  let iconTag = document.createElement("div");
  iconTag.className = "icon";
  iconTag.innerHTML = code;

  //Creating tag element
  let tagTag = document.createElement("div");
  tagTag.className = "tag";
  tagTag.innerHTML = tag;

  //Creating input element, that must be hidden and contains source code of icon
  let inputTag = document.createElement("input");
  inputTag.setAttribute("type", "text");
  inputTag.className = "code";
  inputTag.innerText = code;

  //Adding elements to li element
  li.appendChild(iconTag);
  li.appendChild(tagTag);
  li.appendChild(inputTag);

  //Adding made element to the list of icons to display to the user
  iconsList.append(li);

  //This method has a lower quality than the high method
  //let li = `<li class="button" onclick="copy(${icons.indexOf(icon)})"><div class="icon">${code}</div><div class="tag">${tag}</div><input type="text" class="code" value='${code}'/>`;
  //iconsList.innerHTML = li;
}

//showing result section and hidding loading & noResult section
loading.classList.toggle("hide");
result.classList.toggle("hide");
form.classList.toggle("hide");
noResult.className = "no_result hide";

//Change variable to an array of icons
iconsList = document
  .querySelector(".result .icons_list")
  .querySelectorAll("li");

iconsNumbers = icons.length;
updateResultsNumber();

//Adding a listener to user keyboard keys clicking
window.onkeyup = () => {
  search();
};

//Adding a listener to user page scrolling
window.onscroll = () => {
  if (window.scrollY > searchBoxY) {
    searchBox.classList.add("scrolled");
  } else {
    searchBox.classList.remove("scrolled");
  }
};

//Prepairing filters
for (i = 0; i < filters.length; i++) {
  let filterButton = filters[i];
  let index = i;
  filterButton.onclick = (event) => {
    event.preventDefault();
    filters.forEach((element) => {
      element.className = "button";
    });

    filter = index;
    filterButton.className = "button active";
    search();
  };
}

//The "Search" function is used when searching for an icon or changing filters
function search() {
  //Getting search index
  let index = searchBox.value;

  //Is the search index not empty?
  if (index.length !== 0) {
    //Making an array for results
    let result = [];
    //Making index uppercase to remove case sensitivity
    let searchIndex = index.toUpperCase();

    for (const icon of icons) {
      iconTag = icon.tag;
      iconTagName = iconTag.toUpperCase();

      //Does icon match index?
      if (iconTagName.indexOf(searchIndex) > -1) {
        //Does icon match filter
        if (filter !== 0 && icon.type === filter) {
          result.push(icons.indexOf(icon));
        } else if (filter === 0) {
          result.push(icons.indexOf(icon));
        }
      }
    }

    iconsNumbers = result.length;
    updateResultsNumber();
    //If search have result, show the result; otherwise hide all icons
    result.length > 0 ? show(result) : hideAll();
  }
  //Or is it empty?
  else {
    //Is any filter applied?
    if (filter !== 0) {
      //Show as filter
      show();
      iconsNumbers = 0;
      //Get numbers of icons that match the filter
      for (const icon of icons) {
        icon.type === filter ? iconsNumbers++ : false;
      }
      //Then update result number
      updateResultsNumber();
    }
    //Or not applied
    else {
      //Set numbers of icons to icons array length, because there is no any index or filter
      iconsNumbers = icons.length;
      updateResultsNumber();
      showAll();
    }
  }
}

//The "Show All" function is used when the page is loaded, the "All" is selected in filters, or the search box is cleared.
function showAll() {
  iconsList.forEach((iconInList) => {
    iconInList.style.display = "";
  });
}

//The "Hide All" function is used when the search has no results
function hideAll() {
  //Hide all icons
  iconsList.forEach((iconInList) => {
    iconInList.style.display = "none";
  });
  //Set noResult text
  noResult.className = "no_result";
  noResult.innerText =
    'Your search for "' + searchBox.value + '" did not return any results';
}

//The "Copy" function is used when the user click on an icon
function copy(index) {
  //Copy the icon code
  navigator.clipboard.writeText(icons[index].code);
  //Show copied message, then hide that after 1500ms
  const copyMessage = document.querySelector(".copied");
  copyMessage.classList.toggle("hide");
  setTimeout(() => {
    copyMessage.classList.toggle("hide");
  }, 1500);
}

//The "Show" function used when user search an icon or change filters or both
function show(index = null) {
  //Is user only changed filters?
  if (index == null) {
    //Is user selected "All" in filters?
    if (filter === 0) {
      showAll();
    }
    //Or selected another filter?
    else {
      for (i = 0; i < iconsList.length; i++) {
        //Prepare icons as selected filter
        if (icons[i].type == filter) {
          //Does the icon match the filter?
          iconsList[i].style.display = "";
          iconsNumbers++;
        } else {
          //Or doesn't?
          iconsList[i].style.display = "none";
        }
      }
    }
  } else {
    //Or searched an icon or both?
    if (filter === 0) {
      //Is only searche an icon?
      for (i = 0; i < icons.length; i++) {
        //Prepare icons as search
        if (index.includes(i)) {
          //Does icon match the search index?
          iconsList[i].style.display = "";
        } else {
          //Or doesn't?
          iconsList[i].style.display = "none";
        }
      }
    } else {
      //Or both of searching icon and changing filter?
      for (i = 0; i < iconsList.length; i++) {
        //Prepare icons as search and filter
        if (index.includes(i) && icons[i].type == filter) {
          //Does icon match the search index and filter?
          iconsList[i].style.display = "";
        } else {
          //Or doesn't?
          iconsList[i].style.display = "none";
        }
      }
    }
  }
}

//Updating numbers of icons
function updateResultsNumber() {
  //Setting numbers of icons
  iconsNumberElement.innerText =
    iconsNumbers === 0 ? "No result" : "Result: " + iconsNumbers + " icons";
  if (iconsNumbers === 0) {
    //Is no icon displayed?
    hideAll();
  } else {
    //Or displayed?
    //Making noResult section hide
    noResult.className = "no_result hide";
  }
}
// End Search section
