function runThisWeather() {

    //declare constants for city grab
    const inputEl = document.getElementById("city");
    const searchEl = document.getElementById("searchButton");
    
    //declare constant for clear button
    const clearEl = document.getElementById("clearHis");

    //capture search bar click
    searchEl.addEventListener("click",function() {
        const searchTerm = inputEl.value;
        console.log(searchTerm);
    })
};


runThisWeather();