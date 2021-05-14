// Search section
const search_box = document.querySelector("#search");
let iconsList = document.querySelector(".result .icons_list");
let iconsNumberElement = document.querySelector(".icons-number");
let filter = 0;

const icons = [
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
    tag: "Badge",
    code: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>',
    type: 1,
  },
  {
    tag: "Badge S",
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
    tag: "Card",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>',
    type: 1,
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
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/></svg>',
    type: 2,
  },
  {
    tag: "Device Desktop",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    type: 1,
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
    tag: "Paper clip",
    code: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>',
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
];

let iconsNumbers = icons.length;
updateResult();

for (i = 0; i < icons.length; i++) {
  let code = icons[i].code;
  let tag = icons[i].tag;

  let li = `<li onclick="copy(${i})"><div class="icon">${code}</div><div class="tag">${tag}</div><input type="text" class="code" value='${code}'/>`;
  iconsList.innerHTML += li;
}

iconsList = document
  .querySelector(".result .icons_list")
  .querySelectorAll("li");

window.onkeyup = (event) => {
  if (search_box.value.length == 0) {
    showAll();
    updateResult();
  } else {
    let searchValue = search_box.value;
    let result = [];
    searchIndex = searchValue.toUpperCase();
    for (i = 0; i < iconsList.length; i++) {
      iconTag = iconsList[i].querySelector(".tag").innerText;
      iconTagName = iconTag.toUpperCase();

      if (iconTagName.indexOf(searchIndex) > -1) {
        result.push(i);
      }
    }

    result.length > 0 ? show(result) : hideAll();
    updateResult();
  }
};

const filters = document.querySelectorAll("form .filters button");

for (i = 0; i < filters.length; i++) {
  let filterButton = filters[i];
  let index = i;
  filterButton.onclick = () => {
    filters.forEach((element) => {
      element.className = "";
    });

    filter = index;
    filterButton.className = "active";
    show();
  };
}

function showAll() {
  for (i = 0; i < iconsList.length; i++) {
    iconsList[i].style.display = "";
  }
  iconsNumbers = icons.length;
  updateResult();
}

function hideAll() {
  for (i = 0; i < iconsList.length; i++) {
    iconsList[i].style.display = "none";
  }
  iconsNumbers = 0;
  updateResult();
}

function copy(index) {
  const copyMessage = document.querySelector(".copied");
  let value = icons[index].code;
  navigator.clipboard.writeText(value);
  copyMessage.className = "copied";
  setTimeout(() => {
    copyMessage.className = "copied hide";
  }, 1500);
}

function show(index = null) {
  iconsNumbers = 0;
  if (index == null) {
    if (filter == 0) {
      showAll();
    } else {
      for (i = 0; i < iconsList.length; i++) {
        if (icons[i].type == filter) {
          iconsList[i].style.display = "";
          iconsNumbers++;
        } else {
          iconsList[i].style.display = "none";
        }
      }
    }
    updateResult();
  } else {
    if (filter == 0) {
      for (i = 0; i < iconsList.length; i++) {
        if (index.includes(i)) {
          iconsList[i].style.display = "";
          iconsNumbers++;
        } else {
          iconsList[i].style.display = "none";
        }
      }
    } else {
      for (i = 0; i < iconsList.length; i++) {
        if (index.includes(i) && icons[i].type == filter) {
          iconsList[i].style.display = "";
          iconsNumbers++;
        } else {
          iconsList[i].style.display = "none";
        }
      }
    }
  }
  updateResult();
}

function updateResult() {
  iconsNumberElement.innerText = "Result: " + iconsNumbers + " Icons";
}
// End Search section
