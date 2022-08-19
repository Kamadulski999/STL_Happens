var date = dayjs().format("MM/DD/YYYY");
const apiKey = "a74391bcfbdf1e9827d65a7e2e76f024"
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=38.6&lon=-90.2&units=imperial&appid="+apiKey;


var getFiveDayWeather = function(lat, lon) {
    fetch(apiUrl)
    
        .then(function(response) {
            response.json().then(function(data) {
            var weather = data;
            // console.log(weather);
            var fiveDayArr = [];
        //storing weather data from api
        for (var i = 0; i < 5; i++) {
            date = dayjs().add(i + 1, 'day').format("MM/DD/YYYY");
            var fiveDayObj = {
                date: date,
                weather: weather.list[i].weather[0].icon,
                temp: weather.list[i].main.temp,
                wind: weather.list[i].wind.speed,
                humidity: weather.list[i].main.humidity
            };

            fiveDayArr.push(fiveDayObj);
        };
        // console.log(fiveDayArr);
       

        //sending stored data to function that will print to screen
        printFiveDay(fiveDayArr);
         });
     })

    .catch(function(error) {
        alert("Unable to connect to Weather Map");
    });
};

var printFiveDay = function(fiveDayArr) {
    var fiveDayContainerEl = document.querySelector("#five-days");
    fiveDayContainerEl.innerHTML = "";
    
    //moving through array of stored weather data and creating forecast day boxes
    for (var i = 0; i < fiveDayArr.length; i ++) {
       
        var oneDayContainerEl = document.createElement("div");
        oneDayContainerEl.classList.add("one-day-container");
        oneDayContainerEl.classList.add("card");
        fiveDayContainerEl.appendChild(oneDayContainerEl);

        var oneDayDateEl = document.createElement("h2");
        oneDayDateEl.textContent =  fiveDayArr[i].date;
        oneDayDateEl.classList.add("city-date");
        oneDayContainerEl.appendChild(oneDayDateEl);

        var oneDayIconEl = document.createElement("img");
        oneDayIconEl.classList.add("weather-icon");
        oneDayContainerEl.appendChild(oneDayIconEl);


        //adding corresponding weather icon
        var icon = fiveDayArr[i].weather;
        if (icon === "01d"|| icon === "01n") {
                oneDayIconEl.setAttribute("src", "/images/01d.png")
            } else if (icon === "02d"|| icon === "02n") {
                oneDayIconEl.setAttribute("src", "/images/02d.png");
            } else if (icon === "03d"|| icon === "03n") {
                oneDayIconEl.setAttribute("src", "/images/03d.png");
            } else if (icon = "04d" || icon === "04n") {
                oneDayIconEl.setAttribute("src", "/images/04d.png");
            } else if (icon = "09d" || icon === "05n") {
                oneDayIconEl.setAttribute("src", "/images/09d.png");
            } else if (icon = "10d" || icon === "10n") {
                oneDayIconEl.setAttribute("src", "/images/10d.png");
            } else if (icon = "11d" || icon === "11n") {
                oneDayIconEl.setAttribute("src", "/images/11d.png");
            } else if (icon = "13d" || icon === "13n") {
                oneDayIconEl.setAttribute("src", "/images/13d.png");
            } else if (icon = "50d" || icon === "50n") {
                oneDayIconEl.setAttribute("src", "/images/50d.png");
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