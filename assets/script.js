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

    //capture search bar click
    searchEl.addEventListener("click",function() {
        const searchIn = inputEl.value;
        //create search array and add city to array
        searchHis.push(searchIn);
        //set persistence
        localStorage.setItem("searched",JSON.stringify(searchHis));
    })
};


runThisWeather();