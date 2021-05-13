// Search section
const search_box = document.querySelector("#search");
let iconsList = document.querySelector(".result .icons_list");

const icons = [
  {
    tag: "Adjustments",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path d="M12 6V4M12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10M12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10M6 18C7.10457 18 8 17.1046 8 16C8 14.8954 7.10457 14 6 14M6 18C4.89543 18 4 17.1046 4 16C4 14.8954 4.89543 14 6 14M6 18V20M6 14V4M12 10V20M18 18C19.1046 18 20 17.1046 20 16C20 14.8954 19.1046 14 18 14M18 18C16.8954 18 16 17.1046 16 16C16 14.8954 16.8954 14 18 14M18 18V20M18 14V4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    tag: "Arrow down",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>',
  },
  {
    tag: "Arrow left",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>',
  },
  {
    tag: "Arrow right",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>',
  },
  {
    tag: "Arrow up",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>',
  },
  {
    tag: "Arrows expand",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>',
  },
  {
    tag: "At symbol",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/></svg>',
  },
  {
    tag: "Badge",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>',
  },
  {
    tag: "Ban",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>',
  },
  {
    tag: "Briefcase",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  },
  {
    tag: "Calculator",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
  },
  {
    tag: "Camera",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
  },
  {
    tag: "Chip",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>',
  },
  {
    tag: "Clipboard",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>',
  },
  {
    tag: "External link",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>',
  },
  {
    tag: "Paper clip",
    code:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>',
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

function show(index) {
  for (i = 0; i < iconsList.length; i++) {
    index.includes(i)
      ? (iconsList[i].style.display = "")
      : (iconsList[i].style.display = "none");
  }
}
// End Search section
