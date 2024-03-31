const filter_btns = document.querySelector("#home_filter");
const projects = document.querySelector("#portfolio .container");

filter_btns.addEventListener("click", filter);
function filter(e) {
  var items = projects.childNodes;
  var list = [];
  for (let i = 1; i < items.length; i = i + 2) {
    list.push(items[i]);
  }
  // check if button is already clicked and is being unclicked
  if (e.target.classList[0] === "filter_clicked") {
    e.target.setAttribute("class", "filter_btn");
    list.forEach((item) => {
      item.style.display = "inline";
    });
  } else {
    // change button appearance
    switch (e.target.value) {
      //
      case "data":
        e.target.setAttribute("class", "filter_clicked");
        document
          .getElementById("design_btn")
          .setAttribute("class", "filter_btn");
        /*document
          .getElementById("dabbles_btn")
          .setAttribute("class", "filter_btn");*/
        break;
      //
      case "design":
        e.target.setAttribute("class", "filter_clicked");
        document.getElementById("data_btn").setAttribute("class", "filter_btn");
        /*document
          .getElementById("dabbles_btn")
          .setAttribute("class", "filter_btn");*/
        break;
      //
      /*case "dabbles":
        e.target.setAttribute("class", "filter_clicked");
        document.getElementById("data_btn").setAttribute("class", "filter_btn");
        document
          .getElementById("design_btn")
          .setAttribute("class", "filter_btn");
        break;*/
    }
    // determine which projects to show
    list.forEach((item) => {
      switch (e.target.value) {
        //
        case "data":
          if (item.classList.contains("data")) {
            item.style.display = "inline";
          } else {
            item.style.display = "none";
          }
          break;
        //
        case "design":
          if (item.classList.contains("design")) {
            item.style.display = "inline";
          } else {
            item.style.display = "none";
          }
          break;
        //
        /*case "dabbles":
          if (item.classList.contains("dabbles")) {
            item.style.display = "inline";
          } else {
            item.style.display = "none";
          }
          break;*/
      }
    });
  }
}
