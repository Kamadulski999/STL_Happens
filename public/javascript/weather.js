// const dayjs = require('dayjs');

// var date = dayjs().format("MM/DD/YYYY");
// var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=38.6&lon=-90.2&exclude=minutely,hourly,alerts&units=imperial&appid=a74391bcfbdf1e9827d65a7e2e76f024";
const apiUrl = "api.openweathermap.org/data/2.5/forecast/daily?lat=38.6&lon=-90.2&cnt=5&appid=a74391bcfbdf1e9827d65a7e2e76f024";


var getFiveDayWeather = function(lat, lon) {
    fetch(apiUrl)
    
        .then(function(response) {
            response.json().then(function(data) {
            var weather = data;
            var fiveDayArr = [];
        //storing weather data from api
    //     for (var i = 0; i < 5; i++) {
    //         date = dayjs().add(i + 1, 'day').format("MM/DD/YYYY");
    //         var fiveDayObj = {
    //             date: date,
    //             weather: weather.daily[i].weather[0].icon,
    //             temp: weather.daily[i].temp.day,
    //             wind: weather.daily[i].wind_speed,
    //             humidity: weather.daily[i].humidity
    //         };

    //         fiveDayArr.push(fiveDayObj);
    //     };
    //     // console.log(fiveDayArr);
       

    //     //sending stored data to function that will print to screen
    //     printFiveDay(fiveDayArr);
    //     });
    // })

    .catch(function(error) {
        alert("Unable to connect to Weather Map");
    });
};

var printFiveDay = function(fiveDayArr) {
    var fiveDayTitleEl = document.querySelector("#five-forecast");
    fiveDayTitleEl.textContent = "Five Day Forecast: "

    var fiveDayContainerEl = document.querySelector("#five-days");
    fiveDayContainerEl.innerHTML = "";
    
    //moving through array of stored weather data and creating forecast day boxes
    for (var i = 0; i < fiveDayArr.length; i ++) {
       
        var oneDayContainerEl = document.createElement("div");
        oneDayContainerEl.classList.add("one-day-container");
        fiveDayContainerEl.appendChild(oneDayContainerEl);

        var oneDayDateEl = document.createElement("h2");
        oneDayDateEl.textContent =  fiveDayArr[i].date;
        oneDayDateEl.classList.add("city-date");
        oneDayContainerEl.appendChild(oneDayDateEl);

        var oneDayIconEl = document.createElement("img");
        oneDayIconEl.classList.add("icon");
        oneDayContainerEl.appendChild(oneDayIconEl);


        //adding corresponding weather icon
        var icon = fiveDayArr[i].weather;
        if (icon === "01d"|| icon === "01n") {
                oneDayIconEl.setAttribute("src", "./assets/images/01d.png")
            } else if (icon === "02d"|| icon === "02n") {
                oneDayIconEl.setAttribute("src", "./assets/images/02d.png");
            } else if (icon === "03d"|| icon === "03n") {
                oneDayIconEl.setAttribute("src", "./assets/images/03d.png");
            } else if (icon = "04d" || icon === "04n") {
                oneDayIconEl.setAttribute("src", "./assets/images/04d.png");
            } else if (icon = "09d" || icon === "05n") {
                oneDayIconEl.setAttribute("src", "./assets/images/09d.png");
            } else if (icon = "10d" || icon === "10n") {
                oneDayIconEl.setAttribute("src", "./assets/images/10d.png");
            } else if (icon = "11d" || icon === "11n") {
                oneDayIconEl.setAttribute("src", "./assets/images/11d.png");
            } else if (icon = "13d" || icon === "13n") {
                oneDayIconEl.setAttribute("src", "./assets/images/13d.png");
            } else if (icon = "50d" || icon === "50n") {
                oneDayIconEl.setAttribute("src", "./assets/images/50d.png");
            } else {
                oneDayIconEl.setAttribute("src", "");
            };
      

        var oneDayTempEl = document.createElement("p");
        oneDayTempEl.textContent = "Temp: " + fiveDayArr[i].temp + "F";
        oneDayContainerEl.appendChild(oneDayTempEl);

        var oneDayWindEl = document.createElement("p");
        oneDayWindEl.textContent = "Wind: " + fiveDayArr[i].wind + "mph";
        oneDayContainerEl.appendChild(oneDayWindEl);

        var oneDayHumidityEl = document.createElement("p");
        oneDayHumidityEl.textContent = "Humidity: " + fiveDayArr[i].humidity + "%";
        oneDayContainerEl.appendChild(oneDayHumidityEl);
    };
};

getFiveDayWeather();