// Search section
const form = document.querySelector("form");
const searchBox = document.querySelector("#search");
const filters = form.querySelectorAll(".filters button");
const result = document.querySelector(".result");
const noResult = document.querySelector(".no_result");
const loading = document.querySelector(".loading");
let iconsList = document.querySelector(".result .icons_list");
let iconsNumberElement = document.querySelector(".icons-number");
let filter = 0;
let icons = [];
let iconsNumbers;
let searchBoxY = searchBox.getBoundingClientRect().top;

function getIcons() {
  //Receive icons from json file
  return fetch("icons.json").then((response) => response.json());
}

//Making form & reult section hide for loading
form.classList.toggle("hide");
result.classList.toggle("hide");

async function prepareIcons() {
  //Receive icons fron getIcon function, which receives them from the json file
  icons = await getIcons();
  iconsNumbers = icons.length;

  for (i = 0; i < icons.length; i++) {
    //Add icons
    let code = icons[i].code;
    let tag = icons[i].tag;

    let li = `<li class="button" onclick="copy(${i})"><div class="icon">${code}</div><div class="tag">${tag}</div><input type="text" class="code" value='${code}'/>`;
    iconsList.innerHTML += li;
  }

  //Prepairing result section and hidding loading & noResult section
  loading.classList.toggle("hide");
  result.classList.toggle("hide");
  noResult.className = "no_result hide";

  //Change variable to an array of icons
  iconsList = document
    .querySelector(".result .icons_list")
    .querySelectorAll("li");

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
}

prepareIcons();

//The "Search" function is used when searching for an icon or changing filters
function search() {
  //Getting search index
  let index = searchBox.value;
  if (index !== 0) {
    //Is the search index not empty?
    //Making an array for results
    let result = [];
    //Making index uppercase to remove case sensitivity
    let searchIndex = index.toUpperCase();
    for (i = 0; i < iconsList.length; i++) {
      //Searching in icons
      iconTag = iconsList[i].querySelector(".tag").innerText;
      iconTagName = iconTag.toUpperCase();

      if (iconTagName.indexOf(searchIndex) > -1) {
        //Does icon match index?
        result.push(i);
      }
    }
    //If search have result, show the result; otherwise hide all icons
    result.length > 0 ? show(result) : hideAll();
  } else {
    //Or is it empty?
    showAll();
  }
}

//The "Show All" function is used when the page is loaded, the "All" is selected in filters, or the search box is cleared.
function showAll() {
  for (i = 0; i < iconsList.length; i++) {
    iconsList[i].style.display = "";
  }
  iconsNumbers = icons.length;
  updateResultsNumber();
}

//The "Hide All" function is used when the search has no results
function hideAll() {
  for (i = 0; i < iconsList.length; i++) {
    iconsList[i].style.display = "none";
  }
  iconsNumbers = 0;
  noResult.className = "no_result";
  noResult.innerText =
    'Your search for "' + searchBox.value + '" did not return any results';
}

//The "Copy" function is used when the user click on an icon
function copy(index) {
  const copyMessage = document.querySelector(".copied");
  let value = icons[index].code;
  navigator.clipboard.writeText(value);
  copyMessage.classList.toggle("hide");
  setTimeout(() => {
    copyMessage.classList.toggle("hide");
  }, 1500);
}

//The "Show" function used when user search an icon or change filters or both
function show(index = null) {
  //Set iconsNumber 0 for updating that
  iconsNumbers = 0;
  if (index == null) {
    //Is user only changed filters?
    if (filter == 0) {
      //Is user selected "All" in filters?
      showAll();
    } else {
      //Or selected another filter?
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
    //Then updating numbers of result
    updateResultsNumber();
  } else {
    //Or searched an icon or both?
    if (filter == 0) {
      //Is only searche an icon?
      for (i = 0; i < iconsList.length; i++) {
        //Prepare icons as search
        if (index.includes(i)) {
          //Does icon match the search index?
          iconsList[i].style.display = "";
          iconsNumbers++;
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
          iconsNumbers++;
        } else {
          //Or doesn't?
          iconsList[i].style.display = "none";
        }
      }
    }
  }
  //Then updating numbers of result
  updateResultsNumber();
}

function updateResultsNumber() {
  //Updating numbers of icons
  //Setting numbers of icons
  iconsNumberElement.innerText = "Result: " + iconsNumbers + " Icons";
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
