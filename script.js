let se = 3;

//document.addEventListener("touchstart", function() {}, true);


//-----------------------------------------------------------------------------------//
// This part of the code takes care of the search engine, cycling and searching etc. //
//-----------------------------------------------------------------------------------//

// Listens for click event in se_button, once clicked, se increments by one and cycleSearchEngines() is called to update the icon, placeholder, and form action
document.getElementById("se_button").addEventListener("click", function() {
    se++;
    cycleSearchEngines(se);
});

//Do not allow searching if the user clicks "GO" when the search box is empty
function check_if_search_empty(event) {
if (document.forms["search_eng_form"]["q"].value == "") {
    event.preventDefault();
}}

document.getElementById("go_btn").addEventListener("click", function(){
    check_if_search_empty(event);
});

const search_engines = [{
    src: "ddg.svg",
    placeholder: "DuckDuckGo",
    action: "https://www.duckduckgo.com/"
  }, {
    src: "goog.svg",
    placeholder: "Google",
    action: "https://google.com/?q="
  },  {
    src: "reddit.svg",
    placeholder: "Reddit",
    action: "https://www.reddit.com/search?q="
  },  {
    src: "youtube.svg",
    placeholder: "YouTube",
    action: "https://www.youtube.com/results?q="
}];
  
const cycleSearchEngines = se => {
    const curData = search_engines[(se+1) % search_engines.length];
    document.getElementById("se_icon").src = "icons/" + curData.src;
    document.getElementById("search").placeholder = "Searching with " + curData.placeholder;
    document.getElementById("search_eng_form").action = curData.action;
};
