// Search section
const search_box = document.querySelector("#search");
const filters = document.querySelectorAll("form .filters button");
let iconsList = document.querySelector(".result .icons_list");
let iconsNumberElement = document.querySelector(".icons-number");
let filter = 0;
let icons;
let iconsNumbers;

//Getting icons from json file
let rawFile = new XMLHttpRequest();
rawFile.open("GET", "http://127.0.0.1:5500/js/data/icons.json", true);
rawFile.onReadyStateChange = () => {
  if (rawFile.readyState === 4) {
    icons = JSON.parse(rawFile.responseText);
    console.log(rawFile.responseText)
    console.log(icons)
    iconsNumbers = icons.length;
    console.log(iconsNumbers)

    //Add icons
    for (i = 0; i < icons.length; i++) {
      let code = icons[i].code;
      let tag = icons[i].tag;

      let li = `<li onclick="copy(${i})"><div class="icon">${code}</div><div class="tag">${tag}</div><input type="text" class="code" value='${code}'/>`;
      iconsList.innerHTML += li;
    }

    //Change variable to an array of icons
    iconsList = document
      .querySelector(".result .icons_list")
      .querySelectorAll("li");
  }

  updateResult();

  //Add response to search
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
};
rawFile.send(null);


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
