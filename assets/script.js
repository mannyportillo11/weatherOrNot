function runThisWeather() {

    //declare constants for city grab
    const inputEl = document.getElementById("city");
    const searchEl = document.getElementById("searchButton");
    
    //declare constant for clear button
    const clearEl = document.getElementById("clearHis");

    //declare constant for history form to display searched cities list
    const historyEl = document.getElementById("hist");

    //declare variable for persistence and retrieval
    let searchHis = JSON.parse(localStorage.getItem("search")) || [];

    //declare variables to get current weather
    const nameEl = document.getElementById("curentCityName");
    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl = document.getElementById("temperature");

    function weather (thisCity) {
            console.log (thisCity);
    };

    //capture search bar click
    searchEl.addEventListener("click",function() {
        const searchIn = inputEl.value;
        //run function with search value
        weather(searchIn);
        //create search array and add city to array
        searchHis.push(searchIn);
        //set persistence
        localStorage.setItem("searched",JSON.stringify(searchHis));
        createHistory();
    })

    //capture clear button click
    clearEl.addEventListener("click",function() {
        // clear searched history array
        searchHistory = [];
        createHistory();
    })

    function createHistory() {
        historyEl.innerHTML = "";
        for (let i = 0 ; i < searchHis.length ; i++) {
            const newHisItem = document.createElement("input");
            newHisItem.setAttribute("type","text");
            newHisItem.setAttribute("class", "cities");
            newHisItem.setAttribute("value", searchHis[i]);
            newHisItem.addEventListener("click",function() {
                weather(newHisItem.value);
            })
            historyEl.append(newHisItem);
        }
    }
};


runThisWeather();