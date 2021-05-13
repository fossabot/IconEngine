// Search section
const search_box = document.querySelector("#search");
let iconsList = document.querySelector(".result .icons_list");
let filter = 0;

const icons = [
  {
    tag: "Adjustments",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path d="M12 6V4M12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10M12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10M6 18C7.10457 18 8 17.1046 8 16C8 14.8954 7.10457 14 6 14M6 18C4.89543 18 4 17.1046 4 16C4 14.8954 4.89543 14 6 14M6 18V20M6 14V4M12 10V20M18 18C19.1046 18 20 17.1046 20 16C20 14.8954 19.1046 14 18 14M18 18C16.8954 18 16 17.1046 16 16C16 14.8954 16.8954 14 18 14M18 18V20M18 14V4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    type: 1,
  },
  {
    tag: "Annonation",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>',
    type: 1,
  },
  {
    tag: "Annonation S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Arrow circle down",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/></svg>',
    type: 1,
  },
  {
    tag: "Arrow circle down S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Arrow circle left",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Arrow circle left S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Arrow circle right",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Arrow circle right S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Arrow circle up",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"/></svg>',
    type: 1,
  },
  {
    tag: "Arrow circle up S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Arrow down",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>',
    type: 1,
  },
  {
    tag: "Arrow left",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>',
    type: 1,
  },
  {
    tag: "Arrow right",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>',
    type: 1,
  },
  {
    tag: "Arrow up",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>',
    type: 1,
  },
  {
    tag: "Arrows expand",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>',
    type: 1,
  },
  {
    tag: "At symbol",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/></svg>',
    type: 1,
  },
  {
    tag: "Backspace",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"/></svg>',
    type: 1,
  },
  {
    tag: "Backspace S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Beaker",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>',
    type: 1,
  },
  {
    tag: "Beaker S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Ban",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>',
    type: 1,
  },
  {
    tag: "Bookmark",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>',
    type: 1,
  },
  {
    tag: "Bookmark S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/></svg>',
    type: 2,
  },
  {
    tag: "Birthday",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"/></svg>',
    type: 1,
  },
  {
    tag: "Birthday S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Briefcase",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Briefcase S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/></svg>',
    type: 2,
  },
  {
    tag: "Calculator",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
    type: 1,
  },
  {
    tag: "Calculator S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Camera",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Camera S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Cash",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Cash S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Chip",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>',
    type: 1,
  },
  {
    tag: "Chip S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M13 7H7v6h6V7z"></path><path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "Clipboard",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>',
    type: 1,
  },
  {
    tag: "Clipboard S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none">s<path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/></svg>',
    type: 2,
  },
  {
    tag: "Clipboard Check",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>',
    type: 1,
  },
  {
    tag: "Clipboard Check S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
  {
    tag: "External link",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>',
    type: 1,
  },
  {
    tag: "Paper clip",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>',
    type: 1,
  },
  {
    tag: "Setting",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    type: 1,
  },
  {
    tag: "Setting S",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 20 20" fill="#ffffff" stroke="none"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>',
    type: 2,
  },
];

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
}

function hideAll() {
  for (i = 0; i < iconsList.length; i++) {
    iconsList[i].style.display = "none";
  }
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
  if (index == null) {
    if (filter == 0) {
      showAll()
    } else {
      for (i = 0; i < iconsList.length; i++) {
        icons[i].type == filter
          ? (iconsList[i].style.display = "")
          : (iconsList[i].style.display = "none");
      }
    }
  } else {
    if (filter == 0) {
      for (i = 0; i < iconsList.length; i++) {
        index.includes(i)
          ? (iconsList[i].style.display = "")
          : (iconsList[i].style.display = "none");
      }
    } else {
      for (i = 0; i < iconsList.length; i++) {
        index.includes(i) && icons[i].type == filter
          ? (iconsList[i].style.display = "")
          : (iconsList[i].style.display = "none");
      }
    }
  }
}
// End Search section
